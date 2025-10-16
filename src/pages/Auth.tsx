import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2 } from 'lucide-react';

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signup');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupName, setSignupName] = useState('');
  const [isResettingPassword, setIsResettingPassword] = useState(false);

  // Detect recovery flow and prefill values
  useEffect(() => {
    // Password recovery links include the session in the URL hash
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const isRecovery = hashParams.get('type') === 'recovery';
    if (isRecovery) {
      setIsResettingPassword(true);
    }

    // Pre-fill from session storage if coming from questionnaire
    const investorEmail = sessionStorage.getItem('investor_email');
    const investorName = sessionStorage.getItem('investor_name');

    if (investorEmail) {
      setSignupEmail(investorEmail);
      setActiveTab('signup');
    }
    if (investorName) {
      setSignupName(investorName);
    }

    // Clear session storage after reading
    sessionStorage.removeItem('investor_email');
    sessionStorage.removeItem('investor_name');
  }, []);

  // Auth state handling with correct initialization order
  useEffect(() => {
    // Listen for auth changes FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      if (s && !isResettingPassword) {
        navigate('/investor-portal');
      }
    });

    // THEN check existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session && !isResettingPassword) {
        navigate('/investor-portal');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, isResettingPassword]);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const fullName = formData.get('fullName') as string;
    const company = formData.get('company') as string;

    if (!email || !password || !fullName) {
      toast({
        variant: 'destructive',
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
      });
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          company: company,
        },
        // After confirming email, send users back to the portal
        emailRedirectTo: `${window.location.origin}/investor-portal`,
      },
    });

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Signup Error',
        description: error.message,
      });
    } else {
      // Best effort: send welcome email (no blocking on error)
      try {
        const { error: functionError } = await supabase.functions.invoke('send-welcome-email', {
          body: { fullName, email },
        });
        if (functionError) console.error('Error sending welcome email:', functionError);
      } catch (emailError) {
        console.error('Error sending welcome email:', emailError);
      }

      toast({
        title: 'Success',
        description: 'Account created successfully! Check your email for a welcome message.',
      });
    }

    setLoading(false);
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Sign In Error',
        description: error.message,
      });
    }

    setLoading(false);
  };

  const handleForgotPassword = async () => {
    const email = (document.getElementById('signin-email') as HTMLInputElement)?.value;

    if (!email) {
      toast({
        variant: 'destructive',
        title: 'Email Required',
        description: 'Please enter your email address first.',
      });
      return;
    }

    setLoading(true);

    // Redirect back to /auth – the recovery session arrives via URL hash
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth`,
    });

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message,
      });
    } else {
      toast({
        title: 'Check Your Email',
        description: 'We sent you a password reset link.',
      });
    }

    setLoading(false);
  };

  const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      toast({
        variant: 'destructive',
        title: 'Password Mismatch',
        description: 'Passwords do not match.',
      });
      return;
    }

    if (password.length < 6) {
      toast({
        variant: 'destructive',
        title: 'Password Too Short',
        description: 'Password must be at least 6 characters.',
      });
      return;
    }

    setLoading(true);

    // Ensure we have a valid session (provided by the recovery link)
    let currentSession = session;
    if (!currentSession) {
      const { data } = await supabase.auth.getSession();
      currentSession = data.session;
    }

    if (!currentSession) {
      toast({
        variant: 'destructive',
        title: 'Auth session missing',
        description: 'Please reopen the password reset link from your email.',
      });
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message,
      });
      setLoading(false);
    } else {
      toast({
        title: 'Success',
        description: 'Your password has been updated successfully.',
      });
      setLoading(false);
      setIsResettingPassword(false);
      navigate('/investor-portal');
    }
  };

  // Hide auth forms if already signed in (except during reset flow)
  if (session && !isResettingPassword) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
            <Building2 className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary">StorageBlue</h1>
          <p className="mt-2 text-sm text-muted-foreground">Access the StorageBlue Growth Fund portal</p>
        </div>

        {isResettingPassword ? (
          <Card>
            <CardHeader>
              <CardTitle>Reset Password</CardTitle>
              <CardDescription>Enter your new password below</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordReset} className="space-y-4">
                <div>
                  <Label htmlFor="password">New Password *</Label>
                  <Input id="password" name="password" type="password" required placeholder="••••••••" minLength={6} />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <Input id="confirmPassword" name="confirmPassword" type="password" required placeholder="••••••••" minLength={6} />
                </div>
                <Button type="submit" className="w-full" variant="premium" disabled={loading || !session}>
                  {loading ? 'Updating...' : 'Update Password'}
                </Button>
                {!session && (
                  <p className="text-xs text-muted-foreground text-center">Securing your reset link...</p>
                )}
              </form>
            </CardContent>
          </Card>
        ) : (
          <div className="w-full">
            <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground w-full mb-4">
              <button
                type="button"
                onClick={() => setActiveTab('signin')}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all w-1/2 ${
                  activeTab === 'signin' ? 'bg-background text-foreground shadow-sm' : ''
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('signup')}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all w-1/2 ${
                  activeTab === 'signup' ? 'bg-background text-foreground shadow-sm' : ''
                }`}
              >
                Sign Up
              </button>
            </div>

            {activeTab === 'signin' && (
              <Card>
                <CardHeader>
                  <CardTitle>Sign In</CardTitle>
                  <CardDescription>Access your investor account</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                      <Label htmlFor="signin-email">Email</Label>
                      <Input id="signin-email" name="email" type="email" required placeholder="your@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="signin-password">Password</Label>
                      <Input id="signin-password" name="password" type="password" required placeholder="••••••••" />
                    </div>
                    <Button type="submit" className="w-full" variant="premium" disabled={loading}>
                      {loading ? 'Signing in...' : 'Sign In'}
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      className="w-full text-sm text-muted-foreground hover:text-primary"
                      onClick={handleForgotPassword}
                      disabled={loading}
                    >
                      Forgot your password?
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {activeTab === 'signup' && (
              <Card>
                <CardHeader>
                  <CardTitle>Create Account</CardTitle>
                  <CardDescription>Register for investor access</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignUp} className="space-y-4">
                    <div>
                      <Label htmlFor="signup-fullname">Full Name *</Label>
                      <Input id="signup-fullname" name="fullName" type="text" required placeholder="John Doe" defaultValue={signupName} />
                    </div>
                    <div>
                      <Label htmlFor="signup-email">Email *</Label>
                      <Input id="signup-email" name="email" type="email" required placeholder="your@email.com" defaultValue={signupEmail} />
                    </div>
                    <div>
                      <Label htmlFor="signup-company">Company</Label>
                      <Input id="signup-company" name="company" type="text" placeholder="Your Company" />
                    </div>
                    <div>
                      <Label htmlFor="signup-password">Password *</Label>
                      <Input id="signup-password" name="password" type="password" required placeholder="••••••••" minLength={6} />
                    </div>
                    <Button type="submit" className="w-full" variant="premium" disabled={loading}>
                      {loading ? 'Creating account...' : 'Create Account'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;

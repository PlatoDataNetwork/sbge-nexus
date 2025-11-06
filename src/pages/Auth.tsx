import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { logActivity } from '@/lib/activityTracker';

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'signin' | 'register'>('signin');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupName, setSignupName] = useState('');
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerSubmitted, setRegisterSubmitted] = useState(false);
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showResetConfirmPassword, setShowResetConfirmPassword] = useState(false);

  // Detect recovery flow and prefill values
  useEffect(() => {
    // Password recovery links include the session in the URL hash
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const isRecovery = hashParams.get('type') === 'recovery';
    if (isRecovery) {
      setIsResettingPassword(true);
    }

    // Pre-fill from secure router state if coming from questionnaire
    const state = window.history.state?.usr;
    if (state?.investorEmail) {
      setSignupEmail(state.investorEmail);
      setActiveTab('register');
    }
    if (state?.investorName) {
      setSignupName(state.investorName);
    }
  }, []);

  // Auth state handling with correct initialization order
  useEffect(() => {
    // Detect recovery presence in URL hash early
    const recoveryInUrl = new URLSearchParams(window.location.hash.substring(1)).get('type') === 'recovery';

    // Listen for auth changes FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, s) => {
      setSession(s);

      // If Supabase indicates a password recovery flow or URL shows recovery, enter reset mode and do NOT redirect
      if (event === 'PASSWORD_RECOVERY' || recoveryInUrl) {
        setIsResettingPassword(true);
        return;
      }

      if (s && !isResettingPassword && !recoveryInUrl) {
        // Log successful login
        await logActivity(s.user.id, 'user_login', {
          timestamp: new Date().toISOString(),
          event: event,
        });

        navigate('/investor-portal');
      }
    });

    // THEN check existing session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session);
      if (session && !(isResettingPassword || recoveryInUrl)) {
        navigate('/investor-portal');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

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

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          company: company,
        },
        // After confirming email, send users back to auth page
        emailRedirectTo: `${window.location.origin}/auth`,
      },
    });

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Signup Error',
        description: error.message,
      });
    } else {
      // Log signup activity
      if (data.user) {
        await logActivity(data.user.id, 'user_signup', {
          timestamp: new Date().toISOString(),
          full_name: fullName,
          company: company,
        });
      }
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

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Sign In Error',
        description: error.message,
      });
      // Failed login - no user_id to log
    } else if (data.user) {
      // Activity logging is handled in onAuthStateChange
      toast({
        title: 'Welcome back!',
        description: 'You have successfully signed in.',
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
      // Log password reset completion
      if (currentSession?.user) {
        await logActivity(currentSession.user.id, 'password_reset_completed', {
          timestamp: new Date().toISOString(),
        });
      }
      
      toast({
        title: 'Success',
        description: 'Your password has been updated successfully.',
      });
      setLoading(false);
      setIsResettingPassword(false);
      navigate('/investor-portal');
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    if (!email) {
      toast({
        variant: 'destructive',
        title: 'Missing Information',
        description: 'Please enter your email address.',
      });
      return;
    }

    setLoading(true);

    try {
      // Insert access request
      const { error: insertError } = await supabase
        .from('access_requests')
        .insert([{ email }]);

      if (insertError) {
        if (insertError.code === '23505') { // Unique violation
          toast({
            variant: 'destructive',
            title: 'Already Requested',
            description: 'An access request with this email already exists.',
          });
        } else {
          throw insertError;
        }
      } else {
        // Send confirmation email
        try {
          const { error: functionError } = await supabase.functions.invoke('send-access-confirmation', {
            body: { email },
          });
          if (functionError) console.error('Error sending confirmation email:', functionError);
        } catch (emailError) {
          console.error('Error sending confirmation email:', emailError);
        }

        setRegisterSubmitted(true);
        toast({
          title: 'Request Submitted',
          description: 'Your access request has been received. Check your email for confirmation.',
        });
      }
    } catch (error) {
      console.error('Error submitting access request:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to submit access request. Please try again.',
      });
    } finally {
      setLoading(false);
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
                  <div className="relative">
                    <Input id="password" name="password" type={showResetPassword ? "text" : "password"} required placeholder="••••••••" minLength={6} className="pr-10" />
                    <button
                      type="button"
                      onClick={() => setShowResetPassword(!showResetPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showResetPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <div className="relative">
                    <Input id="confirmPassword" name="confirmPassword" type={showResetConfirmPassword ? "text" : "password"} required placeholder="••••••••" minLength={6} className="pr-10" />
                    <button
                      type="button"
                      onClick={() => setShowResetConfirmPassword(!showResetConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showResetConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
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
                onClick={() => {
                  setActiveTab('signin');
                  setRegisterSubmitted(false);
                }}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all w-1/2 ${
                  activeTab === 'signin' ? 'bg-background text-foreground shadow-sm' : ''
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('register');
                  setRegisterSubmitted(false);
                }}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all w-1/2 ${
                  activeTab === 'register' ? 'bg-background text-foreground shadow-sm' : ''
                }`}
              >
                Register
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
                      <div className="relative">
                        <Input id="signin-password" name="password" type={showSignInPassword ? "text" : "password"} required placeholder="••••••••" className="pr-10" />
                        <button
                          type="button"
                          onClick={() => setShowSignInPassword(!showSignInPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {showSignInPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                    <Button type="submit" className="w-full" variant="premium" disabled={loading}>
                      {loading ? 'Signing in...' : 'Sign In'}
                    </Button>
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      disabled={loading}
                      className="text-sm text-primary hover:text-primary/80 underline transition-colors text-center w-full"
                    >
                      Forgot your password?
                    </button>
                  </form>
                </CardContent>
              </Card>
            )}

            
            {activeTab === 'register' && (
              <Card>
                <CardHeader>
                  <CardTitle>Register</CardTitle>
                  <CardDescription>Enter your email address to register for access</CardDescription>
                </CardHeader>
                <CardContent>
                  {registerSubmitted ? (
                    <div className="text-center py-8 space-y-4">
                      <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-primary">Request Received</h3>
                        <p className="text-muted-foreground">
                          Thank you for your interest in StorageBlue. We've sent a confirmation to your email.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Our team will review your request and notify you once approved.
                        </p>
                      </div>
                      <Button 
                        variant="outline"
                        onClick={() => navigate('/contact')}
                        className="mt-4"
                      >
                        Need immediate assistance? Contact us
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setRegisterSubmitted(false);
                          setActiveTab('signin');
                        }}
                        className="mt-2 w-full"
                      >
                        Return to login
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleRegister} className="space-y-4">
                      <div>
                        <Label htmlFor="register-email">Email</Label>
                        <Input 
                          id="register-email" 
                          name="email" 
                          type="email" 
                          required 
                          placeholder="your@email.com"
                          value={registerEmail}
                          onChange={(e) => setRegisterEmail(e.target.value)}
                        />
                      </div>
                      <Button type="submit" className="w-full" variant="premium" disabled={loading}>
                        {loading ? 'Submitting...' : 'Continue'}
                      </Button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('signin')}
                        className="text-sm text-primary hover:text-primary/80 underline transition-colors text-center w-full flex items-center justify-center gap-1"
                      >
                        <span>←</span> Return to login
                      </button>
                    </form>
                  )}
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

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, TrendingUp, UserCog, LogOut, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import UsersList from '@/components/admin/UsersList';
import InquiriesList from '@/components/admin/InquiriesList';
import AnalyticsDashboard from '@/components/admin/AnalyticsDashboard';
import CallsCalendar from '@/components/admin/CallsCalendar';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalInquiries: 0,
    newInquiries: 0,
  });

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/auth');
        return;
      }

      // Check if user has admin role
      const { data: roles, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin')
        .single();

      if (error || !roles) {
        toast({
          variant: 'destructive',
          title: 'Access Denied',
          description: 'You do not have admin privileges.',
        });
        navigate('/');
        return;
      }

      setIsAdmin(true);
      loadStats();
    } catch (error) {
      console.error('Admin access check error:', error);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    // Get total users
    const { count: usersCount } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true });

    // Get total inquiries (questionnaires + contacts + legacy)
    const { count: questionnaireCount } = await supabase
      .from('investor_questionnaire_responses')
      .select('*', { count: 'exact', head: true });
    
    const { count: contactCount } = await supabase
      .from('contact_form_submissions')
      .select('*', { count: 'exact', head: true });

    const { count: legacyCount } = await supabase
      .from('investor_inquiries')
      .select('*', { count: 'exact', head: true });

    // Get new inquiries (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const { count: newQuestionnaireCount } = await supabase
      .from('investor_questionnaire_responses')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', sevenDaysAgo.toISOString());
    
    const { count: newContactCount } = await supabase
      .from('contact_form_submissions')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', sevenDaysAgo.toISOString());

    setStats({
      totalUsers: usersCount || 0,
      totalInquiries: (questionnaireCount || 0) + (contactCount || 0) + (legacyCount || 0),
      newInquiries: (newQuestionnaireCount || 0) + (newContactCount || 0),
    });
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Sign out error:', error);
        toast({
          variant: 'destructive',
          title: 'Sign Out Error',
          description: 'Failed to sign out. Please try again.',
        });
        return;
      }
      navigate('/');
    } catch (error) {
      console.error('Sign out error:', error);
      toast({
        variant: 'destructive',
        title: 'Sign Out Error',
        description: 'An unexpected error occurred.',
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 border-4 border-accent border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-heading font-bold text-primary mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Manage users, inquiries, and view analytics
            </p>
          </div>
          <Button onClick={handleSignOut} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total Users</p>
              <p className="text-3xl font-bold text-primary">{stats.totalUsers}</p>
              <p className="text-xs text-muted-foreground">Registered investors</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total Inquiries</p>
              <p className="text-3xl font-bold text-primary">{stats.totalInquiries}</p>
              <p className="text-xs text-muted-foreground">Investment inquiries</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <UserCog className="h-8 w-8 text-accent" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">New Inquiries</p>
              <p className="text-3xl font-bold text-primary">{stats.newInquiries}</p>
              <p className="text-xs text-muted-foreground">Last 7 days</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="calendar">
              <Calendar className="h-4 w-4 mr-2" />
              Calendar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <UsersList />
          </TabsContent>

          <TabsContent value="inquiries">
            <InquiriesList onUpdate={loadStats} />
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsDashboard />
          </TabsContent>

          <TabsContent value="calendar">
            <CallsCalendar />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
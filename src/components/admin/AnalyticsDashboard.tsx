import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Eye, Users, MousePointer } from 'lucide-react';

const AnalyticsDashboard = () => {
  const [signupData, setSignupData] = useState<any[]>([]);
  const [inquiryData, setInquiryData] = useState<any[]>([]);
  const [trafficData, setTrafficData] = useState<any[]>([]);
  const [pageViewsData, setPageViewsData] = useState<any[]>([]);
  const [totalPageViews, setTotalPageViews] = useState(0);
  const [uniqueVisitors, setUniqueVisitors] = useState(0);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    // Load signups by month
    const { data: profiles } = await supabase
      .from('profiles')
      .select('created_at')
      .order('created_at', { ascending: true });

    // Load inquiries by month
    const { data: inquiries } = await supabase
      .from('investor_inquiries')
      .select('created_at')
      .order('created_at', { ascending: true });

    // Load user activity for traffic stats
    const { data: activities } = await supabase
      .from('user_activity')
      .select('*')
      .order('created_at', { ascending: true });

    // Process signup data
    if (profiles) {
      const signupsByMonth = processDataByMonth(profiles);
      setSignupData(signupsByMonth);
    }

    // Process inquiry data
    if (inquiries) {
      const inquiriesByMonth = processDataByMonth(inquiries);
      setInquiryData(inquiriesByMonth);
    }

    // Process traffic data
    if (activities) {
      const trafficByDay = processTrafficByDay(activities);
      setTrafficData(trafficByDay);

      const pageViews = processPageViews(activities);
      setPageViewsData(pageViews);

      setTotalPageViews(activities.length);
      
      // Count unique visitors (unique user_ids and ip_addresses)
      const uniqueUsers = new Set([
        ...activities.filter(a => a.user_id).map(a => a.user_id),
        ...activities.filter(a => a.ip_address).map(a => a.ip_address)
      ]);
      setUniqueVisitors(uniqueUsers.size);
    }
  };

  const processDataByMonth = (data: any[]) => {
    const monthCounts: { [key: string]: number } = {};
    
    data.forEach(item => {
      const date = new Date(item.created_at);
      const monthYear = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
      monthCounts[monthYear] = (monthCounts[monthYear] || 0) + 1;
    });

    return Object.entries(monthCounts).map(([month, count]) => ({
      month,
      count,
    }));
  };

  const processTrafficByDay = (data: any[]) => {
    const dayCounts: { [key: string]: number } = {};
    const dayUniqueVisitors: { [key: string]: Set<string> } = {};
    
    data.forEach(item => {
      const date = new Date(item.created_at);
      const day = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      dayCounts[day] = (dayCounts[day] || 0) + 1;
      
      // Track unique visitors per day
      if (!dayUniqueVisitors[day]) {
        dayUniqueVisitors[day] = new Set();
      }
      if (item.user_id) {
        dayUniqueVisitors[day].add(`user_${item.user_id}`);
      }
      if (item.ip_address) {
        dayUniqueVisitors[day].add(`ip_${item.ip_address}`);
      }
    });

    return Object.entries(dayCounts)
      .slice(-14) // Last 14 days
      .map(([day, count]) => ({
        day,
        views: count,
        visitors: dayUniqueVisitors[day]?.size || 0,
      }));
  };

  const processPageViews = (data: any[]) => {
    const pageCounts: { [key: string]: number } = {};
    
    data.forEach(item => {
      if (item.activity_data && item.activity_data.page) {
        const page = item.activity_data.page;
        pageCounts[page] = (pageCounts[page] || 0) + 1;
      }
    });

    return Object.entries(pageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5) // Top 5 pages
      .map(([page, count]) => ({
        name: page.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        value: count,
      }));
  };

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--secondary))', '#8884d8', '#82ca9d'];

  return (
    <div className="space-y-8">
      {/* Traffic Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Page Views</p>
                <p className="text-2xl font-bold">{totalPageViews}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Users className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Unique Visitors</p>
                <p className="text-2xl font-bold">{uniqueVisitors}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-secondary/10">
                <MousePointer className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Pages/Visit</p>
                <p className="text-2xl font-bold">
                  {uniqueVisitors > 0 ? (totalPageViews / uniqueVisitors).toFixed(1) : '0'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Growth Rate</p>
                <p className="text-2xl font-bold text-green-600">+12%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Traffic Over Time */}
      <Card>
        <CardHeader>
          <CardTitle>Traffic Over Time (Last 14 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip 
                formatter={(value: number, name: string) => {
                  if (name === 'views') return [value, 'Page Views'];
                  if (name === 'visitors') return [value, 'Unique Visitors'];
                  return [value, name];
                }}
              />
              <Line type="monotone" dataKey="views" stroke="hsl(var(--primary))" strokeWidth={2} name="Page Views" />
              <Line type="monotone" dataKey="visitors" stroke="hsl(var(--accent))" strokeWidth={2} name="Unique Visitors" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pageViewsData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pageViewsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* User Signups */}
        <Card>
          <CardHeader>
            <CardTitle>User Signups Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={signupData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="hsl(var(--accent))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Investor Inquiries */}
      <Card>
        <CardHeader>
          <CardTitle>Investor Inquiries Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={inquiryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Key Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border border-border rounded-lg">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Conversion Rate</h3>
              <p className="text-3xl font-bold text-primary">
                {signupData.length > 0 && inquiryData.length > 0
                  ? `${Math.round((signupData.reduce((a, b) => a + b.count, 0) / inquiryData.reduce((a, b) => a + b.count, 0)) * 100)}%`
                  : '0%'}
              </p>
              <p className="text-xs text-muted-foreground mt-1">Inquiries to signups</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Average Daily Inquiries</h3>
              <p className="text-3xl font-bold text-primary">
                {inquiryData.length > 0
                  ? Math.round(inquiryData.reduce((a, b) => a + b.count, 0) / inquiryData.length)
                  : 0}
              </p>
              <p className="text-xs text-muted-foreground mt-1">Per month</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
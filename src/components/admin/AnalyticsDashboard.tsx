import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const AnalyticsDashboard = () => {
  const [signupData, setSignupData] = useState<any[]>([]);
  const [inquiryData, setInquiryData] = useState<any[]>([]);

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

  return (
    <div className="space-y-8">
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
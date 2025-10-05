import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { formatDistanceToNow, format } from 'date-fns';
import { Activity, Eye, FileCheck, MessageSquare, CheckCircle } from 'lucide-react';

interface ActivityLog {
  id: string;
  activity_type: string;
  activity_data: any;
  created_at: string;
}

interface ActivityLogProps {
  userId: string;
}

const ActivityLog = ({ userId }: ActivityLogProps) => {
  const [activities, setActivities] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadActivities();
  }, [userId]);

  const loadActivities = async () => {
    try {
      const { data, error } = await supabase
        .from('user_activity')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) throw error;
      setActivities(data || []);
    } catch (error) {
      console.error('Error loading activities:', error);
    } finally {
      setLoading(false);
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'portal_visit':
        return <Eye className="h-4 w-4" />;
      case 'questionnaire_visit':
        return <MessageSquare className="h-4 w-4" />;
      case 'questionnaire_submitted':
        return <CheckCircle className="h-4 w-4" />;
      case 'terms_accepted':
        return <FileCheck className="h-4 w-4" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  const getActivityLabel = (type: string) => {
    switch (type) {
      case 'portal_visit':
        return 'Visited Investor Portal';
      case 'questionnaire_visit':
        return 'Visited Questionnaire';
      case 'questionnaire_submitted':
        return 'Submitted Questionnaire';
      case 'terms_accepted':
        return 'Accepted Terms';
      default:
        return type.replace(/_/g, ' ');
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'portal_visit':
        return 'secondary';
      case 'questionnaire_submitted':
        return 'default';
      case 'terms_accepted':
        return 'default';
      default:
        return 'outline';
    }
  };

  if (loading) {
    return <div className="text-center py-4">Loading activity...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Activity Log
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {activities.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No activity recorded yet
            </div>
          ) : (
            <div className="space-y-3">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {getActivityIcon(activity.activity_type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-sm">
                        {getActivityLabel(activity.activity_type)}
                      </p>
                      <Badge variant={getActivityColor(activity.activity_type) as any} className="text-xs">
                        {activity.activity_type}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {format(new Date(activity.created_at), 'PPpp')}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatDistanceToNow(new Date(activity.created_at), { addSuffix: true })}
                    </p>
                    {activity.activity_data?.page && (
                      <Badge variant="outline" className="text-xs mt-2">
                        {activity.activity_data.page}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ActivityLog;

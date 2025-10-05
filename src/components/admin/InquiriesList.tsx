import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { formatDistanceToNow } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

interface Inquiry {
  id: string;
  full_name: string;
  email: string;
  company: string | null;
  phone: string | null;
  aum: string | null;
  message: string | null;
  status: string;
  created_at: string;
}

interface InquiriesListProps {
  onUpdate?: () => void;
}

const InquiriesList = ({ onUpdate }: InquiriesListProps) => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadInquiries();
  }, []);

  const loadInquiries = async () => {
    try {
      const { data, error } = await supabase
        .from('investor_inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setInquiries(data || []);
    } catch (error) {
      console.error('Error loading inquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('investor_inquiries')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Status Updated',
        description: 'Inquiry status has been updated successfully.',
      });

      loadInquiries();
      if (onUpdate) onUpdate();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to update inquiry status.',
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500';
      case 'contacted':
        return 'bg-yellow-500';
      case 'qualified':
        return 'bg-green-500';
      case 'closed':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading inquiries...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Investor Inquiries</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {inquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className="p-4 border border-border rounded-lg space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{inquiry.full_name}</h3>
                  <p className="text-sm text-muted-foreground">{inquiry.email}</p>
                  {inquiry.phone && (
                    <p className="text-sm text-muted-foreground">{inquiry.phone}</p>
                  )}
                </div>
                <div className="text-right">
                  <Badge className={getStatusColor(inquiry.status)}>
                    {inquiry.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">
                    {formatDistanceToNow(new Date(inquiry.created_at), { addSuffix: true })}
                  </p>
                </div>
              </div>

              {inquiry.company && (
                <p className="text-sm">
                  <span className="font-medium">Company:</span> {inquiry.company}
                </p>
              )}
              {inquiry.aum && (
                <p className="text-sm">
                  <span className="font-medium">AUM:</span> {inquiry.aum}
                </p>
              )}
              {inquiry.message && (
                <p className="text-sm text-muted-foreground italic">"{inquiry.message}"</p>
              )}

              <div className="flex items-center gap-2">
                <Select
                  value={inquiry.status}
                  onValueChange={(value) => updateStatus(inquiry.id, value)}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="qualified">Qualified</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          ))}
          {inquiries.length === 0 && (
            <p className="text-center text-muted-foreground py-8">No inquiries found</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default InquiriesList;
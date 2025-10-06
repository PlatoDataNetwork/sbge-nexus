import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

interface QuestionnaireResponse {
  id: string;
  full_name: string;
  email: string;
  investment_entity: string;
  investment_range: string;
  investment_timeline: string;
  storage_experience: string;
  investment_goals: string;
  user_id: string | null;
  created_at: string;
}

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  firm: string;
  aum: string | null;
  accreditation: string | null;
  message: string | null;
  user_id: string | null;
  created_at: string;
}

interface InquiriesListProps {
  onUpdate?: () => void;
}

const InquiriesList = ({ onUpdate }: InquiriesListProps) => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [questionnaires, setQuestionnaires] = useState<QuestionnaireResponse[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    try {
      await Promise.all([
        loadInquiries(),
        loadQuestionnaires(),
        loadContacts()
      ]);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadInquiries = async () => {
    const { data, error } = await supabase
      .from('investor_inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    setInquiries(data || []);
  };

  const loadQuestionnaires = async () => {
    const { data, error } = await supabase
      .from('investor_questionnaire_responses')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    setQuestionnaires(data || []);
  };

  const loadContacts = async () => {
    const { data, error } = await supabase
      .from('contact_form_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    setContacts(data || []);
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
    return <div className="text-center py-8">Loading data...</div>;
  }

  return (
    <Tabs defaultValue="questionnaires" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="questionnaires">Questionnaires ({questionnaires.length})</TabsTrigger>
        <TabsTrigger value="contacts">Contact Forms ({contacts.length})</TabsTrigger>
        <TabsTrigger value="inquiries">Legacy Inquiries ({inquiries.length})</TabsTrigger>
      </TabsList>

      <TabsContent value="questionnaires">
        <Card>
          <CardHeader>
            <CardTitle>Investor Questionnaire Responses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {questionnaires.map((response) => (
                <div
                  key={response.id}
                  className="p-6 border border-border rounded-lg space-y-4 bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between border-b pb-3">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">{response.full_name}</h3>
                      <p className="text-sm text-muted-foreground">{response.email}</p>
                      {response.user_id && (
                        <Badge variant="outline" className="mt-1">
                          Registered User
                        </Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(response.created_at), { addSuffix: true })}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">Investment Entity</p>
                      <p className="text-sm font-medium">{response.investment_entity}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">Investment Range</p>
                      <p className="text-sm font-medium">{response.investment_range}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">Investment Timeline</p>
                      <p className="text-sm font-medium">{response.investment_timeline}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">Storage Experience</p>
                      <p className="text-sm font-medium">{response.storage_experience}</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Investment Goals</p>
                    <p className="text-sm text-foreground bg-muted p-3 rounded-md">{response.investment_goals}</p>
                  </div>
                </div>
              ))}
              {questionnaires.length === 0 && (
                <p className="text-center text-muted-foreground py-8">No questionnaire responses found</p>
              )}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="contacts">
        <Card>
          <CardHeader>
            <CardTitle>Contact Form Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="p-6 border border-border rounded-lg space-y-3 bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between border-b pb-3">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">{contact.name}</h3>
                      <p className="text-sm text-muted-foreground">{contact.email}</p>
                      <p className="text-sm font-medium text-foreground mt-1">{contact.firm}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(contact.created_at), { addSuffix: true })}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contact.aum && (
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">AUM</p>
                        <p className="text-sm font-medium">{contact.aum}</p>
                      </div>
                    )}
                    {contact.accreditation && (
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Investor Status</p>
                        <p className="text-sm font-medium">{contact.accreditation}</p>
                      </div>
                    )}
                  </div>

                  {contact.message && (
                    <div className="pt-2">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Message</p>
                      <p className="text-sm text-foreground bg-muted p-3 rounded-md italic">"{contact.message}"</p>
                    </div>
                  )}
                </div>
              ))}
              {contacts.length === 0 && (
                <p className="text-center text-muted-foreground py-8">No contact submissions found</p>
              )}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="inquiries">
        <Card>
          <CardHeader>
            <CardTitle>Legacy Investor Inquiries</CardTitle>
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
      </TabsContent>
    </Tabs>
  );
};

export default InquiriesList;
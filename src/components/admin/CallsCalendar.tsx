import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Phone, Clock, User, Building } from 'lucide-react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, parseISO } from 'date-fns';

interface ScheduledCall {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  preferred_date: string;
  preferred_time: string;
  investment_amount: string | null;
  notes: string | null;
  created_at: string;
}

const CallsCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calls, setCalls] = useState<ScheduledCall[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    loadCalls();
  }, [currentDate]);

  const loadCalls = async () => {
    setLoading(true);
    try {
      const monthStart = startOfMonth(currentDate);
      const monthEnd = endOfMonth(currentDate);

      const { data, error } = await supabase
        .from('scheduled_calls')
        .select('*')
        .gte('preferred_date', format(monthStart, 'yyyy-MM-dd'))
        .lte('preferred_date', format(monthEnd, 'yyyy-MM-dd'))
        .order('preferred_date', { ascending: true });

      if (error) throw error;
      setCalls(data || []);
    } catch (error) {
      console.error('Error loading calls:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCallsForDate = (date: Date) => {
    return calls.filter(call => 
      isSameDay(parseISO(call.preferred_date), date)
    );
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const firstDayOfWeek = monthStart.getDay();
  const emptyDays = Array(firstDayOfWeek).fill(null);

  const selectedDateCalls = selectedDate ? getCallsForDate(selectedDate) : [];

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin h-12 w-12 border-4 border-accent border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Scheduled Calls Calendar</CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={previousMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="font-semibold text-lg px-4">
                {format(currentDate, 'MMMM yyyy')}
              </span>
              <Button variant="outline" size="sm" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Day Headers */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center font-semibold text-sm text-muted-foreground py-2">
                {day}
              </div>
            ))}

            {/* Empty cells for days before month starts */}
            {emptyDays.map((_, index) => (
              <div key={`empty-${index}`} className="aspect-square" />
            ))}

            {/* Calendar Days */}
            {daysInMonth.map(day => {
              const dayCalls = getCallsForDate(day);
              const isSelected = selectedDate && isSameDay(day, selectedDate);
              const hasCallsToday = dayCalls.length > 0;

              return (
                <button
                  key={day.toISOString()}
                  onClick={() => setSelectedDate(day)}
                  className={`
                    aspect-square p-2 rounded-lg border transition-all
                    ${isSelected ? 'border-primary bg-primary/10' : 'border-border hover:border-accent'}
                    ${!isSameMonth(day, currentDate) ? 'opacity-40' : ''}
                    ${hasCallsToday ? 'bg-accent/5' : ''}
                  `}
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <span className={`text-sm ${isSelected ? 'font-bold text-primary' : ''}`}>
                      {format(day, 'd')}
                    </span>
                    {hasCallsToday && (
                      <Badge variant="secondary" className="mt-1 text-xs px-1 py-0">
                        {dayCalls.length}
                      </Badge>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Selected Date Details */}
      {selectedDate && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              Calls on {format(selectedDate, 'MMMM d, yyyy')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDateCalls.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                No calls scheduled for this date
              </p>
            ) : (
              <div className="space-y-4">
                {selectedDateCalls.map(call => (
                  <Card key={call.id} className="border-border">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="font-semibold">{call.name}</p>
                              <p className="text-sm text-muted-foreground">{call.email}</p>
                            </div>
                          </div>
                          
                          {call.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              <p className="text-sm">{call.phone}</p>
                            </div>
                          )}
                          
                          {call.company && (
                            <div className="flex items-center gap-2">
                              <Building className="h-4 w-4 text-muted-foreground" />
                              <p className="text-sm">{call.company}</p>
                            </div>
                          )}
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <p className="text-sm font-medium">{call.preferred_time}</p>
                          </div>
                          
                          {call.investment_amount && (
                            <div>
                              <p className="text-xs text-muted-foreground">Investment Amount</p>
                              <Badge variant="outline">{call.investment_amount}</Badge>
                            </div>
                          )}
                          
                          {call.notes && (
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Notes</p>
                              <p className="text-sm bg-muted p-2 rounded">{call.notes}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CallsCalendar;

-- Create scheduled_calls table for persisting call scheduling data
CREATE TABLE public.scheduled_calls (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  investment_amount TEXT,
  notes TEXT,
  preferred_date DATE NOT NULL,
  preferred_time TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.scheduled_calls ENABLE ROW LEVEL SECURITY;

-- Users can insert their own scheduled calls
CREATE POLICY "Users can create their own scheduled calls"
ON public.scheduled_calls
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Users can view their own scheduled calls
CREATE POLICY "Users can view their own scheduled calls"
ON public.scheduled_calls
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Admins can view all scheduled calls
CREATE POLICY "Admins can view all scheduled calls"
ON public.scheduled_calls
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can update all scheduled calls
CREATE POLICY "Admins can update all scheduled calls"
ON public.scheduled_calls
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Deny anonymous access
CREATE POLICY "Deny anonymous SELECT on scheduled calls"
ON public.scheduled_calls
AS RESTRICTIVE
FOR SELECT
TO anon
USING (false);
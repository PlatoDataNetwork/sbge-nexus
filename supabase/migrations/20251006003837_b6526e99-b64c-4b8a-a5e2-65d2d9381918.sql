-- Create table for investor questionnaire responses
CREATE TABLE IF NOT EXISTS public.investor_questionnaire_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  investment_entity TEXT NOT NULL,
  investment_range TEXT NOT NULL,
  investment_timeline TEXT NOT NULL,
  storage_experience TEXT NOT NULL,
  investment_goals TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for contact form submissions
CREATE TABLE IF NOT EXISTS public.contact_form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  firm TEXT NOT NULL,
  aum TEXT,
  accreditation TEXT,
  message TEXT,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.investor_questionnaire_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_form_submissions ENABLE ROW LEVEL SECURITY;

-- Policies for questionnaire responses - allow anyone to insert (for pre-signup)
CREATE POLICY "Anyone can submit questionnaire responses"
ON public.investor_questionnaire_responses
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Users can view their own questionnaire responses"
ON public.investor_questionnaire_responses
FOR SELECT
USING (auth.uid() = user_id OR user_id IS NULL);

-- Policies for contact form - allow anyone to insert
CREATE POLICY "Anyone can submit contact forms"
ON public.contact_form_submissions
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Users can view their own contact submissions"
ON public.contact_form_submissions
FOR SELECT
USING (auth.uid() = user_id OR user_id IS NULL);

-- Create indexes
CREATE INDEX idx_questionnaire_responses_user_id ON public.investor_questionnaire_responses(user_id);
CREATE INDEX idx_questionnaire_responses_created_at ON public.investor_questionnaire_responses(created_at DESC);
CREATE INDEX idx_contact_submissions_user_id ON public.contact_form_submissions(user_id);
CREATE INDEX idx_contact_submissions_created_at ON public.contact_form_submissions(created_at DESC);
-- Add admin_notes column to investor_questionnaire_responses table
ALTER TABLE public.investor_questionnaire_responses
ADD COLUMN admin_notes TEXT;

-- Create index for better performance when filtering by notes
CREATE INDEX idx_investor_questionnaire_admin_notes 
ON public.investor_questionnaire_responses(admin_notes) 
WHERE admin_notes IS NOT NULL;
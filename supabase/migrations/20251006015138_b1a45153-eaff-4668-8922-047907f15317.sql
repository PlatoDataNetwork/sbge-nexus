-- Add admin policy to view all questionnaire responses
CREATE POLICY "Admins can view all questionnaire responses"
ON public.investor_questionnaire_responses
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));
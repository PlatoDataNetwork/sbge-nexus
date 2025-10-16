-- Allow admins to update questionnaire responses (for admin_notes)
CREATE POLICY "Admins can update all questionnaire responses"
ON public.investor_questionnaire_responses
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
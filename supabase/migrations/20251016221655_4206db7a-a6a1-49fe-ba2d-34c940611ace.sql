-- Fix public exposure of investor questionnaire responses
-- Drop the existing policy that allows public access
DROP POLICY IF EXISTS "Users can view their own questionnaire responses" ON public.investor_questionnaire_responses;

-- Create a new policy that only allows authenticated users to view their own submissions
CREATE POLICY "Users can view their own questionnaire responses"
ON public.investor_questionnaire_responses
FOR SELECT
USING (auth.uid() = user_id);

-- The admin policy already exists and is correct
-- The insert policy already exists and is correct
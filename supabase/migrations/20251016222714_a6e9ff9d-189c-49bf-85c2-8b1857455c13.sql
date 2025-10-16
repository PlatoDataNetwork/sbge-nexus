-- Add explicit denial policies for unauthenticated SELECT access on sensitive tables
-- This provides defense-in-depth security to prevent any potential data leaks

-- Contact Form Submissions: Deny anonymous SELECT
CREATE POLICY "Deny anonymous SELECT on contact submissions"
ON public.contact_form_submissions
AS RESTRICTIVE
FOR SELECT
TO anon
USING (false);

-- Investor Inquiries: Deny anonymous SELECT  
CREATE POLICY "Deny anonymous SELECT on investor inquiries"
ON public.investor_inquiries
AS RESTRICTIVE
FOR SELECT
TO anon
USING (false);

-- Investor Questionnaire Responses: Deny anonymous SELECT
CREATE POLICY "Deny anonymous SELECT on questionnaire responses"
ON public.investor_questionnaire_responses
AS RESTRICTIVE
FOR SELECT
TO anon
USING (false);

-- User Activity: Add explicit policy that only admins can SELECT
-- This prevents any potential for authenticated non-admin users to access activity logs
CREATE POLICY "Only admins can SELECT user activity"
ON public.user_activity
AS RESTRICTIVE
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Profiles: Deny anonymous SELECT (profiles should only be viewable by authenticated users)
CREATE POLICY "Deny anonymous SELECT on profiles"
ON public.profiles
AS RESTRICTIVE
FOR SELECT
TO anon
USING (false);
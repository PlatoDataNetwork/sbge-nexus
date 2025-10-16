-- Fix public exposure of contact form submissions
-- Drop the existing policy that allows public access
DROP POLICY IF EXISTS "Users can view their own contact submissions" ON public.contact_form_submissions;

-- Create a new policy that only allows authenticated users to view their own submissions
CREATE POLICY "Users can view their own contact submissions"
ON public.contact_form_submissions
FOR SELECT
USING (auth.uid() = user_id);

-- Add policy for admins to view all contact submissions
CREATE POLICY "Admins can view all contact submissions"
ON public.contact_form_submissions
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add policy for admins to update contact submissions
CREATE POLICY "Admins can update all contact submissions"
ON public.contact_form_submissions
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));
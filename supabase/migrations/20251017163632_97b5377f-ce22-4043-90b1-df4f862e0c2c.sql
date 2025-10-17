-- Fix user_id enforcement in RLS INSERT policies
-- This prevents authenticated users from submitting forms with wrong user_id

-- Drop existing permissive INSERT policies
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contact_form_submissions;
DROP POLICY IF EXISTS "Users can create inquiries" ON public.investor_inquiries;
DROP POLICY IF EXISTS "Anyone can submit questionnaire responses" ON public.investor_questionnaire_responses;

-- Create new INSERT policies with proper user_id enforcement
-- For contact_form_submissions
CREATE POLICY "Users can submit contact forms with correct user_id"
ON public.contact_form_submissions
FOR INSERT
WITH CHECK (
  (auth.uid() IS NULL AND user_id IS NULL) OR 
  (auth.uid() = user_id)
);

-- For investor_inquiries
CREATE POLICY "Users can create inquiries with correct user_id"
ON public.investor_inquiries
FOR INSERT
WITH CHECK (
  (auth.uid() IS NULL AND user_id IS NULL) OR 
  (auth.uid() = user_id)
);

-- For investor_questionnaire_responses
CREATE POLICY "Users can submit questionnaire with correct user_id"
ON public.investor_questionnaire_responses
FOR INSERT
WITH CHECK (
  (auth.uid() IS NULL AND user_id IS NULL) OR 
  (auth.uid() = user_id)
);

-- Create a database function for atomic role changes
-- This fixes the race condition in role management
CREATE OR REPLACE FUNCTION public.change_user_role(
  _user_id uuid,
  _new_role app_role
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Atomic UPSERT operation
  INSERT INTO user_roles (user_id, role)
  VALUES (_user_id, _new_role)
  ON CONFLICT (user_id, role) 
  DO UPDATE SET role = EXCLUDED.role
  WHERE user_roles.user_id = _user_id;
  
  -- Delete old roles that don't match the new one
  DELETE FROM user_roles 
  WHERE user_id = _user_id AND role != _new_role;
END;
$$;
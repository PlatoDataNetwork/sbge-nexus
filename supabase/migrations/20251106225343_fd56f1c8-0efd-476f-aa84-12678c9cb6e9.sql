-- Fix function search_path for security (drop cascade to handle dependencies)
DROP TRIGGER IF EXISTS update_access_requests_timestamp ON public.access_requests;
DROP FUNCTION IF EXISTS public.update_access_requests_updated_at();

-- Recreate function with proper search_path
CREATE OR REPLACE FUNCTION public.update_access_requests_updated_at()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Recreate trigger
CREATE TRIGGER update_access_requests_timestamp
  BEFORE UPDATE ON public.access_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_access_requests_updated_at();
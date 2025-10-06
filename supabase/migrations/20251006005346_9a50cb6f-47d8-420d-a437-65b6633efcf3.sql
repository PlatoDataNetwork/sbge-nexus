-- Add new mandatory fields to investor_questionnaire_responses table
ALTER TABLE public.investor_questionnaire_responses
ADD COLUMN company_name text NOT NULL DEFAULT '',
ADD COLUMN address text NOT NULL DEFAULT '',
ADD COLUMN state text NOT NULL DEFAULT '',
ADD COLUMN zip text NOT NULL DEFAULT '',
ADD COLUMN phone text NOT NULL DEFAULT '',
ADD COLUMN is_qualified_institutional boolean NOT NULL DEFAULT false;

-- Remove defaults after adding columns (defaults were just for existing rows)
ALTER TABLE public.investor_questionnaire_responses
ALTER COLUMN company_name DROP DEFAULT,
ALTER COLUMN address DROP DEFAULT,
ALTER COLUMN state DROP DEFAULT,
ALTER COLUMN zip DROP DEFAULT,
ALTER COLUMN phone DROP DEFAULT,
ALTER COLUMN is_qualified_institutional DROP DEFAULT;
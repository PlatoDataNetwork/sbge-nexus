-- Add policy to allow users to insert their own activity logs
DO $$ BEGIN
  -- Enable RLS if not already enabled (safe to run)
  PERFORM 1 FROM pg_tables WHERE schemaname = 'public' AND tablename = 'user_activity';
  EXECUTE 'ALTER TABLE public.user_activity ENABLE ROW LEVEL SECURITY';
EXCEPTION WHEN others THEN
  -- ignore
END $$;

-- Create INSERT policy (idempotent)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'user_activity' AND policyname = 'Users can insert their own activity'
  ) THEN
    CREATE POLICY "Users can insert their own activity"
    ON public.user_activity
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;
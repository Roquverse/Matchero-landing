-- Migration script for request_demos table
-- Run this in your Supabase SQL Editor to create the table structure

-- Create the request_demos table
CREATE TABLE IF NOT EXISTS public.request_demos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    
    -- Contact Information
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone_number TEXT,
    company_name TEXT,
    
    -- Additional Information
    country TEXT,
    organisation_size TEXT,
    hear_about TEXT,
    questions TEXT,
    
    -- Status tracking
    email_sent BOOLEAN DEFAULT false,
    email_sent_at TIMESTAMP WITH TIME ZONE,
    email_error TEXT,
    
    -- Optional: Link to auth user if they sign up later
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Create unique constraint on email (optional - remove if you want to allow multiple requests)
-- DO $$
-- BEGIN
--   IF NOT EXISTS (
--     SELECT 1 FROM pg_constraint 
--     WHERE conname = 'request_demos_email_key'
--   ) THEN
--     ALTER TABLE public.request_demos 
--     ADD CONSTRAINT request_demos_email_key UNIQUE (email);
--   END IF;
-- END $$;

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_request_demos_email ON public.request_demos(email);
CREATE INDEX IF NOT EXISTS idx_request_demos_user_id ON public.request_demos(user_id);
CREATE INDEX IF NOT EXISTS idx_request_demos_created_at ON public.request_demos(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_request_demos_email_sent ON public.request_demos(email_sent);

-- Enable Row Level Security (RLS)
ALTER TABLE public.request_demos ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow public insert for demo requests" ON public.request_demos;
DROP POLICY IF EXISTS "Users can view their own demo requests" ON public.request_demos;
DROP POLICY IF EXISTS "Service role can manage demo requests" ON public.request_demos;

-- Create policy to allow anyone to insert (for public demo requests)
CREATE POLICY "Allow public insert for demo requests"
  ON public.request_demos
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow users to read their own data (if linked to auth user)
CREATE POLICY "Users can view their own demo requests"
  ON public.request_demos
  FOR SELECT
  USING (auth.uid() = user_id OR auth.uid() IS NULL);

-- Create policy to allow service role to update (for email sending status)
-- Note: This requires service role key, typically used in server-side functions
CREATE POLICY "Service role can manage demo requests"
  ON public.request_demos
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Create a function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_request_demos_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS trigger_update_request_demos_updated_at ON public.request_demos;
CREATE TRIGGER trigger_update_request_demos_updated_at
    BEFORE UPDATE ON public.request_demos
    FOR EACH ROW
    EXECUTE FUNCTION update_request_demos_updated_at();


-- Migration script for beta_signups table
-- Run this in your Supabase SQL Editor to ensure the table structure is correct

-- First, check if the table exists, if not create it
CREATE TABLE IF NOT EXISTS beta_signups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  company_name TEXT,
  email TEXT NOT NULL,
  phone_number TEXT,
  country TEXT NOT NULL,
  organisation_size TEXT NOT NULL,
  hear_about TEXT,
  questions TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add user_id column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'beta_signups' 
    AND column_name = 'user_id'
  ) THEN
    ALTER TABLE beta_signups 
    ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;
  END IF;
END $$;

-- Create unique constraint on email if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'beta_signups_email_key'
  ) THEN
    ALTER TABLE beta_signups 
    ADD CONSTRAINT beta_signups_email_key UNIQUE (email);
  END IF;
END $$;

-- Create index on user_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_beta_signups_user_id ON beta_signups(user_id);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_beta_signups_email ON beta_signups(email);

-- Enable Row Level Security (RLS) if needed
ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Users can view their own signup data" ON beta_signups;
DROP POLICY IF EXISTS "Allow insert for signups" ON beta_signups;
DROP POLICY IF EXISTS "Allow update for signups" ON beta_signups;

-- Create policy to allow users to read their own data
CREATE POLICY "Users can view their own signup data"
  ON beta_signups
  FOR SELECT
  USING (auth.uid() = user_id);

-- Create policy to allow service role to insert/update
-- Note: This allows the anon key to insert (for signups)
CREATE POLICY "Allow insert for signups"
  ON beta_signups
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow service role to update
CREATE POLICY "Allow update for signups"
  ON beta_signups
  FOR UPDATE
  USING (true)
  WITH CHECK (true);


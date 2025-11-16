-- Database Trigger to automatically send email when new demo request is created
-- This trigger calls the Supabase Edge Function 'send-demo-email'
-- Run this AFTER deploying the Edge Function

-- First, ensure the http extension is enabled (required for webhooks/HTTP requests)
CREATE EXTENSION IF NOT EXISTS http;

-- Create a function to call the Edge Function
CREATE OR REPLACE FUNCTION trigger_send_demo_email()
RETURNS TRIGGER AS $$
DECLARE
  supabase_url TEXT;
  anon_key TEXT;
  function_url TEXT;
  payload JSONB;
BEGIN
  -- Get Supabase project URL and anon key from environment or configuration
  -- These should be set as Supabase project settings or use pg_settings
  -- For production, use your actual Supabase project URL
  supabase_url := current_setting('app.settings.supabase_url', true);
  anon_key := current_setting('app.settings.anon_key', true);
  
  -- If not set, you may need to hardcode or use a different method
  -- Alternative: Use Supabase's built-in webhook system
  
  -- Construct the Edge Function URL
  function_url := supabase_url || '/functions/v1/send-demo-email';
  
  -- Build the payload
  payload := jsonb_build_object(
    'record', jsonb_build_object(
      'id', NEW.id,
      'first_name', NEW.first_name,
      'last_name', NEW.last_name,
      'email', NEW.email,
      'phone_number', NEW.phone_number,
      'company_name', NEW.company_name,
      'country', NEW.country,
      'organisation_size', NEW.organisation_size,
      'hear_about', NEW.hear_about,
      'questions', NEW.questions
    )
  );
  
  -- Call the Edge Function asynchronously using pg_net or similar
  -- Note: This approach requires pg_net extension or similar
  -- For Supabase, it's better to use Database Webhooks instead
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Alternative approach: Use Supabase Database Webhooks
-- This is the recommended approach for Supabase projects
-- 
-- Instead of a database trigger, set up a Database Webhook in Supabase Dashboard:
-- 
-- 1. Go to Database → Webhooks
-- 2. Create a new webhook:
--    - Name: send-demo-email
--    - Table: request_demos
--    - Events: Insert
--    - HTTP Request:
--      - URL: https://[your-project-ref].supabase.co/functions/v1/send-demo-email
--      - HTTP Method: POST
--      - HTTP Headers:
--        - Authorization: Bearer [your-anon-key]
--        - Content-Type: application/json
--      - HTTP Body (raw JSON):
--        {
--          "record": {
--            "id": "{{record.id}}",
--            "first_name": "{{record.first_name}}",
--            "last_name": "{{record.last_name}}",
--            "email": "{{record.email}}",
--            "phone_number": "{{record.phone_number}}",
--            "company_name": "{{record.company_name}}",
--            "country": "{{record.country}}",
--            "organisation_size": "{{record.organisation_size}}",
--            "hear_about": "{{record.hear_about}}",
--            "questions": "{{record.questions}}"
--          }
--        }

-- If you want to use a database trigger instead (requires pg_net extension):
-- Create trigger (only if pg_net is available)
-- DROP TRIGGER IF EXISTS trigger_send_demo_email ON request_demos;
-- CREATE TRIGGER trigger_send_demo_email
--   AFTER INSERT ON request_demos
--   FOR EACH ROW
--   WHEN (NEW.email_sent = false)
--   EXECUTE FUNCTION trigger_send_demo_email();

-- RECOMMENDED: Use Supabase Database Webhooks instead of triggers
-- See instructions in comments above for setting up via Dashboard


# Supabase Edge Function Setup Guide

This guide explains how to set up the automatic email sending using Supabase Edge Functions and Database Webhooks.

## Overview

When a user submits the request demo form:
1. Data is saved to `request_demos` table
2. Database webhook triggers automatically
3. Edge Function is called with the new record data
4. Email is sent via Resend API
5. Database is updated with email status

## Prerequisites

1. **Supabase CLI** installed: [Install Guide](https://supabase.com/docs/guides/cli)
2. **Resend API Key** from [Resend Dashboard](https://resend.com/api-keys)
3. **Verified domain** in Resend for sending emails

## Step-by-Step Setup

### 1. Deploy the Edge Function

```bash
# Login to Supabase CLI
supabase login

# Link to your project
supabase link --project-ref your-project-ref

# Deploy the function
supabase functions deploy send-demo-email
```

### 2. Set Function Secrets

Set environment variables in Supabase dashboard or via CLI:

**Via Dashboard:**
1. Go to **Project Settings** → **Edge Functions** → **send-demo-email**
2. Add secrets:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `SITE_URL`
   - `SUPABASE_URL` (automatically available, but can be explicit)
   - `SUPABASE_SERVICE_ROLE_KEY` (automatically available)

**Via CLI:**
```bash
supabase secrets set RESEND_API_KEY=re_xxxxxxxxxxxxx
supabase secrets set RESEND_FROM_EMAIL=noreply@yourdomain.com
supabase secrets set SITE_URL=https://yourdomain.com
```

### 3. Set Up Database Webhook

#### Option A: Via Supabase Dashboard (Recommended)

1. Go to **Database** → **Webhooks**
2. Click **Create a new webhook**
3. Configure:
   - **Name**: `send-demo-email`
   - **Table**: `request_demos`
   - **Events**: Select `Insert`
   - **HTTP Request**:
     - **URL**: `https://[your-project-ref].supabase.co/functions/v1/send-demo-email`
     - **HTTP Method**: `POST`
     - **HTTP Headers**:
       ```
       Authorization: Bearer [your-anon-key]
       Content-Type: application/json
       ```
     - **HTTP Body** (raw JSON):
       ```json
       {
         "record": {
           "id": "{{record.id}}",
           "first_name": "{{record.first_name}}",
           "last_name": "{{record.last_name}}",
           "email": "{{record.email}}",
           "phone_number": "{{record.phone_number}}",
           "company_name": "{{record.company_name}}",
           "country": "{{record.country}}",
           "organisation_size": "{{record.organisation_size}}",
           "hear_about": "{{record.hear_about}}",
           "questions": "{{record.questions}}"
         }
       }
       ```
4. Click **Save**

#### Option B: Via SQL (Alternative)

See `request-demo-trigger.sql` for SQL-based approach (requires pg_net extension).

### 4. Test the Setup

1. Submit the request demo form on your site
2. Check Supabase logs:
   ```bash
   supabase functions logs send-demo-email
   ```
3. Verify email was sent:
   - Check recipient's inbox
   - Check Resend dashboard for delivery status
   - Query `request_demos` table:
     ```sql
     SELECT email_sent, email_sent_at, email_error 
     FROM request_demos 
     ORDER BY created_at DESC 
     LIMIT 1;
     ```

## Function Details

### Location
- `supabase/functions/send-demo-email/index.ts`

### What It Does
1. Receives new record data from webhook
2. Validates the data
3. Sends email via Resend API
4. Updates database with email status:
   - Success: Sets `email_sent = true` and `email_sent_at = timestamp`
   - Error: Sets `email_error = error_message`

### Error Handling
- If email fails to send, the error is logged in `email_error` field
- The form submission still succeeds (non-blocking)
- Errors are visible in Supabase function logs

## Monitoring

### View Function Logs

**Via Dashboard:**
- **Edge Functions** → **send-demo-email** → **Logs**

**Via CLI:**
```bash
supabase functions logs send-demo-email --follow
```

### Monitor Email Status

Query database for email status:
```sql
-- Check recent submissions
SELECT 
  email,
  email_sent,
  email_sent_at,
  email_error,
  created_at
FROM request_demos
ORDER BY created_at DESC
LIMIT 10;

-- Check failed emails
SELECT 
  email,
  email_error,
  created_at
FROM request_demos
WHERE email_error IS NOT NULL
ORDER BY created_at DESC;
```

## Troubleshooting

### Email Not Sending

1. **Check Function Logs**
   ```bash
   supabase functions logs send-demo-email
   ```

2. **Verify Secrets Are Set**
   ```bash
   supabase secrets list
   ```

3. **Test Function Manually**
   ```bash
   curl -X POST https://[project-ref].supabase.co/functions/v1/send-demo-email \
     -H "Authorization: Bearer [anon-key]" \
     -H "Content-Type: application/json" \
     -d '{
       "record": {
         "id": "test-id",
         "first_name": "Test",
         "last_name": "User",
         "email": "test@example.com"
       }
     }'
   ```

4. **Check Resend API Key**
   - Verify key is valid in Resend dashboard
   - Check key permissions include "Sending access"

5. **Check Webhook Configuration**
   - Verify webhook is enabled in Supabase dashboard
   - Check webhook URL is correct
   - Verify Authorization header has correct anon key

### Database Not Updating

1. Check `email_error` field in database for error messages
2. Verify service role key has permission to update `request_demos` table
3. Check RLS policies allow updates

## Security Notes

- ✅ API keys stored securely as Supabase secrets
- ✅ Service role key only used server-side
- ✅ Function validates all inputs
- ✅ Email sending is non-blocking (form submission succeeds even if email fails)

## Production Checklist

- [ ] Edge Function deployed
- [ ] All secrets configured
- [ ] Database webhook set up and tested
- [ ] Email template tested
- [ ] Error handling verified
- [ ] Logging monitored
- [ ] Resend domain verified
- [ ] Rate limits considered (Resend has daily limits)


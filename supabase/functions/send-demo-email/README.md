# Send Demo Email Edge Function

This Supabase Edge Function automatically sends confirmation emails via Resend when a new record is inserted into the `request_demos` table.

## Setup

### 1. Deploy the Function

```bash
# Make sure you have Supabase CLI installed
supabase functions deploy send-demo-email
```

### 2. Set Environment Variables

In your Supabase dashboard:
1. Go to **Project Settings** → **Edge Functions**
2. Add the following secrets:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@yourdomain.com
SITE_URL=https://yourdomain.com
SUPABASE_URL=your-project-url
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 3. Set Up Database Trigger

Run the SQL in `request-demo-trigger.sql` to create the database trigger that automatically calls this function when a new record is inserted.

## How It Works

1. User submits form → Data inserted into `request_demos` table
2. Database trigger fires → Calls this Edge Function
3. Function sends email → Via Resend API
4. Database updated → `email_sent`, `email_sent_at`, or `email_error` fields updated

## Testing

Test locally:
```bash
supabase functions serve send-demo-email --env-file .env.local
```

Test with a sample payload:
```bash
curl -X POST http://localhost:54321/functions/v1/send-demo-email \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "record": {
      "id": "test-id",
      "first_name": "John",
      "last_name": "Doe",
      "email": "john@example.com"
    }
  }'
```

## Monitoring

Check function logs in Supabase dashboard:
- **Edge Functions** → **send-demo-email** → **Logs**

Or via CLI:
```bash
supabase functions logs send-demo-email
```


# Resend Email Setup Guide

This guide explains how to set up Resend for sending request demo confirmation emails.

## Prerequisites

1. **Resend Account**: Sign up at [resend.com](https://resend.com)
2. **Domain Verification**: Verify your sending domain in Resend dashboard
3. **API Key**: Generate an API key from Resend dashboard

## Environment Variables

Add the following environment variables to your `.env` file:

```env
# Resend Configuration
VITE_RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
VITE_RESEND_FROM_EMAIL=noreply@yourdomain.com
VITE_SITE_URL=https://yourdomain.com
```

### Getting Your Resend API Key

1. Log in to [Resend Dashboard](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Matchero Landing Pages")
4. Select permissions (at minimum: "Sending access")
5. Copy the API key and add it to your `.env` file

### Setting Up From Email

1. Go to [Resend Domains](https://resend.com/domains)
2. Add your domain (e.g., `yourdomain.com`)
3. Follow the DNS verification steps
4. Once verified, you can use emails like `noreply@yourdomain.com`

## Installation

The Resend service is already integrated. No additional npm packages are required as we're using the Resend REST API directly.

## How It Works

1. **User submits form** → Data is saved to `request_demos` table
2. **Email sent** → Resend API is called to send confirmation email
3. **Status updated** → Database is updated with email send status

## Email Template

The email template is defined in:
- `src/lib/resendService.ts` (inline template)
- `request-demo-confirmation-email.html` (full HTML template for reference)

## Security Considerations

### Option 1: Client-Side (Current Implementation)
- ✅ Simple setup
- ⚠️ API key exposed in frontend code
- ⚠️ Use restricted API key with minimal permissions
- ⚠️ Not recommended for production

### Option 2: Server-Side (Recommended for Production)
- ✅ API key stays secure on server
- ✅ Better error handling
- ✅ Can use full API key permissions

**To implement server-side:**

1. Create a Supabase Edge Function or API endpoint
2. Move Resend API call to server
3. Call the endpoint from frontend instead of direct API call

Example Edge Function structure:
```
supabase/functions/send-demo-email/index.ts
```

## Testing

1. Fill out the request demo form
2. Submit the form
3. Check your email inbox
4. Verify email was received
5. Check Supabase database:
   - `request_demos` table should have new record
   - `email_sent` should be `true`
   - `email_sent_at` should have timestamp

## Troubleshooting

### Email not sending

1. **Check API Key**: Verify `VITE_RESEND_API_KEY` is set correctly
2. **Check From Email**: Verify `VITE_RESEND_FROM_EMAIL` matches verified domain
3. **Check Console**: Look for errors in browser console
4. **Check Database**: Check `email_error` field in `request_demos` table
5. **Check Resend Dashboard**: View logs in Resend dashboard for delivery status

### Common Errors

- **"Invalid API key"**: Check that API key is correct and not expired
- **"Domain not verified"**: Verify your domain in Resend dashboard
- **"Rate limit exceeded"**: You've hit Resend's rate limit (check your plan)

## Database Schema

The email status is tracked in the `request_demos` table:

- `email_sent`: Boolean indicating if email was sent
- `email_sent_at`: Timestamp when email was sent
- `email_error`: Error message if email sending failed

## Monitoring

Monitor email delivery in:
1. **Resend Dashboard**: View all sent emails and delivery status
2. **Database**: Query `request_demos` table for email status
3. **Application Logs**: Check console for errors

## Production Checklist

- [ ] Domain verified in Resend
- [ ] API key configured in environment variables
- [ ] From email address configured
- [ ] Email template tested
- [ ] Database migration run
- [ ] Error handling tested
- [ ] Consider moving to server-side implementation


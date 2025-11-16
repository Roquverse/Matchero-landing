# Request Demo Form Data Schema

This document describes how request demo form data is stored in the `request_demos` table and how email confirmations are sent via Resend.

## Database Table: `request_demos`

All form data is stored in the `request_demos` table.

**Schema:**

```sql
CREATE TABLE request_demos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

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
```

## Data Flow

1. **User submits form** → Form data is collected
2. **Insert into request_demos** → Data stored in table
3. **Trigger Resend email** → Confirmation email sent via Resend API
4. **Update email status** → `email_sent` and `email_sent_at` updated
5. **Success** → User sees confirmation message

## Field Mappings

| Form Field                      | Database Column     | Required | Notes                               |
| ------------------------------- | ------------------- | -------- | ----------------------------------- |
| First Name                      | `first_name`        | Yes      |                                     |
| Last Name                       | `last_name`         | Yes      |                                     |
| Email                           | `email`             | Yes      | Used for sending confirmation email |
| Phone Number                    | `phone_number`      | No       |                                     |
| Company Name                    | `company_name`      | No       |                                     |
| Country                         | `country`           | No       |                                     |
| Organisation Size               | `organisation_size` | No       |                                     |
| How did you hear about Matchero | `hear_about`        | No       |                                     |
| Questions                       | `questions`         | No       |                                     |

## Email Status Tracking

- `email_sent`: Boolean flag indicating if confirmation email was sent
- `email_sent_at`: Timestamp when email was successfully sent
- `email_error`: Error message if email sending failed (for debugging)

## Resend Integration

The confirmation email is sent using Resend API. The email template is located at:

- `request-demo-confirmation-email.html`

### Resend Configuration

1. **API Key**: Store in environment variable `VITE_RESEND_API_KEY` (for client-side) or use server-side function
2. **From Email**: Configure in Resend dashboard (e.g., `noreply@matchero.com`)
3. **Email Template**: Uses the HTML template with variables:
   - `{{ .SiteURL }}` - Your site URL
   - User's name and email from form data

### Email Sending Options

**Option 1: Client-side (Not Recommended for Production)**

- Send directly from frontend using Resend API
- Requires exposing API key (use restricted key)

**Option 2: Server-side (Recommended)**

- Create Supabase Edge Function or API endpoint
- Send email from server using Resend API
- More secure, can use full API key

**Option 3: Database Trigger (Recommended for Supabase)**

- Use Supabase Edge Function triggered by database insert
- Automatically sends email when new record is created
- Most secure and reliable

## Access Patterns

**Query all demo requests:**

```typescript
const { data, error } = await supabase
  .from("request_demos")
  .select("*")
  .order("created_at", { ascending: false });
```

**Query by email:**

```typescript
const { data, error } = await supabase
  .from("request_demos")
  .select("*")
  .eq("email", email)
  .order("created_at", { ascending: false });
```

**Query unsent emails:**

```typescript
const { data, error } = await supabase
  .from("request_demos")
  .select("*")
  .eq("email_sent", false)
  .is("email_error", null);
```

## Notes

- Email is NOT unique by default (allows multiple requests from same email)
- If you want unique emails, uncomment the unique constraint in migration
- The `user_id` field can be populated later if the user creates an account
- RLS policies allow public inserts but restrict reads to own data or service role

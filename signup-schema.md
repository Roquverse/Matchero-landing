# Signup Form Data Schema

This document describes how signup form data is stored in both Supabase Auth and the `beta_signups` table.

## Data Storage Locations

### 1. Supabase Auth User Metadata (`user.user_metadata`)

All form data is stored in the user's metadata when creating the auth user. This data is accessible via `user.user_metadata` after authentication.

**Schema:**
```typescript
{
  first_name: string;
  last_name: string;
  full_name: string; // `${first_name} ${last_name}`
  company_name: string | null;
  phone_number: string | null;
  country: string;
  organisation_size: string;
  hear_about: string | null;
  questions: string | null;
}
```

**Access:**
```typescript
const { data: { user } } = await supabase.auth.getUser();
const firstName = user?.user_metadata?.first_name;
const companyName = user?.user_metadata?.company_name;
```

### 2. Database Table: `beta_signups`

All form data is also stored in the `beta_signups` table with a reference to the auth user via `user_id`.

**Schema:**
```sql
CREATE TABLE beta_signups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  company_name TEXT,
  email TEXT NOT NULL UNIQUE,
  phone_number TEXT,
  country TEXT NOT NULL,
  organisation_size TEXT NOT NULL,
  hear_about TEXT,
  questions TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**Access:**
```typescript
const { data, error } = await supabase
  .from('beta_signups')
  .select('*')
  .eq('user_id', userId)
  .single();
```

## Data Flow

1. **User submits form** → Form data is collected
2. **Create Auth User** → Data stored in `user_metadata` + confirmation email sent
3. **Insert into beta_signups** → Data stored in table with `user_id` reference
4. **Success** → User receives confirmation email

## Benefits of Dual Storage

- **Auth Metadata**: Quick access to user info during authentication
- **Database Table**: Queryable, searchable, and can be used for analytics
- **Redundancy**: Data available even if one system has issues
- **Flexibility**: Can query all signups without needing auth context

## Field Mappings

| Form Field | Auth Metadata Key | Database Column |
|------------|-------------------|-----------------|
| First Name | `first_name` | `first_name` |
| Last Name | `last_name` | `last_name` |
| Full Name | `full_name` | (computed) |
| Company Name | `company_name` | `company_name` |
| Email | (stored in auth.email) | `email` |
| Phone | `phone_number` | `phone_number` |
| Country | `country` | `country` |
| Organisation Size | `organisation_size` | `organisation_size` |
| Hear About | `hear_about` | `hear_about` |
| Questions | `questions` | `questions` |

## Notes

- The `user_id` in `beta_signups` links to `auth.users(id)`
- Email is unique in both systems
- All nullable fields can be `null` if not provided
- The confirmation email is automatically sent when the auth user is created


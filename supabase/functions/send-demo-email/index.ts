// Supabase Edge Function: Send Demo Confirmation Email
// This function is triggered when a new record is inserted into request_demos table
// Note: This code runs in Deno runtime. URL-based imports are valid in Deno.

/// <reference types="./deno.d.ts" />

// @ts-ignore - Deno runtime supports URL imports
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
// @ts-ignore - Deno runtime supports URL imports
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") || "";
const RESEND_FROM_EMAIL =
  Deno.env.get("RESEND_FROM_EMAIL") || "team@matchero.com";
const SITE_URL = Deno.env.get("SITE_URL") || "https://matchero.com";

interface RequestDemoRecord {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string;
  company_name?: string;
  country?: string;
  organisation_size?: string;
  hear_about?: string;
  questions?: string;
}

serve(async (req) => {
  try {
    // Verify Resend API key is configured
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Parse the request body
    const payload = await req.json();
    const record: RequestDemoRecord = payload.record;

    if (!record || !record.email) {
      return new Response(JSON.stringify({ error: "Invalid record data" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Prepare email content
    const firstName = record.first_name || "there";
    const lastName = record.last_name || "";
    const fullName = `${firstName} ${lastName}`.trim() || firstName;

    const emailHtml = getEmailTemplate(firstName, lastName, SITE_URL);

    // Send email via Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [record.email],
        subject: "You're on the list - Matchero demo coming soon",
        html: emailHtml,
      }),
    });

    const emailData = await resendResponse.json();

    if (!resendResponse.ok) {
      const errorMessage = emailData.error?.message || "Failed to send email";
      console.error("Resend API error:", errorMessage);

      // Update database with error
      const supabaseClient = createClient(
        Deno.env.get("SUPABASE_URL") ?? "",
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
      );

      await supabaseClient
        .from("request_demos")
        .update({
          email_error: errorMessage,
        })
        .eq("id", record.id);

      return new Response(
        JSON.stringify({ error: errorMessage, sent: false }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Update database with success status
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    await supabaseClient
      .from("request_demos")
      .update({
        email_sent: true,
        email_sent_at: new Date().toISOString(),
      })
      .eq("id", record.id);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
        emailId: emailData.id,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in send-demo-email function:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
});

/**
 * Generate email HTML template
 */
function getEmailTemplate(
  firstName: string,
  lastName: string,
  siteUrl: string
): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matchero Demo Coming Soon</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                    <tr>
                        <td style="padding: 40px 40px 20px 40px; background-color: #ffffff;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td>
                                        <img src="${siteUrl}/logo.svg" alt="Matchero Logo" width="150" height="auto" style="display: block; max-width: 150px; height: auto;" />
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-top: 8px;">
                                        <p style="margin: 0; font-size: 14px; color: #475569; font-weight: 400;">From match to momentum</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 40px 24px 40px; background-color: #ffffff;">
                            <h1 style="margin: 0; font-size: 32px; font-weight: 700; line-height: 1.2; color: #020617; text-align: center; font-family: 'Source Serif 4', Georgia, serif;">
                                You're on the list - Matchero demo coming soon
                            </h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 40px 40px 40px; background-color: #ffffff;">
                            <p style="margin: 0 0 16px 0; font-size: 16px; line-height: 1.6; color: #020617;">
                                Hi ${firstName} 👋,
                            </p>
                            <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.6; color: #020617;">
                                Thanks for requesting a demo of Matchero. 🙌
                            </p>
                            <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 1.6; color: #020617;">
                                We're putting the finishing touches on something we can't wait to show you - a simpler, smarter and more human way to hire.
                            </p>
                            <p style="margin: 0 0 16px 0; font-size: 18px; font-weight: 700; line-height: 1.5; color: #020617;">
                                You're now on the early-access list, which means:
                            </p>
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 32px;">
                                <tr>
                                    <td style="padding: 8px 0;">
                                        <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #020617;">
                                            • You'll be one of the first to see the product in action
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0;">
                                        <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #020617;">
                                            • You'll get updates before the public launch
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0;">
                                        <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #020617;">
                                            • You may be invited to a private beta session depending on availability
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            <p style="margin: 0 0 16px 0; font-size: 16px; line-height: 1.6; color: #020617;">
                                We'll reach out as soon as your demo slot becomes available.
                            </p>
                            <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 1.6; color: #020617;">
                                In the meantime, if you have specific hiring challenges you'd like to focus on, just hit reply.
                            </p>
                            <p style="margin: 0 0 8px 0; font-size: 16px; line-height: 1.6; color: #020617;">
                                Thanks again,
                            </p>
                            <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #020617; font-weight: 600;">
                                The Matchero Team
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="padding-bottom: 16px;">
                                        <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #6b7280; text-align: center;">
                                            If you did not sign up for this account you can ignore this email and the account will be deleted.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-bottom: 16px;">
                                        <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #6b7280; text-align: center;">
                                            © 2025 Matchero. All rights reserved. You received this email because you signed up for a Matchero product demo.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <a href="${siteUrl}/request-demo-confirmation" style="color: #22c55e; text-decoration: underline; font-size: 12px; line-height: 1.5;">
                                            View this email in the browser
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
  `.trim();
}

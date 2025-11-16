/**
 * Resend Email Service
 * 
 * This service handles sending confirmation emails via Resend API.
 * 
 * For production, consider using a Supabase Edge Function instead
 * to keep API keys secure on the server side.
 */

interface SendDemoConfirmationEmailParams {
  to: string;
  firstName: string;
  lastName: string;
  siteUrl?: string;
}

interface ResendResponse {
  id?: string;
  error?: {
    message: string;
    statusCode?: number;
  };
}

/**
 * Sends a demo confirmation email via Resend API
 * 
 * @param params - Email parameters
 * @returns Promise with success status and message/error
 */
export async function sendDemoConfirmationEmail(
  params: SendDemoConfirmationEmailParams
): Promise<{ success: boolean; message?: string; error?: string }> {
  const apiKey = import.meta.env.VITE_RESEND_API_KEY;
  const fromEmail = import.meta.env.VITE_RESEND_FROM_EMAIL || "noreply@matchero.com";
  const siteUrl = params.siteUrl || import.meta.env.VITE_SITE_URL || window.location.origin;

  if (!apiKey) {
    console.error("Resend API key not configured");
    return {
      success: false,
      error: "Email service not configured. Please contact support.",
    };
  }

  try {
    // Load the email template
    // In production, you might want to fetch this from a CDN or embed it
    const emailHtml = await getEmailTemplate(params.firstName, params.lastName, siteUrl);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [params.to],
        subject: "You're on the list - Matchero demo coming soon",
        html: emailHtml,
      }),
    });

    const data: ResendResponse = await response.json();

    if (!response.ok) {
      const errorMessage = data.error?.message || "Failed to send email";
      console.error("Resend API error:", errorMessage);
      return {
        success: false,
        error: errorMessage,
      };
    }

    return {
      success: true,
      message: "Confirmation email sent successfully",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

/**
 * Gets the email template HTML
 * In production, consider fetching from a CDN or using a template engine
 */
async function getEmailTemplate(
  firstName: string,
  _lastName: string, // Unused but kept for API consistency
  siteUrl: string
): Promise<string> {
  // For now, we'll use a simplified inline template
  // In production, you might want to fetch the full HTML template
  // or use a template engine to inject variables
  // Note: This service is kept for reference but emails are now sent via Supabase Edge Function
  
  // This is a simplified version - you can load the full HTML from request-demo-confirmation-email.html
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


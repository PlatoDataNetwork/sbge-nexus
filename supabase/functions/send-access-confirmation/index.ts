import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AccessConfirmationRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: AccessConfirmationRequest = await req.json();

    console.log("Sending access confirmation email to:", email);

    const baseUrl = Deno.env.get("VITE_SUPABASE_URL")?.split('//')[1]?.split('/')[0] || '';
    const contactUrl = `https://${baseUrl}/contact`;

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank you for your interest in StorageBlue</h1>
          </div>
          <div style="background: #f9fafb; padding: 40px 20px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; margin-bottom: 20px;">We have received your access request and our team will review it shortly.</p>
            <p style="font-size: 16px; margin-bottom: 20px;">You will be notified via email once your account has been approved.</p>
            <div style="background-color: #e5e7eb; padding: 20px; border-radius: 8px; margin: 30px 0;">
              <p style="font-size: 16px; margin: 0;">
                If you need immediate assistance, please <a href="${contactUrl}" style="color: #1e40af; text-decoration: none; font-weight: bold;">send us a message</a>.
              </p>
            </div>
            <p style="font-size: 14px; color: #666; margin-top: 30px;">
              Best regards,<br>
              <strong>The StorageBlue Capital Management Team</strong>
            </p>
          </div>
          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p>© 2025 StorageBlue Capital Management LLC. All rights reserved.</p>
          </div>
        </body>
      </html>
    `;

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "StorageBlue <onboarding@resend.dev>",
        to: [email],
        subject: "Access Request Received - StorageBlue Capital Management",
        html,
      }),
    });

    const emailData = await emailResponse.json();

    console.log("Access confirmation email sent successfully:", emailData);

    return new Response(JSON.stringify(emailData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-access-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

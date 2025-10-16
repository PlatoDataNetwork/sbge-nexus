import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WelcomeEmailRequest {
  fullName: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, email }: WelcomeEmailRequest = await req.json();

    console.log("Sending welcome email to:", email);

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to StorageBlue Growth Fund</h1>
          </div>
          <div style="background: #f9fafb; padding: 40px 20px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 18px; margin-bottom: 20px;">Dear ${fullName},</p>
            <p style="margin-bottom: 20px;">Thank you for your interest in the StorageBlue Growth Fund. We're excited to have you join our investor community.</p>
            <p style="margin-bottom: 20px;">Your investor portal account has been created successfully. You can now access exclusive information about our portfolio, performance metrics, and investment opportunities.</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${Deno.env.get("VITE_SUPABASE_URL")}" style="background: #1e40af; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">Access Investor Portal</a>
            </div>
            <p style="margin-bottom: 20px;">If you have any questions or need assistance, please don't hesitate to reach out to our team.</p>
            <p style="margin-bottom: 20px;">Best regards,<br><strong>StorageBlue Growth Fund Team</strong></p>
          </div>
          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p>© 2025 StorageBlue Growth Fund. All rights reserved.</p>
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
        from: "StorageBlue Growth Fund <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to StorageBlue Growth Fund Investor Portal",
        html,
      }),
    });

    const emailData = await emailResponse.json();

    console.log("Welcome email sent successfully:", emailData);

    return new Response(JSON.stringify(emailData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-welcome-email function:", error);
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

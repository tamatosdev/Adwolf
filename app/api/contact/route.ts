import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const toEmail = process.env.CONTACT_EMAIL;

async function getResend(): Promise<Resend> {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY || !toEmail) {
    console.error("RESEND_API_KEY or CONTACT_EMAIL is not set");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  try {
    const resend = await getResend();
    const body = await req.json();
    const { name, email, company, services, budget, timeline, brief, source, formName } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const serviceList = Array.isArray(services) && services.length > 0
      ? services.join(", ")
      : "Not specified";

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="margin-bottom: 4px;">New brief from ${name}</h2>
        <p style="color: #666; margin-top: 0;">Source: ${source || "Website"} | Form: ${formName || "Unknown"}</p>

        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; color: #666; width: 120px; vertical-align: top;">Name</td>
            <td style="padding: 8px 0;"><strong>${name}</strong></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; vertical-align: top;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 8px 0; color: #666; vertical-align: top;">Company</td>
            <td style="padding: 8px 0;">${company}</td>
          </tr>` : ""}
          ${budget ? `
          <tr>
            <td style="padding: 8px 0; color: #666; vertical-align: top;">Budget</td>
            <td style="padding: 8px 0;">${budget}</td>
          </tr>` : ""}
          ${timeline ? `
          <tr>
            <td style="padding: 8px 0; color: #666; vertical-align: top;">Timeline</td>
            <td style="padding: 8px 0;">${timeline}</td>
          </tr>` : ""}
          ${serviceList !== "Not specified" ? `
          <tr>
            <td style="padding: 8px 0; color: #666; vertical-align: top;">Services</td>
            <td style="padding: 8px 0;">${serviceList}</td>
          </tr>` : ""}
        </table>

        ${brief ? `
        <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
          <strong style="color: #666; display: block; margin-bottom: 4px;">The brief</strong>
          <p style="margin: 0; white-space: pre-wrap;">${brief}</p>
        </div>` : ""}
      </div>
    `;

    await resend.emails.send({
      from: "Adwolf Website <onboarding@resend.dev>",
      to: toEmail,
      subject: `New brief from ${name} (${source || "Website"})`,
      replyTo: email,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

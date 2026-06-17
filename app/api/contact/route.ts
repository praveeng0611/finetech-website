import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { name, company, email, phone, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Finetech Enterprises <noreply@gnosisolabs.com>',
      to: ['info@finetech.gnosisolabs.com', 'praveen.goswami81@gmail.com'],
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f6f8fa; padding: 32px; border-radius: 12px;">
          <h2 style="color: #163358; margin-bottom: 24px;">New Contact — Finetech Enterprises</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 12px; background: #eef2f7; font-weight: 600; color: #374151; width: 140px; border-radius: 4px 0 0 4px;">Name</td>
              <td style="padding: 10px 12px; background: #fff; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; background: #eef2f7; font-weight: 600; color: #374151;">Email</td>
              <td style="padding: 10px 12px; background: #fff; color: #111827;"><a href="mailto:${email}" style="color: #163358;">${email}</a></td>
            </tr>
            ${company ? `<tr>
              <td style="padding: 10px 12px; background: #eef2f7; font-weight: 600; color: #374151;">Company</td>
              <td style="padding: 10px 12px; background: #fff; color: #111827;">${company}</td>
            </tr>` : ''}
            ${phone ? `<tr>
              <td style="padding: 10px 12px; background: #eef2f7; font-weight: 600; color: #374151;">Phone</td>
              <td style="padding: 10px 12px; background: #fff; color: #111827;">${phone}</td>
            </tr>` : ''}
          </table>
          <div style="margin-top: 20px; background: #fff; padding: 16px; border-radius: 8px; border-left: 4px solid #163358;">
            <p style="font-weight: 600; color: #374151; margin-bottom: 8px;">Message</p>
            <p style="color: #4b5563; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 24px; text-align: center;">
            Sent via finetech.gnosisolabs.com
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}

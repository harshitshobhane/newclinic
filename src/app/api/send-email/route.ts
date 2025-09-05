import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message, service } = await request.json();

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Create transporter with your email configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `New Waitlist Signup - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #10B981, #059669); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0; text-align: center;">New Waitlist Signup</h2>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <h3 style="color: #10B981; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${service ? `<p><strong>Interested Service:</strong> ${service}</p>` : ''}
            
            ${message ? `
              <h3 style="color: #10B981; margin-top: 30px;">Message</h3>
              <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #10B981;">
                ${message}
              </p>
            ` : ''}
            
            <div style="margin-top: 30px; padding: 20px; background: #e6f7f0; border-radius: 5px; border-left: 4px solid #10B981;">
              <p style="margin: 0; color: #047857; font-weight: bold;">
                🎉 This person is interested in joining the OurTopClinic Founding Patient Program!
              </p>
            </div>
            
            <div style="margin-top: 20px; text-align: center; color: #666; font-size: 14px;">
              <p>Received on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

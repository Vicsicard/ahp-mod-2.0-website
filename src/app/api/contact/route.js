import { NextResponse } from 'next/server';
import { sendEmail, generateContactEmailHTML } from '@/utils/email';

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate required fields
    const { name, email, subject, message } = body;
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Generate email HTML content
    const htmlContent = generateContactEmailHTML({
      name,
      email,
      subject,
      message
    });
    
    // Plain text version
    const textContent = `
      Contact Form Submission
      
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      
      Message:
      ${message}
    `;
    
    // Send email to site admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'info@ahpmodule.com',
      subject: `Contact Form: ${subject}`,
      html: htmlContent,
      text: textContent,
    });
    
    // Send confirmation email to user
    await sendEmail({
      to: email,
      subject: 'Thank you for contacting AHP Module 2.0',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank you for your message</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #1E2235;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 5px 5px 0 0;
            }
            .content {
              background-color: #F5F6FA;
              padding: 20px;
              border-radius: 0 0 5px 5px;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 12px;
              color: #666;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>AHP Module 2.0</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
            <p>Here's a copy of your message:</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} AHP Module 2.0. All rights reserved.</p>
          </div>
        </body>
        </html>
      `,
      text: `
        Dear ${name},
        
        Thank you for contacting us. We have received your message and will get back to you as soon as possible.
        
        Here's a copy of your message:
        
        Subject: ${subject}
        
        Message:
        ${message}
        
        Best regards,
        AHP Module 2.0 Team
      `,
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

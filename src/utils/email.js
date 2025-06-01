/**
 * Email Utility for AHP Module 2.0 Website
 * Handles email sending with Nodemailer using Bluehost SMTP
 */

const nodemailer = require('nodemailer');

// Create reusable transporter object using Bluehost SMTP
async function createTransporter() {
  // Use production email settings
  const host = process.env.SMTP_HOST || 'smtp.oxcs.bluehost.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure = process.env.SMTP_SECURE === 'true';
  
  // Create email configuration for Bluehost cPanel Email with proper authentication
  const config = {
    host: host,
    port: port,
    secure: secure, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || 'info@ahpmodule.com',
      pass: process.env.SMTP_PASS
    },
    authMethod: process.env.SMTP_AUTH_METHOD || 'LOGIN', // Use LOGIN authentication method
    tls: {
      // Do not fail on invalid certs
      rejectUnauthorized: false
    }
  };
  
  return nodemailer.createTransport(config);
}

/**
 * Send an email
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject
 * @param {string} options.html - Email HTML content
 * @param {string} [options.from] - Sender email address
 * @param {string} [options.text] - Plain text version of the email
 * @returns {Promise<Object>} - Email info object
 */
async function sendEmail(options) {
  try {
    // Validate required fields
    if (!options.to || !options.subject || !options.html) {
      throw new Error('Missing required email fields: to, subject, or html');
    }

    // Set default from address if not provided
    const from = options.from || `"AHP Module 2.0" <${process.env.SMTP_USER || 'info@ahpmodule.com'}>`;
    
    // Create transporter
    const transporter = await createTransporter();

    // Send email
    const info = await transporter.sendMail({
      from,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    });

    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

/**
 * Generate HTML email template for contact form submissions
 * @param {Object} data - Contact form data
 * @param {string} data.name - Sender's name
 * @param {string} data.email - Sender's email
 * @param {string} data.subject - Email subject
 * @param {string} data.message - Email message
 * @returns {string} - HTML email content
 */
function generateContactEmailHTML(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
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
        .field {
          margin-bottom: 15px;
        }
        .field-label {
          font-weight: bold;
          margin-bottom: 5px;
        }
        .field-value {
          background-color: white;
          padding: 10px;
          border-radius: 3px;
          border: 1px solid #ddd;
        }
        .button {
          display: inline-block;
          background-color: #3578E5;
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>AHP Module 2.0 Contact Form</h1>
      </div>
      <div class="content">
        <p>You have received a new contact form submission from the AHP Module 2.0 website.</p>
        
        <div class="field">
          <div class="field-label">Name:</div>
          <div class="field-value">${data.name}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Email:</div>
          <div class="field-value">${data.email}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Subject:</div>
          <div class="field-value">${data.subject}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Message:</div>
          <div class="field-value">${data.message}</div>
        </div>
        
        <a href="mailto:${data.email}" class="button">Reply to ${data.name}</a>
      </div>
      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} AHP Module 2.0. All rights reserved.</p>
      </div>
    </body>
    </html>
  `;
}

module.exports = {
  sendEmail,
  generateContactEmailHTML
};

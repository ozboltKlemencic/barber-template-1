import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';


// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // Set to true for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { email, name, message } = await request.json();

    // Verify transporter connection
    await transporter.verify();

    // Send email
    const info = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_FROM,
      to: process.env.NEXT_PUBLIC_EMAIL_TO,
      replyTo: email,
      subject: `Novo sporocilo od ${name}`,
      text: `From: ${email}\n\n${message}`,
      html: `
        <p><strong>Od:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sporočilo:</strong></p>
        <p>${message}</p>
      `
    });

    return NextResponse.json({ 
      message: 'Email sent successfully', 
      messageId: info.messageId 
    }, { status: 200 });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ 
      message: 'Failed to send email', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}
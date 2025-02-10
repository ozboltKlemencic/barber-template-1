import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from "next/server";
import { LRUCache } from "lru-cache";  // Popravek uvoza

// CORS nastavitve
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Rate limiter (2 zahtev na minuto)
const rateLimit = new LRUCache<string, number>({
  max: 100, // Največ 100 različnih IP-jev
  ttl: 60 * 1000, // 1 minuta
});

// Nodemailer konfiguracija
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// OPTIONS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}

// Glavna API funkcija
export async function POST(request: NextRequest) {
  // ✅ Popravek za pridobivanje IP naslova
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  // ✅ Preverjanje rate limita
  const requestCount = rateLimit.get(ip) || 0;
  if (requestCount >= 2) {
    return NextResponse.json(
      { message: "Preveč zahtev, poskusite kasneje." },
      { status: 429, headers: corsHeaders }
    );
  }
  rateLimit.set(ip, requestCount + 1);

  // Preveri HTTP metodo
  if (request.method !== 'POST') {
    return NextResponse.json(
      { message: 'Metoda ni dovoljena' },
      { status: 405 }
    );
  }

  try {
    const { email, name, message } = await request.json();
    console.log({ email, name, message });

    await transporter.verify();
    const info = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_FROM,
      to: process.env.NEXT_PUBLIC_EMAIL_TO,
      replyTo: email,
      subject: `Novo sporočilo od ${name}`,
      text: `From: ${email}\n\n${message}`,
      html: `
        <p><strong>Od:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sporočilo:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { message: 'E-pošta uspešno poslana', messageId: info.messageId },
      { 
        status: 200,
        headers: corsHeaders
      }
    );
  } catch (error) {
    console.error('Napaka pri pošiljanju e-pošte:', error);
    return NextResponse.json(
      { 
        message: 'Pošiljanje e-pošte ni uspelo', 
        error: error instanceof Error ? error.message : 'Neznana napaka' 
      },
      { 
        status: 500,
        headers: corsHeaders
      }
    );
  }
}

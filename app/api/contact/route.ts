import { NextResponse } from "next/server";
import {
  formatInquiryMessage,
  formatWhatsAppMessage,
  sendTelegramNotification,
  sendWhatsAppNotification,
  type ContactFormData,
} from "@/lib/notifications";

function parseBody(body: unknown): ContactFormData | null {
  if (!body || typeof body !== "object") return null;

  const { name, email, project } = body as Record<string, unknown>;
  if (typeof name !== "string" || typeof email !== "string" || typeof project !== "string") {
    return null;
  }

  const trimmed = {
    name: name.trim(),
    email: email.trim(),
    project: project.trim(),
  };

  if (!trimmed.name || !trimmed.email || !trimmed.project) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)) return null;

  return trimmed;
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const data = parseBody(body);
  if (!data) {
    return NextResponse.json({ error: "Please fill in all fields with a valid email." }, { status: 400 });
  }

  const whatsappMessage = formatWhatsAppMessage(data);
  const telegramMessage = formatInquiryMessage(data);

  const hasWhatsApp = Boolean(process.env.WHATSAPP_PHONE && process.env.CALLMEBOT_API_KEY);
  const hasTelegram = Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID);

  if (!hasWhatsApp && !hasTelegram) {
    return NextResponse.json({ error: "Contact form is not configured yet." }, { status: 503 });
  }

  try {
    const results = await Promise.all([
      hasWhatsApp ? sendWhatsAppNotification(whatsappMessage) : Promise.resolve({ ok: false as const, reason: "skipped" }),
      hasTelegram ? sendTelegramNotification(telegramMessage) : Promise.resolve({ ok: false as const, reason: "skipped" }),
    ]);

    const [whatsapp, telegram] = results;

    if (whatsapp.ok || telegram.ok) {
      return NextResponse.json({ sent: true });
    }

    return NextResponse.json({ error: "Could not deliver your message. Please try again." }, { status: 502 });
  } catch {
    return NextResponse.json({ error: "Could not deliver your message. Please try again." }, { status: 502 });
  }
}

export type ContactFormData = {
  name: string;
  email: string;
  project: string;
};

export function formatInquiryMessage({ name, email, project }: ContactFormData) {
  return [
    "📩 New portfolio inquiry",
    "",
    `👤 Name: ${name}`,
    `📧 Email: ${email}`,
    `💼 Project: ${project}`,
  ].join("\n");
}

export function formatWhatsAppMessage(data: ContactFormData) {
  return [
    "📩 *New portfolio inquiry*",
    "",
    `👤 *Name:* ${data.name}`,
    `📧 *Email:* ${data.email}`,
    `💼 *Project:* ${data.project}`,
  ].join("\n");
}

export async function sendWhatsAppNotification(message: string) {
  const phone = process.env.WHATSAPP_PHONE?.replace(/\D/g, "");
  const apiKey = process.env.CALLMEBOT_API_KEY?.trim();

  if (!phone || !apiKey) {
    return { ok: false as const, reason: "not_configured" };
  }

  const notifyUrl = new URL("https://api.callmebot.com/whatsapp.php");
  notifyUrl.searchParams.set("phone", phone);
  notifyUrl.searchParams.set("text", message);
  notifyUrl.searchParams.set("apikey", apiKey);

  const response = await fetch(notifyUrl.toString());
  const result = await response.text();

  if (!response.ok || result.toLowerCase().includes("error")) {
    return { ok: false as const, reason: "delivery_failed", detail: result };
  }

  return { ok: true as const };
}

export async function sendTelegramNotification(message: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!token || !chatId) {
    return { ok: false as const, reason: "not_configured" };
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: message }),
  });

  const result = (await response.json()) as { ok?: boolean; description?: string };

  if (!response.ok || !result.ok) {
    return { ok: false as const, reason: "delivery_failed", detail: result.description };
  }

  return { ok: true as const };
}

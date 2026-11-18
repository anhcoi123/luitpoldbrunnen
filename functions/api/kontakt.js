const jsonResponse = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store"
  }
});

export async function onRequestPost({ request, env }) {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get("Origin");

  if (origin && new URL(origin).origin !== requestUrl.origin) {
    return jsonResponse({ error: "origin_not_allowed" }, 403);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: "invalid_json" }, 400);
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return jsonResponse({ ok: true }, 200);
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.nachricht === "string" ? payload.nachricht.trim() : "";
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || name.length > 120 || !validEmail || email.length > 254 || !message || message.length > 5000) {
    return jsonResponse({ error: "invalid_fields" }, 400);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_EMAIL || !env.MAIL_FROM) {
    return jsonResponse({ error: "mail_service_not_configured" }, 503);
  }

  let delivery;
  try {
    delivery = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        from: env.MAIL_FROM,
        to: [env.CONTACT_EMAIL],
        reply_to: email,
        subject: "Neue Nachricht über die Website",
        text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`
      })
    });
  } catch {
    return jsonResponse({ error: "mail_service_unavailable" }, 502);
  }

  if (!delivery.ok) {
    return jsonResponse({ error: "mail_delivery_failed" }, 502);
  }

  return jsonResponse({ ok: true });
}

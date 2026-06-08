import { google } from "googleapis";
import { rateLimit } from "../../utils/rateLimit";

const REQUIRED_FIELDS = ["name", "email", "phone", "company"];

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

const getSheetsClient = () => {
  const { GOOGLE_CLIENT_EMAIL: clientEmail, GOOGLE_PRIVATE_KEY: privateKey } =
    process.env;

  if (!clientEmail || !privateKey) {
    throw new Error("Google Sheets credentials are not configured");
  }

  // Ensure the private key contains real newlines
  const key = privateKey.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: clientEmail,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
};

const prepareRow = ({ name, email, phone, company }) => {
  const now = new Date();
  const timestamp = now.toISOString();
  const date = timestamp.split("T")[0];
  const year = now.getUTCFullYear();

  return [timestamp, date, `${year}`, name, email, phone, company];
};

const validateBody = (body) => {
  if (typeof body !== "object" || body === null) {
    throw new Error("Invalid payload");
  }

  const sanitized = {};
  for (const field of REQUIRED_FIELDS) {
    const value = body[field];
    if (typeof value !== "string" || !value.trim()) {
      throw new Error(`Missing or invalid field: ${field}`);
    }
    sanitized[field] = value.trim();
  }

  return sanitized;
};

const submitChatbotBackend = async (formData) => {
  const rawApi = process.env.NEXT_PUBLIC_CHATBOT_API || process.env.NEXT_PUBLIC_API_BASE || "";
  const chatbotApiBase = rawApi.endsWith("/") ? rawApi.slice(0, -1) : rawApi;
  if (!chatbotApiBase) return;

  const response = await fetch(`${chatbotApiBase}/chatbot/form-submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data?.error || `Failed to submit to chatbot: HTTP ${response.status}`);
  }
};

const submitCrmInquiry = async (formData) => {
  const url = process.env.NEXT_PUBLIC_CRM_PUBLIC_INQUIRY_URL;
  if (!url) return;

  const payload = {
    fullName: formData.name,
    accountCompany: formData.company || "Not specified",
    mobile: formData.phone,
    email: formData.email,
    serviceOffering: "Dapp Development",
    message: "Lead captured via SecureBot chatbot form.",
    agreePrivacy: true,
    subscribeUpdates: false,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`CRM submission failed: HTTP ${response.status}`);
  }
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const allowed = rateLimit(req);
  if (!allowed) {
    return res.status(429).json({ error: "Too Many Requests" });
  }

  let body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch (err) {
    return res.status(400).json({ error: "Invalid JSON payload" });
  }

  let formData;
  try {
    formData = validateBody(body);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }

  try {
    // 1. Submit to Google Sheets
    const sheets = getSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const sheetName = process.env.GOOGLE_WORKSHEET_NAME || "Sheet1";

    if (!spreadsheetId) {
      throw new Error("GOOGLE_SHEET_ID is not configured");
    }

    const values = [prepareRow(formData)];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `'${sheetName}'!A:G`,
      valueInputOption: "RAW",
      requestBody: {
        values,
      },
    });

    // 2. Submit to Chatbot Backend
    try {
      await submitChatbotBackend(formData);
    } catch (chatbotErr) {
      console.error("Chatbot submission failed, continuing:", chatbotErr);
    }

    // 3. Submit to CRM
    try {
      await submitCrmInquiry(formData);
    } catch (crmErr) {
      console.error("CRM submission failed, continuing:", crmErr);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("/api/form-submit error", err);
    return res.status(500).json({
      error: err.message || "Failed to record submission",
    });
  }
}
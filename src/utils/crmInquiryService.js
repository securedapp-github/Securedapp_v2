/**
 * Utility to submit lead inquiries / project requests to CRM Public Project Inquiry API.
 * Delivers submissions into the CRM "Requests" (Project Inquiry / Leads) module.
 */

export const sendInquiryToCRM = async ({
  fullName,
  email,
  mobile = "",
  accountCompany = "Not specified",
  serviceOffering = "DPDP Compliance Platform",
  message = "",
  source = "website",
  leadSource = "website",
  agreePrivacy = true,
  subscribeUpdates = false,
  metadata = {}
}) => {
  const apiUrl =
    process.env.NEXT_PUBLIC_CRM_PUBLIC_INQUIRY_URL ||
    "https://crm-be.securedapp.io/api/public/project-inquiry";

  let extraNotes = [];
  if (metadata && Object.keys(metadata).length > 0) {
    for (const [key, val] of Object.entries(metadata)) {
      if (val !== undefined && val !== null && val !== "") {
        extraNotes.push(`${key}: ${val}`);
      }
    }
  }

  const finalMessage = extraNotes.length > 0
    ? `${message}\n\n--- Additional Details ---\n${extraNotes.join("\n")}`
    : message;

  const payload = {
    fullName: fullName || "Website User",
    email: email || "",
    mobile: mobile || "",
    accountCompany: accountCompany || "Not specified",
    serviceOffering: serviceOffering || "DPDP Compliance Platform",
    message: finalMessage,
    source: source || "website",
    leadSource: leadSource || "website",
    agreePrivacy: agreePrivacy !== undefined ? agreePrivacy : true,
    subscribeUpdates: subscribeUpdates || false,
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();
  let data = {};
  try {
    data = JSON.parse(responseText);
  } catch (e) {
    data = { raw: responseText };
  }

  if (!response.ok) {
    const errorMsg = data.message || data.error || `HTTP ${response.status} failed to submit request to CRM`;
    throw new Error(errorMsg);
  }

  return data;
};

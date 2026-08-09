/**
 * Helper to submit ticket / contact requests to CRM External Ticket API
 */
export const sendTicketToCRM = async ({ 
  title, 
  description, 
  name, 
  email, 
  phone, 
  telegram,
  projectName,
  category = 'Other', 
  priority = 'Medium', 
  externalUserId, 
  metadata = {} 
}) => {
  const apiUrl = process.env.NEXT_PUBLIC_CRM_TICKET_API_URL || 'http://localhost:5000/api/tickets/external';
  const apiKey = process.env.NEXT_PUBLIC_CRM_TICKET_API_KEY || 'crm_ext_secret_123';

  let extraDetails = [];
  if (phone) extraDetails.push(`Phone: ${phone}`);
  if (telegram) extraDetails.push(`Telegram: ${telegram}`);
  if (projectName) extraDetails.push(`Project / Domain: ${projectName}`);

  const fullDescription = extraDetails.length > 0 
    ? `${description}\n\n--- Contact & Metadata ---\n${extraDetails.join('\n')}` 
    : description;

  const payload = {
    title: title || `Ticket Request from ${name || email || 'Website User'}`,
    description: fullDescription,
    name: name || 'Website User',
    email: email || '',
    externalUserId: externalUserId || null,
    category,
    priority,
    metadata: {
      phone: phone || '',
      telegram: telegram || '',
      projectName: projectName || '',
      submittedAt: new Date().toISOString(),
      sourceWebsite: 'Securedapp Main Site (Solidity Shield / Quantum Vault)',
      ...metadata
    }
  };

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Failed to submit ticket to CRM');
  }

  return data;
};

const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/wETO6YZ1MyENbRe5SDiU/webhook-trigger/9bf3f5fc-f5b2-4a14-813a-c5d1f5929556';

export async function submitForm(formData) {
  const response = await fetch(GHL_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Form submission failed');
  }

  return { success: true };
}

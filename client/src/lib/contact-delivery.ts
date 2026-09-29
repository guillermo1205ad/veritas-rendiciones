const recipient = 'guillermo1205ad@gmail.com';
const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

export function consultationMailto(data: FormData): string {
  const body = [...data.entries()]
    .filter(([name, value]) => !name.startsWith('_') && typeof value === 'string' && value.trim())
    .map(([name, value]) => `${name}: ${value}`)
    .join('\n\n');
  return `mailto:${recipient}?subject=${encodeURIComponent('Consulta de diagnóstico · VÉRITAS')}&body=${encodeURIComponent(body)}`;
}

export async function sendConsultation(data: FormData): Promise<void> {
  if (data.get('_honey')) throw new Error('Invalid submission');
  const payload: Record<string, string | boolean> = {};
  for (const [name, value] of data.entries()) {
    if (typeof value === 'string' && name !== '_next') payload[name] = value;
  }
  let endpoint = `https://formsubmit.co/ajax/${recipient}`;
  if (accessKey) {
    endpoint = 'https://api.web3forms.com/submit';
    payload.access_key = accessKey;
    payload.subject = String(payload._subject);
    payload.from_name = 'VÉRITAS Advisory';
    payload.botcheck = false;
    for (const name of Object.keys(payload)) if (name.startsWith('_')) delete payload[name];
  }
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Submission failed: ${response.status}`);
    const result = await response.json();
    if (result.success !== true && result.success !== 'true') throw new Error('Submission not accepted');
  } finally {
    window.clearTimeout(timeout);
  }
}

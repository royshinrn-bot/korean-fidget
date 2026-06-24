export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text, targetLang } = req.body || {};

  // ── 입력 검증: 정상 입력은 한글 1~2글자뿐 ──
  if (typeof text !== 'string' || typeof targetLang !== 'string') {
    return res.status(400).json({ error: 'Invalid input' });
  }
  if (!text.trim() || !targetLang.trim()) {
    return res.status(400).json({ error: 'Missing text or targetLang' });
  }
  // text: 한글(음절/자모)만 허용, 최대 12자 → 영어 지시문 주입 자체가 불가능
  if (text.length > 12 ||
      !/^[\u1100-\u11FF\u3130-\u318F\uAC00-\uD7A3\s]+$/.test(text)) {
    return res.status(400).json({ error: 'Invalid text' });
  }
  // targetLang: 40자 이하 + 프롬프트 탈출 문자 차단
  if (targetLang.length > 40 || /[{}"`<>\\\n\r]/.test(targetLang)) {
    return res.status(400).json({ error: 'Invalid targetLang' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 100,
        messages: [{
          role: 'user',
          content: `The Korean word/syllable is: "${text}". Translate its meaning into ${targetLang}. If it is a real Korean word with a clear meaning, reply with ONLY a natural short translation including articles where appropriate (e.g. "a bag", "the sun", "to run"). If it is not a real word or has no translatable meaning, reply with ONLY: Oops, Your Korean word went too far.. No explanations, nothing else.`
        }]
      })
    });

    const data = await response.json();
    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    const result = data.content?.[0]?.text?.trim() || '—';
    return res.status(200).json({ result });

  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

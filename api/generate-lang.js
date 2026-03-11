export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { langName } = req.body;
  if (!langName) {
    return res.status(400).json({ error: 'Missing langName' });
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
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Generate UI strings for a Korean syllable learning app in the language: "${langName}".
Reply ONLY with a valid JSON object, no markdown, no explanation. Use this exact structure:
{
  "valid": true,
  "displayName": "language name in that language",
  "tab1": "1st syllable label",
  "tab2": "2nd syllable label",
  "consonant": "자음 · [consonants in that language]",
  "vowel": "모음 · [vowels in that language]",
  "batchim": "받침 · [final consonant in that language]",
  "optional": "선택 / [optional in that language]",
  "instruction": "short instruction for: select tab → consonant → vowel → batchim (optional) · 🔊",
  "toastNeed": "please build at least one syllable first",
  "toastEmpty": "nothing to pronounce",
  "toastFail": "audio playback failed",
  "translationLabel": "translation",
  "onboardingStart": "start learning →",
  "onboardingItems": [
    "This app was created to help you quickly understand my Korean language study book. [keep the HTML tag: <a href='https://a.co/d/06yqaVEa' target='_blank' class='onboarding-email'>→ view book (Amazon.com)</a>]",
    "Two-syllable words are quite common in Korean. For users with no prior knowledge, this app helps learn how Korean is combined and how sounds are made.",
    "You can assemble words just by pressing buttons on screen — no Korean keyboard needed.",
    "Longer sentences will be released as an upgraded version on the App Store / Google Play Store.",
    "Any feedback is appreciated: <a href='mailto:foothillsfun.art@gmail.com' class='onboarding-email'>foothillsfun.art@gmail.com</a>"
  ]
}
If the language is not recognized or invalid, reply with: {"valid": false}`
        }]
      })
    });

    const data = await response.json();
    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    const raw = data.content?.[0]?.text?.trim() || '';
    const cleaned = raw.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/, '').trim();
    const parsed = JSON.parse(cleaned);

    return res.status(200).json({ result: parsed });

  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

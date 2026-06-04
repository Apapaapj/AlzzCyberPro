// api/username.js
export default async function handler(req, res) {
  const { user } = req.query;
  if (!user) return res.status(400).json({ error: "Username missing" });

  // ===================== SOCIAL CHECKS =====================
  const results = {};

  // GitHub
  results.github = await fetch(`https://github.com/${user}`, { method: "HEAD" })
    .then(r => r.status === 200).catch(() => false);

  // Reddit
  results.reddit = await fetch(`https://www.reddit.com/user/${user}`, { method: "HEAD" })
    .then(r => r.status === 200).catch(() => false);

  // TikTok
  results.tiktok = await fetch(`https://www.tiktok.com/@${user}`, { method: "HEAD" })
    .then(r => r.status === 200).catch(() => false);

  // Instagram
  results.instagram = await fetch(`https://www.instagram.com/${user}/`, { method: "HEAD" })
    .then(r => r.status === 200).catch(() => false);

  // Bisa ditambah lagi: Twitter, YouTube, Facebook, dll

  // ===================== RETURN JSON =====================
  res.status(200).json({ user, ...results });
}

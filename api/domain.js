// api/domain.js
export default async function handler(req, res) {
  const { domain } = req.query;
  if(!domain) return res.status(400).json({ error: "Domain missing" });

  const dnsData = await fetch(`https://dns.google/resolve?name=${domain}`)
    .then(r => r.json())
    .catch(() => null);

  res.status(200).json({
    domain,
    dnsData,
    source: "Google DNS API"
  });
}
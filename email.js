// api/email.js
export default async function handler(req, res) {
  const { email } = req.query;
  if(!email) return res.status(400).json({ error: "Email missing" });

  const domain = email.split("@")[1] || "";
  const disposable = ["tempmail.com","guerrillamail.com"].includes(domain);

  res.json({
    email,
    validFormat: /\S+@\S+\.\S+/.test(email),
    domain,
    disposable
  });
}
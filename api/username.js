// api/username.js
export default async function handler(req, res) {
  const { user } = req.query;
  if(!user) return res.status(400).json({ error: "Username missing" });

  const github = await fetch(`https://github.com/${user}`, { method: "HEAD" })
    .then(r => r.status===200).catch(()=>false);

  const reddit = await fetch(`https://www.reddit.com/user/${user}`, { method: "HEAD" })
    .then(r => r.status===200).catch(()=>false);

  res.json({ user, github, reddit });
}
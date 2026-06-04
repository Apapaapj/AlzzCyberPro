// api/ip.js
export default async function handler(req, res) {
  try {
    const { ip } = req.query;

    if (!ip) {
      return res.status(400).json({ error: "IP parameter missing" });
    }

    // Ambil data geolocation dari IP publik (ipapi.co)
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();

    // Kembalikan hasil real OSINT
    return res.status(200).json({
      ip: ip,
      geo: data,
      source: "ipapi.co",
      legal: true
    });

  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch IP data", details: error.message });
  }
}
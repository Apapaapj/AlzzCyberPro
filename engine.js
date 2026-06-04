function calculateRisk(data) {
  let risk = 0;

  if (data.invalidEmail) risk += 30;
  if (data.disposable) risk += 25;
  if (data.noMX) risk += 25;
  if (data.invalidDomain) risk += 30;
  if (data.noIP) risk += 40;
  if (data.github === false && data.reddit === false) risk += 50;

  return Math.min(risk, 100);
}

function riskLevel(score) {
  if (score <= 20) return "LOW";
  if (score <= 50) return "MEDIUM";
  if (score <= 75) return "HIGH";
  return "CRITICAL";
}
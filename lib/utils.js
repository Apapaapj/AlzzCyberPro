// lib/utils.js

export function sanitize(input) {
  return input.trim().toLowerCase();
}

export function generateTimestamp() {
  return new Date().toISOString();
}

export function buildReport(type, input, data, riskScore, riskLevel) {
  return {
    tool: "AlzzCyber Pro",
    version: "9.9 PRO",
    type,
    input,
    result: data,
    risk: {
      score: riskScore,
      level: riskLevel
    },
    generatedAt: generateTimestamp(),
    classification: "OSINT PUBLIC DATA ONLY"
  };
}
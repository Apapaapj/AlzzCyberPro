async function runScan() {
  const type = document.getElementById("type").value;
  const input = document.getElementById("input").value.trim();
  const out = document.getElementById("output");

  if (!input) {
    out.textContent = "Enter target!";
    return;
  }

  out.textContent = "Scanning...";

  let result = {};

  try {

    // ================= EMAIL =================
    if (type === "email") {
      const res = await fetch(`/api/email?email=${input}`);
      const data = await res.json();

      result = {
        type: "email",
        input,
        ...data
      };
    }

    // ================= DOMAIN =================
    if (type === "domain") {
      const res = await fetch(`/api/domain?domain=${input}`);
      const data = await res.json();

      result = {
        type: "domain",
        input,
        ...data
      };
    }

    // ================= USERNAME =================
    if (type === "username") {
      const res = await fetch(`/api/username?user=${input}`);
      const data = await res.json();

      result = {
        type: "username",
        input,
        ...data
      };
    }

    // ================= IP =================
    if (type === "ip") {
      const res = await fetch(`/api/ip?ip=${input}`);
      const data = await res.json();

      result = {
        type: "ip",
        input,
        ...data
      };
    }

    // ================= SHOW RESULT =================
    window.lastScan = result;
    out.textContent = JSON.stringify(result, null, 2);

  } catch (err) {
    out.textContent = "Error scanning target!";
    console.error(err);
  }
}

// ================= EXPORT REPORT =================
function exportReport() {
  if (!window.lastScan) return alert("No scan data!");

  const blob = new Blob(
    [JSON.stringify(window.lastScan, null, 2)],
    { type: "application/json" }
  );

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);

  // ini cuma simulasi folder reports
  a.download = `reports/AlzzCyber-REPORT-${Date.now()}.json`;

  a.click();
}
function checkURL() {
  const url = document.getElementById("urlInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!url) {
    resultDiv.innerText = "Please enter a URL.";
    resultDiv.style.color = "orange";
    return;
  }

  const suspiciousPatterns = [
    /(\d{1,3}\.){3}\d{1,3}/, // IP address
    /login|secure|account|verify|update/i,
    /@/, /-/, /\.tk|\.ml|\.ga|\.cf|\.gq/  // suspicious TLDs
  ];

  let suspicion = 0;
  suspiciousPatterns.forEach(pattern => {
    if (pattern.test(url)) suspicion++;
  });

  if (suspicion >= 3) {
    resultDiv.innerText = "⚠️ This URL looks VERY suspicious!";
    resultDiv.style.color = "red";
  } else if (suspicion === 2) {
    resultDiv.innerText = "⚠️ This URL may be suspicious.";
    resultDiv.style.color = "orange";
  } else {
    resultDiv.innerText = "✅ This URL looks safe (but always double-check).";
    resultDiv.style.color = "lightgreen";
  }
}

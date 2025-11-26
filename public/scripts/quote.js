const quoteEl = document.getElementById("quote");
const quoteYearEl = document.getElementById("quoteYear");

const fetchQuote = async () => {
  try {
    const res = await fetch("https://quotes.api.hutotpn.com", {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();

    if (quoteEl) quoteEl.textContent = `“${data.quote}”`;
    if (quoteYearEl) quoteYearEl.textContent = data.year || "Unknown Year";
  } catch (error) {
    if (quoteEl) quoteEl.textContent = `Failed to load quote: ${error}`;
    if (quoteYearEl) quoteYearEl.textContent = "idk";
  }
};

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

async function fetchQuote() {
  try {
    const res = await fetch("https://zenquotes.io/api/random");
    if (!res.ok) throw new Error("Network response not ok");
    const data = await res.json();

    // data is an array with one object
    const q = data[0];
    quoteEl.textContent = q.q;
    authorEl.textContent = `— ${q.a}`;
  } catch (err) {
    console.error(err);
    quoteEl.textContent = "Oops! Couldn't fetch a quote.";
    authorEl.textContent = "";
  }
}

// Initial fetch
fetchQuote();

// New quote button
newQuoteBtn.addEventListener("click", fetchQuote);

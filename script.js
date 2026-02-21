const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

async function fetchQuote() {
  try {
    // This is the free Quotable API
    const res = await fetch("https://api.quotable.io/random");
    if (!res.ok) throw new Error("Network response not ok");
    const data = await res.json();

    quoteEl.textContent = data.content;
    authorEl.textContent = `— ${data.author}`;
  } catch (err) {
    console.error(err);
    quoteEl.textContent = "Oops! Couldn't fetch a quote.";
    authorEl.textContent = "";
  }
}

// Fetch a quote on page load
fetchQuote();

// Fetch a new quote when button is clicked
newQuoteBtn.addEventListener("click", fetchQuote);

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

// Function to fetch a quote from ZenQuotes
async function fetchQuote() {
  try {
    const res = await fetch("https://zenquotes.io/api/random");
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();

    // data is an array with one object: {q: quote, a: author}
    const quoteData = data[0];
    quoteEl.textContent = quoteData.q;
    authorEl.textContent = `— ${quoteData.a}`;
  } catch (err) {
    console.error(err);
    quoteEl.textContent = "Oops! Couldn't fetch a quote.";
    authorEl.textContent = "";
  }
}

// Fetch a quote immediately on page load
fetchQuote();

// Fetch a new quote when button is clicked
newQuoteBtn.addEventListener("click", fetchQuote);

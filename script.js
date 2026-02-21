const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

let lastQuote = ""; // store last quote to avoid repeats

async function fetchQuote() {
  try {
    let data;
    let quote;

    do {
      const res = await fetch("https://api.quotable.io/random");
      if (!res.ok) throw new Error("Network response not ok");
      data = await res.json();
      quote = data.content;
    } while (quote === lastQuote); // repeat fetch if same as last

    // update UI
    quoteEl.textContent = quote;
    authorEl.textContent = `— ${data.author}`;
    lastQuote = quote;
  } catch (err) {
    console.error(err);
    quoteEl.textContent = "Oops! Couldn't fetch a quote.";
    authorEl.textContent = "";
  }
}

// Fetch quote on page load
fetchQuote();

// Fetch new quote on button click
newQuoteBtn.addEventListener("click", fetchQuote);

const quotes = [
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  // Add more quotes here
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function updateQuote() {
  const quote = getRandomQuote();
  document.querySelector("#quote").innerHTML = quote.quote;
  document.querySelector("#author").innerHTML = `- ${quote.author}`;
}

document
  .querySelector("#generate-button")
  .addEventListener("click", updateQuote);

updateQuote();

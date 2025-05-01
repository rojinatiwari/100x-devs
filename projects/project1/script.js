//variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    person: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon",
  },
  {
    quote: "Get busy living or get busy dying.",
    person: "Stephen King",
  },
  {
    quote:
      "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    person: "Brian Tracy",
  },
  {
    quote: "Believe you can and you're halfway there.",
    person: "Theodore Roosevelt",
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    person: '"Tony Robbins"',
  },
  {
    quote: '"Act as if what you do makes a difference. It does."',
    person: "William James",
  },
  {
    quote:
      "Success is not how high you have climbed, but how you make a positive difference to the world.",
    person: "Roy T. Bennett",
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    person: "C.S. Lewis",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    person: "Confucius",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    person: "Henry David Thoreau",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    person: "Chris Grosser",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});

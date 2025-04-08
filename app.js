// Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    person: "Albert Einstein",
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving."
  },
  {
    person: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken."
  },
  {
    person: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world."
  },
  {
    person: "Steve Jobs",
    quote: "Stay hungry, stay foolish."
  },
  {
    person: "Nelson Mandela",
    quote: "It always seems impossible until it’s done."
  },
  {
    person: "Abraham Lincoln",
    quote: "Whatever you are, be a good one."
  },
  {
    person: "Martin Luther King Jr.",
    quote: "Injustice anywhere is a threat to justice everywhere."
  },
  {
    person: "Mother Teresa",
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier."
  },
  {
    person: "Mark Twain",
    quote: "The secret of getting ahead is getting started."
  },
  {
    person: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop."
  }
];

btn.addEventListener('click', function() {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});

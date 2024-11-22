/* 
Challange:
Guess the no.
If the guess is smaller print guess a larger no.
If the guess is greater print guess a smaller no.
If the guess is correct print you won.
  also print "How many attempts you took to guess the no."

Hint: USE BUILT-IN METHODS FROM MATH CLASS FROM JS
*/

const MIN = 1;
const MAX = 100;
const RandomNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
let attempts = 0;
let guess = undefined;

// console.log(RandomNumber);

do {
  guess = Number(prompt("Guess the no. between " + MIN + " and " + MAX));
  attempts++;
  if (guess > RandomNumber) {
    alert("Guess a smaller no.");
  } else if (guess < RandomNumber) {
    alert("Guess a larger no.");
  }
} while (guess !== RandomNumber);

alert("You won in " + attempts + " attempts!");

console.log(RandomNumber);
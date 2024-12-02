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
const randomNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
let attempts = 0;
let guessSelection = document.querySelector("#guess");

let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");

let message1 = document.querySelector("#message1");
let message2 = document.querySelector("#message2");

console.log(randomNumber);

function check() {
  attempts++;
  let guess = guessSelection.value;
  console.log(guess);
  if (guess > randomNumber) {
    message1.style.display = "block";
    message1.innerHTML = "Guess a smaller no.!";
  }
  else if (guess < randomNumber) {
    message1.style.display = "block";
    message1.innerHTML = "Guess a larger no.!";
  }
  else {
    message1.style.display = "none";
    message2.style.display = "block";
    message2.innerHTML = "You won in " + attempts + " attempts!";
    guessSelection.setAttribute("disabled", true);
  }
}


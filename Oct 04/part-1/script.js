// let age = 18;

// if (age < 18) {
//   console.log("Age is greater than or equar 18");
// } else{
//   console.log("Age is less than 18");
// }

// (age >= 18) ? console.log("Age is greater than or equar 18") : console.log("Age is less than 18");


let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';


if ( age < 3 ) {
  message = "Hi, baby!";
} else if ( age < 18 ) {
  message = "Hello!";
} else if ( age < 100 ) {
  message = "Greetings!";
} else {
  message = "What an unusual age!";
}

console.log( message );
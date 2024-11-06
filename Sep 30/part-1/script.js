// Given a no. n. Find whether the no. is odd or even?

// let n = 1.2;

// if (n % 2 == 1){
//     console.log("Odd no.!");
// }
// else if (n % 2 == 0) {
//     console.log("Even no.!")
// }
// else {
//     console.log("Invalid input!");
//     console.log("The input is not an integer!");
// }

// Write a program (WAP) to check whether a no. is divisible by 2 and 3.

// WAP to check whether a no. is divisible by 2, divisible by 3, or divisible by both.


//First Question//
/*let n = 6;

if (n % 2 == 0){
    console.log("This is divided by 2");
}
else (n % 3 == 0){
    console.log("This is divided by 2");
}


// Secound Question//

// let n = 6;

// if (n % 2 == 0){
//     console.log("This is divided by 2");
// }
// else if (n % 3 == 0){
//     console.log("This is divided by 2");
// }

// else (n % 2 == 0)(n % 3 == 0){
//     console.log("Divisible By Both");
// }*/

// Write a program (WAP) to check whether a no. is divisible by 2 and 3.

//solution

/*let num = prompt('Enter your number');

if(num % 2 === 0 & num % 3 === 0){
    alert("yes the number you entered is divisible by 2 and 3");
} else {
    alert("invalid number")
}*/

// WAP to check whether a no. is divisible by 2, divisible by 3, or divisible by both.
/* 
e.g.,
num = 2;    // divisible by 2
num = 9;    // divisible by 3
num = 12;   // divisible by both
*/

let num = prompt("Enter your number");

if (num % 2 === 0 & num % 3 === 0) {
    alert("Divisible by both");
}
else if (num % 2 === 0) {
    alert('Divisble by 2');
}
else if (num % 3 === 0) {
    alert('Divisible by 3');
}




/* 
Given a no. n
WAP that evaluates n to even or odd!
If the no. is even check if it's divisible by 5
If the no. is odd check if it's divisible by 3
*/
let n = prompt("Enter a no.");

if (n % 2 === 0) {
  console.log(n, "is even");
  if (n % 5 === 0) {
    console.log("The no. is divisible by 5");
  }
} else if (n % 2 === 1) {
  console.log(n, "is odd");
  if (n % 3 === 0) {
    console.log("The no. is divisible by 3");
  }
} else {
  console.log("Invalid Input!");
}

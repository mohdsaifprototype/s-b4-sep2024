/* Show the sign
importance: 2

Using if..else, write the code which gets a number via prompt and then shows in alert:

    1, if the value is greater than zero,
    -1, if less than zero,
    0, if equals zero.

In this task we assume that the input is always a number. */
// let n1 = prompt("Enter a no.");
// if (n1 > 0) {
//   alert("1");
// } else if (n1 < 0) {
//   alert("-1");
// } else if (n1 == 0) {
//   alert("0");
// } else {
//   alert("invalid No");
// }

let message;
let login = "Employee";
message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No Login"
    : "";

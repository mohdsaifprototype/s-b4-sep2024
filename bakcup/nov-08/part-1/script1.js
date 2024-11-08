/* JS Data Types:

Data type are classified into two categories:

There are 8 basic data types in JavaScript.

1.  number: for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
2.  bigint: for integer numbers of arbitrary length.
3.  string for strings. A string may have zero or more characters, there’s no separate single-character type.
4.  boolean for true/false.
5.  null for unknown values – a standalone type that has a single value null.
6.  undefined for unassigned values – a standalone type that has a single value undefined.
7.  symbol for unique identifiers.
And one non-primitive data type: 
8.  object for more complex data structures.

*/

/* 1.1 Numbers */
let num1 = 23,
  num2 = 3.14,
  num3 = -90;
console.log("num1: ", num1, "\nnum2: ", num2, "\nnum3: ", num3);

/* 1.2 Strings */
let str1 = "Hello World",
  str2 = "Hello World";

/* There is a special type of string known as template literal */
let str3 = `The sum of ${num1} and ${num2} is: ${num1 + num2}`;

console.log("str1: ", str1);
console.log("str2: ", str2);
console.log("str3: ", str3);

/* 1.3 Boolean */
let result;

result = 5 < 3;
console.log("result: ", result);
result = 5 > 3;
console.log("result: ", result);

/* 1.4 Undefined */
let usrName; // declaration of a variable
usrName = "Gurpreet"; // definition of a variable
console.log("Username is: ", usrName);

usrName = usrName + " Singh"; // Conctenation: Adding data to a string.
console.log("Username is: ", usrName);

/* 1.5 Null */
let nullVar = null;
console.log("nullVar: ", nullVar);


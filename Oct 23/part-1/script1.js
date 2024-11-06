/**
 * @var sub for subject
 */


// let sub = [90, 80, 70, 60, 50];

// console.log("Grade card of Mohit");
// console.log("Hindi:\t\t\t", sub[0]);
// console.log("English:\t\t", sub[1]);
// console.log("Mathematics:\t\t", sub[2]);
// console.log("Science:\t\t", sub[3]);
// console.log("SST:\t\t\t", sub[4]);


/* 
Array is a collection of multiple values

Types:
one dimensional array (linear array)
multidimensional array
*/

/* Multidimensional array */
let students = [
  [90, 80, 70, 60, 50],
  [80, 90, 70, 60, 50],
  [70, 80, 90, 60, 50],
]

for (let i = 0; i < 3; i++) {  
  console.log("Grade card of Student", i);
  console.log("Hindi:\t\t\t", students[i][0]);
  console.log("English:\t\t", students[i][1]);
  console.log("Mathematics:\t\t", students[i][2]);
  console.log("Science:\t\t", students[i][3]);
  console.log("SST:\t\t\t", students[i][4]);
}
/* Object */
/* 
An object is a collection of properties (key-value pairs)
and methods (functions)
*/

let student = {
  // Properties
  enrollId: 1,
  name: "Mohit",
  dob: "2005-01-26",
  height: 5.2,
  weight: 50,
  isHealthy: false,

  // Methods
  greet: function () {
    console.log("Hello Everyone!");
  },
};

// To print the objects properties

// console.log(student.enrollId);
console.log(student.name);
// console.log(student.dob);
// console.log(student.height);
// console.log(student.weight);
// console.log(student.isHealthy);

student.greet();

// To Modify the object
student.name = "Mohit Kumar";

console.log(student.name);

console.table(student);

// To add new things into the object

student.gender = "Male";

console.table(student);

// To delete things from the object

delete student.gender;

console.table(student);

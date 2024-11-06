let cgpa = prompt("Enter you CGPA");
console.log("Your CGPA is:", cgpa);

switch (Math.round(cgpa)) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("You need to clear your board exam");
    break;
  case 5:
    console.log("You can choose arts stream!");
    break;
  case 6:
    console.log("You can choose arts or commerce stream!");
    break;

  case 7:
  case 8:
  case 9:
    console.log("You can choose arts or commerce or science stream!");
    break;
  case 10:
    console.log("You can choose arts or commerce or science stream!");
    console.log("I recommand you choosing Science stream! if possible!");
    break;
  default:
    console.log("Invalid cgpa!");
    break;
}

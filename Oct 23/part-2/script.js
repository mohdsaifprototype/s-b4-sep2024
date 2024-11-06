/* Two-dimensional array */
let twoDimArray = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [18, 19, 20],
  [16, 20],
];


for (let i = 0; i<twoDimArray.length; i++) {
  for (let j =0; j<twoDimArray[i].length; j++) {
    console.log(twoDimArray[i][j]);
  }
  console.log("\n");
}

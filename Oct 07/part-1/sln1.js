let flage = 0;
function changeColor() {
  if (flage === 0) {
    document.body.style.backgroundColor = "cyan";
    flage++;
  }
  else if (flage === 1) {
    document.body.style.backgroundColor = "salmon";
    flage++;
  }
  else if (flage === 2) {
    document.body.style.backgroundColor = "tomato";
    flage = 0;
  }
}

// n clicks
/* 
1st click --> cyan
2nd click --> salmon
3rd click --> tomato
4th click --> cyan
5th click --> salmon
6th click --> tomato
...
*/

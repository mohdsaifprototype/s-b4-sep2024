let flage = 0;
function changeColor() {
  if (flage === 0) {
    heading.style.color = "magenta";
    heading.style.backgroundColor = "cyan";
    flage++;
  }
  else if (flage === 1) {
    heading.style.color = "Gold";
    heading.style.backgroundColor = "salmon";
    flage++;
  }
  else if (flage === 2) {
    heading.style.color = "white";
    heading.style.backgroundColor = "tomato";
    
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

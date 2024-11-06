// let flag = 0;
// function changeBG() {
//     // document.body.style.background = "#cab"
//     // console.log("Flag = ", flag);
//     if (flag === 0){
//         document.body.style.background = "tomato"
//     }
//     else if (flag === 1){
//         document.body.style.background = "cyan"
//     }
//     else if (flag === 2){
//         document.body.style.background = "magenta"
//     }
//     else {
//         document.body.style.background = ""
//     }
//     flag++;
// }

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

let flag = 0;
function changeBG() {
    // document.body.style.background = "#cab"
    // console.log("Flag = ", flag);
    if (flag === 0){
        heading.style.color = "tomato"
    }
    else if (flag === 1){
        heading.style.color = "cyan"
    }
    else if (flag === 2){
        heading.style.color = "magenta"
    }
    else {
        heading.style.color = ""
    }
    flag++;
}
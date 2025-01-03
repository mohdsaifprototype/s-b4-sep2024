/* 
Topic: 
*/

/* Date & time, setTimeOut(), setInterval() */

/* To use a custom date we can pass values to the date object */

/* Date(year, month, date, hours, minutes, seconds, milliseconds) */

// let date = new Date(2000, 9, 32, 12, 12, 15, 22);

// console.log(date);

let now = new Date();

const myElem = document.createElement("div");

document.body.append(myElem);

function updateTime() {
  let now = new Date();
  myElem.innerHTML = `${now}`;
}

updateTime();

let myInterval = setInterval(updateTime, 1000);

setTimeout(() => {
  clearInterval(myInterval);
}, 10000);
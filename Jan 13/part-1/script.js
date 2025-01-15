/* 
Topic: Stopwatch
*/

/* 
hh:mm:ss
setInterval
clearInterval
*/

const time = document.querySelector(".time");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
function getTimer() {
  seconds++;
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes == 60) {
    hours++;
    minutes = 0;
  }
  // console.log(`${hours}:${minutes}:${seconds}:${timer}`);
  return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

let myInterval;

start.addEventListener("click", () => {
  myInterval = setInterval(() => (time.innerHTML = getTimer()), 1000);
});

stop.addEventListener("click", () => {
  clearInterval(myInterval);
});

reset.addEventListener("click", () => {
  hours = 0;
  minutes = 0;
  seconds = 0;
  clearInterval(myInterval);
  time.innerHTML = "00:00:00";
});

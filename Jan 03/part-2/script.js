const hh = document.getElementById("hh").firstElementChild;
const mm = document.getElementById("mm").firstElementChild;
const ss = document.getElementById("ss").firstElementChild;


function fetchtime() {
  let now = new Date();
  hh.textContent = now.getHours();
  mm.textContent = now.getMinutes();
  ss.textContent = now.getSeconds();
}

setInterval(fetchtime, 1000);
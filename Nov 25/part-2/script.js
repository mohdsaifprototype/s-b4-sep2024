let myContainer = document.body.children[1].children[0];

console.log("My container is:", myContainer);

/* myContainer.style.color = "blue";
myContainer.style.backgroundColor = "cyan";
myContainer.style.border = "2px solid red";
myContainer.style.borderRadius = "10px";
myContainer.style.padding = "10px"; */

myContainer.style.cssText = `
color: blue;
background-color: cyan;
border: 2px solid red;
border-radius: 10px;
padding: 10px;`;

myContainer.lastElementChild.innerHTML = "Hello World!";

console.log("My containers styling is:", myContainer.style);

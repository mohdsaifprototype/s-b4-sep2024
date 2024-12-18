// let myContainer = document.querySelector(".container");

// let myImg = document.createElement("img");
// myImg.src = "https://picsum.photos/id/112/600/400";
// myImg.alt = "an image";
// myImg.width = "400";

let myform = document.createElement("form");
myform.setAttribute("action", "#");
myform.setAttribute("class", "form");

let myInput1 = document.createElement("input");
myInput1.setAttribute("type", "email");
myInput1.setAttribute("name", "email");
myInput1.setAttribute("id", "email");
myInput1.setAttribute("placeholder", "johndoe@example.com");

let myInput2 = document.createElement("input");
myInput2.setAttribute("type", "password");
myInput2.setAttribute("name", "password");
myInput2.setAttribute("id", "password");
myInput2.setAttribute("placeholder", "Enter password");

let myButton = document.createElement("button");
myButton.setAttribute("type", "button");
myButton.setAttribute("onclick", "clicked()");
myButton.innerHTML = "Login";

myform.append(myInput1, myInput2, myButton);

document.body.append(myform);
/* 
Topic: 
*/

let myCard = document.createElement("div");

myCard.innerHTML = `
    <img class="card-img" src="https://picsum.photos/id/112/600/400" alt="an image from picsum" width="400">
    <h2 class="card-title">Lorem ipsum dolor sit amet</h2>
    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, placeat.</p>
`;

document.body.prepend(myCard);

function handleClick() {
  // if (myCard.className.match("card")) {
  //   // myCard.className = "";
  //   myCard.classList.remove("card");
  // } else {
  //   // myCard.className = "card";
  //   myCard.classList.add("card");
  // }

  myCard.classList.toggle("card");
}

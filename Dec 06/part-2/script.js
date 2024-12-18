const inputs = document.querySelectorAll("input");
const message = document.querySelector(".yay");

const correctOpt = "ECMAScript";

function check() {
  inputs.forEach(function (input) {
    // console.log(input.value);

    if (input.checked) {
      // console.log("The checked value is", input.value);
      if (input.value === "ECMAScript") {
        console.log("True");
        inputs.forEach(function (input) {
          input.disabled = true;
        })
        message.hidden = "";
      } else if (input.value != "ECMAScript") {
        console.log("False");
      }
    }
  });
}

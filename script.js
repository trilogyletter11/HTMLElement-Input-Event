//syntax 1

// var input = document.querySelector("#input");
// var result = document.querySelector("#result");
// input.addEventListener("input", function () {
//   result.textContent = "Nama: " + this.value;
// });

// syntax 2
var input = document.querySelector("#input");
var result = document.querySelector("#result");
input.addEventListener("input", function () {
  input.value
    ? (result.innerText = "Text: " + input.value)
    : (result.innerText = "");
});

//syntax 3

// const input = document.querySelector("input");
//       const log = document.getElementById("values");

//       input.addEventListener("input", updateValue);

//       function updateValue(e) {
//         log.textContent = e.target.value;
//       };

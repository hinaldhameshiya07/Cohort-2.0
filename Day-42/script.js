// Day - 42 task increment & decrement counter

let inc = document.querySelector("#inc");
let dec = document.querySelector("#dec");
let counter = document.querySelector("#sec-head");
let count = 0;

inc.addEventListener("click", function () {
  count++;
  counter.innerText = count;
});

dec.addEventListener("click", function () {
  count--;
  counter.innerText = count;
});

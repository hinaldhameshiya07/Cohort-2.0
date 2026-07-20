// Day - 43 (1) Random Color Genrator

let colorSection = document.querySelector(".sec-color");
let randomColor = document.querySelector(".random-btn");

randomColor.addEventListener("click", function () {
  let a, b, c;
  a = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  c = Math.floor(Math.random() * 256);
  console.log(a, b, c);
  colorSection.style.backgroundColor = `rgb(${a},${b},${c})`;
});

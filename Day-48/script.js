let cursor = document.querySelector(".sec-img");
let area = document.querySelector(".main")
area.addEventListener("mousemove", function (val) {
  cursor.style.left = `${val.x}px`;
  cursor.style.top = `${val.y}px`;
});
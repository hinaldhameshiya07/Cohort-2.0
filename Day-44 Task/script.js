let createEle = document.querySelector(".create-element");
let main = document.querySelector(".sec-main");

const motivationalQuotes = [
  "Believe in yourself and all that you are.",
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
  "Dream it. Wish it. Do it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Great things never come from comfort zones.",
  "Work hard in silence, let success make the noise.",
  "Do something today that your future self will thank you for.",
  "Success is what happens after you survive all your mistakes.",
  "Doubt kills more dreams than failure ever will.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes later becomes never. Do it now.",
  "It always seems impossible until it’s done.",
  "Your limitation—it’s only your imagination.",
  "Small steps every day lead to big results.",
  "Stay positive, work hard, make it happen.",
  "Failure is not the opposite of success, it’s part of success.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Focus on progress, not perfection."
];

createEle.addEventListener("click", function () {

  let randomSize = Math.floor(Math.random() * 120) + 80;
  let x = Math.random() * 90;
  let y = Math.random() * 90;

  let randomColorC1 = Math.floor(Math.random() * 256);
  let randomColorC2 = Math.floor(Math.random() * 256);
  let randomColorC3 = Math.floor(Math.random() * 256);

  let randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  let addEle = document.createElement("div");
  let addQuot = document.createElement("h4");

  addEle.style.backgroundColor = `rgb(${randomColorC1},${randomColorC2},${randomColorC3})`;
  addEle.style.left = `${x}%`;
  addEle.style.top = `${y}%`;
  addEle.classList.add("addEle");

  addQuot.innerText = `" ${randomQuote} "`;

  addEle.appendChild(addQuot);
  main.appendChild(addEle);
});
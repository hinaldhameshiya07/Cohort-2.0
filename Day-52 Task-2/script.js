const para = document.querySelector(".sec-text");
const text = para.textContent;
const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

para.addEventListener("mouseenter", () => {
  let progress = 0;
  function randomText() {
    const randomStr = text.split("").map((char, index) => {
        if (index < progress) {
          return char;
        }
        return character[Math.floor(Math.random() * character.length)];
      }).join("");
    para.textContent = randomStr;
    progress += 0.2;
  }
  setInterval(randomText, 30);
});

// optimized code...!

// const para = document.querySelector(".sec-text");
// const text = para.textContent;
// const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// para.addEventListener("mouseenter", () => {
//   let progress = 0;
//   function randomText() {
//     const randomStr = text.split("").map((char, index) => {
//         if (index < progress) {
//           return char;
//         }
//         return character[Math.floor(Math.random() * character.length)];
//       }).join("");
//     para.textContent = randomStr;
//     progress += 0.1;
//     requestAnimationFrame(randomText);
//   }
//   requestAnimationFrame(randomText);
// });

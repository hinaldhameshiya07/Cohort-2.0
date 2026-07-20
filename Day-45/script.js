let progress = document.querySelector(".progress");
let status = document.querySelector(".status");
let head = document.querySelector(".container h2");
let action = document.querySelector(".action");
action.addEventListener("click", function () {
  let counter = 0;
  action.style.pointerEvents = "none";
  let randomwTime = 50 + Math.floor(Math.random() * 50);
  console.log(`Your file will be downloaded in ${randomwTime / 10} seconds`);
  let progressor = setInterval(() => {
    counter++;
    progress.style.width = `${counter}%`;
    status.textContent = `${counter}%`;
  }, randomwTime);
  setTimeout(() => {
    clearInterval(progressor);
    head.textContent = "Download completed";
    action.textContent = "Downloaded";
    action.style.opacity = 0.5;
  }, randomwTime * 100);
});

let btnaction = document.querySelectorAll(".card-action");
btnaction.forEach(function (ele) {
  ele.addEventListener("click", function () {
    ele.textContent === "Add Friend"
      ? (ele.textContent = "Remove Friend")
      : (ele.textContent = "Add Friend");
  });
});

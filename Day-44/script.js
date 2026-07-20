let createEle = document.querySelector(".create-element");
let main = document.querySelector(".sec-main");
let automaticClick = 0;

createEle.addEventListener("click", function () {

    let randomSize = Math.floor(Math.random() * 100) + 20;
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let r = Math.random() * 360;

    let randomColorC1 = Math.floor(Math.random() * 256);
    let randomColorC2 = Math.floor(Math.random() * 256);
    let randomColorC3 = Math.floor(Math.random() * 256);

    let addEle = document.createElement("div");

    addEle.style.height = `${randomSize}px`;
    addEle.style.width = `${randomSize}px`;
    addEle.style.backgroundColor = `rgb(${randomColorC1},${randomColorC2},${randomColorC3})`;
    addEle.style.position = "absolute";
    addEle.style.left = `${x}%`;
    addEle.style.top = `${y}%`;
    addEle.style.rotate = `${r}deg`;

    main.appendChild(addEle);
});
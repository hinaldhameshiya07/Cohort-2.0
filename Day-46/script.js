let likeActBtn = document.querySelector("#like-animation");
let likeBtn = document.querySelector(".ri-heart-line");
let secImg = document.querySelector(".card-img");
secImg.addEventListener("dblclick",function(){
    likeBtn.classList.replace("ri-heart-line", "ri-heart-fill");
    likeActBtn.style.opacity = 1;
    likeActBtn.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)";
    setTimeout(function(){
        likeActBtn.style.transform = "translate(-50%,-300%) scale(1) rotate(60deg)";
    },800);
    setTimeout(function(){
        likeActBtn.style.opacity = 0;
    },1000);
    setTimeout(function(){
        likeActBtn.style.transform = "translate(-50%,-50%) scale(0) rotate(-60deg)";
    },1200);
}); 

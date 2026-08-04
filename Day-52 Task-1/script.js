const bgVideo = document.querySelector(".bg-video");
window.addEventListener("mousemove",(e)=>{
    document.documentElement.style.setProperty("--x",e.clientX+"px");
    document.documentElement.style.setProperty("--y",e.clientY+"px");
});
document.addEventListener("click",()=>{
    bgVideo.play();
    bgVideo.muted = false;
})
const reelsData = [
  {
    userName: "dev_diaries",
    userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60",
    isFollowed: true,
    caption: "How to learn web development step-by-step from scratch 📚💡 #webdev #coding #career",
    video: "./asset/video1.mp4",
    isMute: true,
    isLike: true,
    likeCount: 45200,
    commentCount: 1204,
    shareCount: 3400,
  },
  {
    userName: "api_explained",
    userProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
    isFollowed: false,
    caption: "APIs explained in under a minute! 🌐 Learn how apps communicate with each other. #api #webdev #javascript",
    video: "./asset/video2.mp4",
    isMute: true,
    isLike: false,
    likeCount: 12800,
    commentCount: 412,
    shareCount: 1200,
  },
  {
    userName: "chef_master",
    userProfile: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=60",
    isFollowed: true,
    caption: "Creamy white sauce pasta recipe that will blow your mind 🍝😋 #foodie #recipe #pasta",
    video: "./asset/video3.mp4",
    isMute: true,
    isLike: true,
    likeCount: 89500,
    commentCount: 3450,
    shareCount: 8900,
  },
  {
    userName: "beat_haven",
    userProfile: "https://images.pexels.com/photos/17822242/pexels-photo-17822242.jpeg",
    isFollowed: false,
    caption: "Music isn't just sound, it's an emotion. ❤️🎵 #musicaddict #goodvibes",
    video: "./asset/video4.mp4",
    isMute: true,
    isLike: false,
    likeCount: 5100,
    commentCount: 89,
    shareCount: 450,
  },
  {
    userName: "melody_vibes",
    userProfile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=60",
    isFollowed: true,
    caption: "Lost in the rhythm, found in the music. 🎶✨ #music #vibes #reels",
    video: "./asset/video5.mp4",
    isMute: true,
    isLike: true,
    likeCount: 34100,
    commentCount: 920,
    shareCount: 2800,
  },
  {
    userName: "meme_coder",
    userProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
    isFollowed: true,
    caption: "That one exam duo every classroom has! 💀😂 #school #funny #memes",
    video: "./asset/video6.mp4",
    isMute: true,
    isLike: true,
    likeCount: 18400,
    commentCount: 532,
    shareCount: 1500,
  },
  {
    userName: "react_wizard",
    userProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60",
    isFollowed: false,
    caption: "A React tip you should definitely know to clean up your code! ⚛️🔥 #react #javascript #devtips",
    video: "./asset/video7.mp4",
    isMute: true,
    isLike: false,
    likeCount: 62100,
    commentCount: 2100,
    shareCount: 5200,
  },
  {
    userName: "git_guru",
    userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
    isFollowed: true,
    caption: "Top 5 GitHub repos every software developer must know 🐙💻 #git #github #developer",
    video: "./asset/video8.mp4",
    isMute: true,
    isLike: true,
    likeCount: 41900,
    commentCount: 1140,
    shareCount: 4100,
  },
  {
    userName: "puppy_lover",
    userProfile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
    isFollowed: false,
    caption: "The cutest golden retriever puppy moments to brighten your day 🐶❤️ #puppy #dogs #cute",
    video: "./asset/video9.mp4",
    isMute: true,
    isLike: false,
    likeCount: 9300,
    commentCount: 310,
    shareCount: 890,
  },
  {
    userName: "meme_coder",
    userProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
    isFollowed: true,
    caption: "That one exam duo every classroom has! 💀😂 #school #funny #memes",
    video: "./asset/video10.mp4",
    isMute: true,
    isLike: true,
    likeCount: 18400,
    commentCount: 532,
    shareCount: 1500
  }
];

let reelContainer = document.querySelector(".feed-container");
function addData() {
  let sum = "";
  reelsData.forEach(function (val, idx) {
    sum += `<div class="reel-container">
          <div class="reel-media">
              <video src="${val.video}" autoplay loop ${val.isMute ? "muted" : ""}></video>
              <div class="video-overlay"></div>
          </div>

          <header class="reel-header">
              <div class="reel-header-title">
                    <h2>Reels</h2>
                </div>
                <div class="reel-head-btn-act">
                  <button class="action-btn" aria-lable="Camera">
                    <i class="ri-camera-4-line"></i>
                  </button>
                  <button id="${idx}" class="action-btn" aria-label="Muted">
                      <i class="${val.isMute ? "ri-volume-mute-line" : "ri-volume-up-line"}"></i>
                  </button>
                </div>
          </header>

          <div class="reel-actions">
              <button id="${idx}" class="action-btn" aria-label="Like">
                  <i class="${val.isLike ? "ri-heart-fill liked" : "ri-heart-line"}"></i>
                  <span>${val.likeCount}</span>
              </button>
              <button id="${idx}" class="action-btn" aria-label="Comment">
                  <i class="ri-chat-3-line"></i>
                  <span>${val.commentCount}</span>
              </button>
              <button id="${idx}" class="action-btn" aria-label="Share">
                  <i class="ri-send-plane-line"></i>
                  <span>${val.shareCount}</span>
              </button>
              <button class="action-btn" aria-label="Menu">
                  <i class="ri-more-2-line"></i>
              </button>
              <div class="action-audio-disc">
                  <img src="${val.userProfile}" alt="Audio Thumbnail">
              </div>
          </div>

          <div class="reel-footer">
              <div class="reel-user-info">
                  <div class="user-profile">
                      <img src="${val.userProfile}" alt="User Avatar">
                      <span class="username">${val.userName}</span>
                  </div>
                  <button id="${idx}" class="follow-btn ${val.isFollowed ? "followed" : ""}">${val.isFollowed ? "Following" : "Follow"}</button>
              </div>
              
              <p class="reel-caption">${val.caption}</p>

              <div class="reel-audio-info">
                  <i class="ri-music-2-fill"></i>
                  <div class="marquee">
                      <span>Original Audio - ${val.userName}</span>
                  </div>
              </div>
          </div>
      </div>`;
  });
  reelContainer.innerHTML = sum;
}

addData();

reelContainer.addEventListener("click", function (ele) {
  // Find the closest button element whether the icon or button was clicked
  const btn = ele.target.closest("button");
  if (!btn) return; // Exit if click wasn't on a button

  const id = btn.id;

  if (btn.getAttribute("aria-label") === "Like") {
    if (!reelsData[id].isLike) {
      reelsData[id].likeCount++;
      reelsData[id].isLike = true;
    } else {
      reelsData[id].likeCount--;
      reelsData[id].isLike = false;
    }
    addData();
  }
  if (btn.getAttribute("aria-label") === "Muted") {
    reelsData[id].isMute = !reelsData[id].isMute;

    const reelContainerCard = btn.closest(".reel-container");
    const videoElement = reelContainerCard.querySelector("video");
    videoElement.muted = reelsData[id].isMute;

    addData();
  }
  if (btn.classList.contains("follow-btn")) {
    if (!reelsData[id].isFollowed) {
      reelsData[id].isFollowed = true;
    } else {
      reelsData[id].isFollowed = false;
    }
    addData();
  }
  if (btn.getAttribute("aria-label") === "Comment") {
    reelsData[id].commentCount++;
    addData();
  }
  if (btn.getAttribute("aria-label") === "Share") {
    reelsData[id].shareCount++;
    addData();
  }
});

reelContainer.addEventListener("click", function (ele) {

  const mediaBox = ele.target.closest(".reel-media");
  if (!mediaBox) return;
  const video = mediaBox.querySelector("video");
  
  if (video.paused) {
    video.play();
    
  } else {
    video.pause();
  }
});
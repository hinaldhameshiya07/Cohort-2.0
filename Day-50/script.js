const reelsData = [
  {
    userName: "dev_diaries",
    userProfile:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60",
    isFollowed: true,
    caption:
      "When CSS Grid finally works on the first try! ✨ #css #webdev #frontend",
    video: "https://www.pexels.com/download/video/8051636/",
    isLike: true,
    likeCount: "45.2K",
    commentCount: "1,204",
    shareCount: "3.4K",
  },
  {
    userName: "ui_ux_ninja",
    userProfile:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
    isFollowed: false,
    caption:
      "Stop doing this in Figma! Here is a better Auto Layout spacing trick. 🎨 #uidesign #figma #ux",
    video: "https://www.pexels.com/download/video/7236874/",
    isLike: false,
    likeCount: "12.8K",
    commentCount: "412",
    shareCount: "1.2K",
  },
  {
    userName: "animation_geek",
    userProfile:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=60",
    isFollowed: true,
    caption:
      "Creating smooth 60fps scroll animations using GSAP and Lenis. 🚀 #animation #javascript #frontend",
    video: "https://www.pexels.com/download/video/6282323/",
    isLike: true,
    likeCount: "89.5K",
    commentCount: "3,450",
    shareCount: "8.9K",
  },
  {
    userName: "bug_hunter_99",
    userProfile:
      "https://images.pexels.com/photos/17822242/pexels-photo-17822242.jpeg",
    isFollowed: false,
    caption:
      "Me spending 4 hours debugging only to realize I missed a single semicolon. 🤡 #coding #programmer #humor",
    video: "https://www.pexels.com/download/video/7989667/",
    isLike: false,
    likeCount: "5.1K",
    commentCount: "89",
    shareCount: "450",
  },
  {
    userName: "threejs_master",
    userProfile:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=60",
    isFollowed: true,
    caption:
      "Building an immersive 3D interactive portfolio website with Three.js and custom shaders. 🌌 #threejs #webgl #design",
    video: "https://www.pexels.com/download/video/3627092/",
    isLike: true,
    likeCount: "34.1K",
    commentCount: "920",
    shareCount: "2.8K",
  },
  {
    userName: "fullstack_frank",
    userProfile:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
    isFollowed: true,
    caption:
      "Setting up a microservices architecture with Docker and Kubernetes. 🐳 #devops #backend #docker",
    video: "https://www.pexels.com/download/video/4167404/",
    isLike: true,
    likeCount: "18.4K",
    commentCount: "532",
    shareCount: "1.5K",
  },
  {
    userName: "tailwind_queen",
    userProfile:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60",
    isFollowed: false,
    caption:
      "Stop writing custom CSS for everything! Tailwind utility classes save so much time. ⚡ #tailwindcss #webdev",
    video: "https://www.pexels.com/download/video/29247789/",
    isLike: false,
    likeCount: "62.1K",
    commentCount: "2,100",
    shareCount: "5.2K",
  },
  {
    userName: "react_wizard",
    userProfile:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
    isFollowed: true,
    caption:
      "React 19 Server Actions make handling form submissions ridiculously easy. 🔥 #react #javascript #coding",
    video: "https://www.pexels.com/download/video/6557702/",
    isLike: true,
    likeCount: "41.9K",
    commentCount: "1,140",
    shareCount: "4.1K",
  },
  {
    userName: "git_guru",
    userProfile:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
    isFollowed: false,
    caption:
      "How to fix a corrupted Git commit history without losing your mind (or code). 🐙 #git #github #developer",
    video: "https://www.pexels.com/download/video/12896414/",
    isLike: false,
    likeCount: "9.3K",
    commentCount: "310",
    shareCount: "890",
  },
  {
    userName: "motion_designer",
    userProfile:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=60",
    isFollowed: true,
    caption:
      "Designing micro-interactions in After Effects before handing them off to development. 🎬 #motiondesign #ux #ui",
    video: "https://www.pexels.com/download/video/7191517/",
    isLike: true,
    likeCount: "74.8K",
    commentCount: "2,890",
    shareCount: "6.7K",
  },
];
let sum = "";
reelsData.forEach(function (val) {
  sum += `<div class="reel-container">
        <div class="reel-media">
            <video src="${val.video}" autoplay loop muted playsinline></video>
            <div class="video-overlay"></div>
        </div>

        <header class="reel-header">
            <h2>Reels</h2>
            <i class="ri-camera-4-line"></i>
        </header>

        <div class="reel-actions">
            <button class="action-btn" aria-label="Like">
                <i class="${val.isLike ? "ri-heart-fill liked" : "ri-heart-line"}"></i>
                <span>${val.likeCount}</span>
            </button>
            <button class="action-btn" aria-label="Comment">
                <i class="ri-chat-3-line"></i>
                <span>${val.commentCount}</span>
            </button>
            <button class="action-btn" aria-label="Share">
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
                <button class="follow-btn ${val.isFollowed ? "followed" : ""}">${val.isFollowed ? "Following" : "Follow"}</button>
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
let reelContainer = document.querySelector(".feed-container");
reelContainer.innerHTML = sum;

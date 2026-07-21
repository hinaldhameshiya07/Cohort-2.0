const users = [
  {
    username: "Emma Watson",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "Actress",
    description: "Passionate about storytelling and women's rights advocacy.",
    tags: ["acting", "activism", "film"],
  },
  {
    username: "Chris Evans",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Actor",
    description: "Known for iconic roles and a love for directing.",
    tags: ["movies", "marvel", "director"],
  },
  {
    username: "Sophia Lee",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    profession: "UI/UX Designer",
    description: "Designing clean and user-friendly digital experiences.",
    tags: ["design", "uiux", "creative"],
  },
  {
    username: "Michael Brown",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Photographer",
    description: "Capturing moments through the lens of creativity.",
    tags: ["photography", "travel", "art"],
  },
  {
    username: "Ava Martinez",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Fitness Trainer",
    description: "Helping people achieve their health and fitness goals.",
    tags: ["fitness", "health", "lifestyle"],
  },
];
let profile = document.querySelector(".section-profile");
let sum = "";
users.forEach(function (ele) {
  sum = sum + `<div class="sec-card"> 
        <img src="${ele.img}" alt="Card Image" class="card-img">
        <h3 class="card-title">${ele.username}</h3>
        <h4 class="card-job">${ele.profession}</h4>
        <p class="card-dec">${ele.description}</p>
        </div>`;
});
profile.innerHTML = sum;
// Day - 43 Random team displayer (array of objects, random, floor)

let arr = [
  {
    team: "CSK",
    primary: "#F9CD05",
    secondary: "#1D4FA3",
    fullName: "Chennai Super Kings",
    trophies: 5,
    captain: "Ruturaj Gaikwad",
  },
  {
    team: "MI",
    primary: "#004BA0",
    secondary: "#D1AB3E",
    fullName: "Mumbai Indians",
    trophies: 5,
    captain: "Hardik Pandya",
  },
  {
    team: "RCB",
    primary: "#EC1C24",
    secondary: "#000000",
    fullName: "Royal Challengers Bengaluru",
    trophies: 2,
    captain: "Rajat Patidar",
  },
  {
    team: "KKR",
    primary: "#3A225D",
    secondary: "#D4AF37",
    fullName: "Kolkata Knight Riders",
    trophies: 3,
    captain: "Ajinkya Rahane",
  },
  {
    team: "RR",
    primary: "#EA1A85",
    secondary: "#254AA5",
    fullName: "Rajasthan Royals",
    trophies: 1,
    captain: "Riyan Parag",
  },
  {
    team: "SRH",
    primary: "#F26522",
    secondary: "#000000",
    fullName: "Sunrisers Hyderabad",
    trophies: 1,
    captain: "Pat Cummins",
  },
  {
    team: "DC",
    primary: "#17479E",
    secondary: "#EF1B23",
    fullName: "Delhi Capitals",
    trophies: 0,
    captain: "Axar Patel",
  },
  {
    team: "PBKS",
    primary: "#ED1B24",
    secondary: "#D4AF37",
    fullName: "Punjab Kings",
    trophies: 0,
    captain: "Shreyas Iyer",
  },
  {
    team: "GT",
    primary: "#123498",
    secondary: "#CFAF65",
    fullName: "Gujarat Titans",
    trophies: 1,
    captain: "Shubman Gill",
  },
  {
    team: "LSG",
    primary: "#00AEEF",
    secondary: "#FF3C38",
    fullName: "Lucknow Super Giants",
    trophies: 0,
    captain: "Rishabh Pant",
  },
];

let teamCard = document.querySelector("#team-card");
let teamName = document.querySelector("#team-name");
let fullName = document.querySelector("#full-name");
let captain = document.querySelector("#captain");
let trophies = document.querySelector("#trophies");
let random = document.querySelector("#random-btn");
random.addEventListener("click", function () {
  let num = arr[Math.floor(Math.random() * arr.length)];
  teamName.textContent = num.team;
  fullName.textContent = num.fullName;
  captain.textContent = num.captain;
  trophies.textContent = num.trophies;
  teamCard.style.background = `linear-gradient(135deg, ${num.primary}, ${num.secondary})`;
});
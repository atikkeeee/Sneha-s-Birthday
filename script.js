function login() {
  const pass = document.getElementById("password").value;

  if (pass === "Snehatik") {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("homePage").classList.remove("hidden");
  } else {
    alert("Wrong Password ❤️");
  }
}

function openLetter() {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("galleryPage").classList.add("hidden");
  document.getElementById("finalPage").classList.add("hidden");
  document.getElementById("letterPage").classList.remove("hidden");
}

function finalSurprise() {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("galleryPage").classList.add("hidden");
  document.getElementById("letterPage").classList.add("hidden");
  document.getElementById("finalPage").classList.remove("hidden");
}

const photos = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg"
];

let current = 0;

function gallery() {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("letterPage").classList.add("hidden");
  document.getElementById("finalPage").classList.add("hidden");
  document.getElementById("galleryPage").classList.remove("hidden");
  document.getElementById("galleryImage").src = photos[current];
}

function backHome() {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("homePage").classList.remove("hidden");
  document.getElementById("letterPage").classList.add("hidden");
  document.getElementById("galleryPage").classList.add("hidden");
  document.getElementById("finalPage").classList.add("hidden");
}

function nextPhoto() {
  current = (current + 1) % photos.length;
  document.getElementById("galleryImage").src = photos[current];
}

function prevPhoto() {
  current = (current - 1 + photos.length) % photos.length;
  document.getElementById("galleryImage").src = photos[current];
}

setInterval(() => {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (18 + Math.random() * 25) + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}, 300);

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {
  musicBtn.onclick = function () {
    if (music.paused) {
      music.play();
      musicBtn.innerHTML = "🔊";
    } else {
      music.pause();
      musicBtn.innerHTML = "🎵";
    }
  };
  function createFireworks() {

  for(let i=0;i<80;i++){

    const fw=document.createElement("div");
    fw.className="firework";

    fw.style.left="50%";
    fw.style.top="45%";

    fw.style.background=
    ["#ff2d75","#ffd700","#00e5ff","#7cff6b","#ffffff"][Math.floor(Math.random()*5)];

    fw.style.setProperty("--x",(Math.random()*500-250)+"px");
    fw.style.setProperty("--y",(Math.random()*500-250)+"px");

    document.body.appendChild(fw);

    setTimeout(()=>{
      fw.remove();
    },1000);

  }

}

function yesAnswer(){

  document.getElementById("answer").innerHTML =
  "🥹❤️ Yay!! I Love You Forever, My Princess ❤️";

  createFireworks();

}
}
function yesAnswer() {
  document.getElementById("answer").innerHTML =
    "🥹❤️ Yay!! I Love You Forever, My Princess ❤️";
}

const noBtn = document.getElementById("noBtn");

if (noBtn) {

  function moveNoButton() {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "%";
    noBtn.style.top = Math.random() * 70 + "%";
  }

  noBtn.addEventListener("mouseenter", moveNoButton);

  noBtn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moveNoButton();
  });

      }

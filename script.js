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
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg"
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
}

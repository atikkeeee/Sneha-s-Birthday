function login() {

const pass = document.getElementById("password").value;

if(pass==="Snehatik"){

document.getElementById("loginPage").classList.add("hidden");

document.getElementById("arrowPage").classList.remove("hidden");

// Arrow → Tree
setTimeout(()=>{
document.getElementById("arrowPage").classList.add("hidden");
document.getElementById("treePage").classList.remove("hidden");
},2000);

// Tree → Cover
setTimeout(()=>{
document.getElementById("treePage").classList.add("hidden");
document.getElementById("coverPage").classList.remove("hidden");
startCountdown();
},5000);

}else{

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
}
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

function yesAnswer() {

  document.getElementById("answer").innerHTML =
    "🥹❤️ Yay!! I Love You Forever, My Princess ❤️";

  createFireworks();

  document.getElementById("giftSection").classList.remove("hidden");

}

function openGift() {

  document.getElementById("giftSection").classList.add("hidden");

  document.getElementById("downloadSection").classList.remove("hidden");

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
const canvas=document.getElementById("heartCanvas");
const ctx=canvas.getContext("2d");

function resize(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
}
resize();
window.addEventListener("resize",resize);

const particles=[];

for(let i=0;i<900;i++){

let t=Math.random()*Math.PI*2;

let x=16*Math.pow(Math.sin(t),3);

let y=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t);

particles.push({

x:x*18,
y:-y*18,
size:Math.random()*2+1

});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.save();

ctx.translate(canvas.width/2,canvas.height/2);

particles.forEach(p=>{

ctx.beginPath();

ctx.fillStyle="rgba(255,60,120,.8)";

ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

ctx.fill();

});

ctx.restore();

requestAnimationFrame(draw);

}

draw();
function startCountdown(){

let n=10;

const c=document.getElementById("countdown");
c.innerHTML = n;
const timer=setInterval(()=>{

c.innerHTML=n;

n--;

if(n<=0){

clearInterval(timer);

document.getElementById("coverPage").classList.add("hidden");

document.getElementById("cakePage").classList.remove("hidden");

setTimeout(()=>{

document.getElementById("cakePage").classList.add("hidden");

document.getElementById("homePage").classList.remove("hidden");

},5000);

}

},1000);

}

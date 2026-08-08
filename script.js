function login(){

    const pass=document.getElementById("password").value;

    if(pass==="Snehatik"){

        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("homePage").classList.remove("hidden");

    }else{

        alert("Wrong Password ❤️");

    }

}

function openLetter(){

    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("letterPage").classList.remove("hidden");

}

function finalSurprise(){

    document.getElementById("letterPage").classList.add("hidden");
    document.getElementById("finalPage").classList.remove("hidden");

}

setInterval(()=>{

    let heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*25)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

},300);
const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

musicBtn.onclick=function(){

if(music.paused){
music.play();
musicBtn.innerHTML="🔊";
}else{
music.pause();
musicBtn.innerHTML="🎵";
}

};
function createConfetti(){

for(let i=0;i<80;i++){

let c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.animationDelay=Math.random()*5+"s";

c.style.background=
["#ff2d75","#ffffff","#ffd700","#00e5ff","#7cff6b"][Math.floor(Math.random()*5)];

document.body.appendChild(c);

}

}

setTimeout(createConfetti,1000);
function gallery(){

alert("📸 Our Gallery Coming Soon ❤️");

}

function memoryBook(){

alert("📖 Our Memory Book Coming Soon ❤️");

}

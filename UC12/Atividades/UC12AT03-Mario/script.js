// Elementos Visuais
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const fundo = document.querySelector(".fundo");
const piso = document.querySelector(".piso");

// Áudios
const somjogar = ;
const sompular = ;
const somperder = ;



const pulo = () => {
    mario.classList.add("pulo3");

    setTimeout(() => {
        mario.classList.remove("pulo3");
    }, 1500); 
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    // + junto ao window serve para converter um string de número em número
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px","");
    
    console.log(pipePosition); 

    if (pipePosition <= 120 && pipePosition >0 && marioPosition < 80){
        pipe.style.animation= "none";
        pipe.style.left = `${pipePosition}px`;
        fundo.style.animation= "none";
        piso.style.animation= "none";
        clouds.style.animation= "none";
        mario.style.animation= "none";
        mario.style.bottom = `${marioPosition}px`;
        mario.src = "src/imagem/game-over-png";
        mario.style.width = "80px";
        mario.style.marginLeft = "40px";
        clearInterval(loop);
    }
}, 10); 


document.addEventListener("keydown", pulo);

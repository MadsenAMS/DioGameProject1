let somDisparo = document.getElementById("somDisparo");
let somExplosao = document.getElementById("somExplosao");
let musica = document.getElementById("musica");
let somGameover = document.getElementById("somGameover");
let somPerdido = document.getElementById("somPerdido");
let somResgate = document.getElementById("somResgate");
let isMuted = false;



function StartMusic() {
    musica.play();
    document.getElementById("mutebutton").addEventListener("click", function() { ToggleMute(); });
    ToggleMute();
    ToggleMute();
    musica.addEventListener("ended", function() {
        if (!isMuted && !isGameOver) {
            musica.currentTime = 0;
            musica.play();
        }
    }, false);
}

function TocarSomDisparo() {
    if (!isMuted) {
        somDisparo.play();
    }
}

function TocarSomResgate() {
    if (!isMuted)
        somResgate.play();
}

function TocarSomExplosao() {
    if (!isMuted)
        somExplosao.play();
}

function TocarSomAmigoMorto() {
    if (!isMuted)
        somPerdido.play();
}

function TocarFimDeJogo() {
    if (!isMuted)
        somGameover.play();
}

function ToggleMute() {
    isMuted = !isMuted;
    if (isMuted) {
        musica.pause();
        somGameover.pause();
        $("#mutebutton").css("background-image", "url(assets/imgs/unmute.png)")
    } else {
        $("#mutebutton").css("background-image", "url(assets/imgs/mute.png)")
        if (isGameOver) {
            somGameover.play();
        } else {
            musica.play();
        }
    }
}
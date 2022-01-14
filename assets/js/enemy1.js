let velocidade = 5;
let posicaoY;

function SpawnEnemy() {
    posicaoY = parseInt(Math.random() * 334);
    $("#enemy1").css("left", 694);
    $("#enemy1").css("top", posicaoY);
}

function moveenemy1() {

    posicaoX = parseInt($("#enemy1").css("left"));
    $("#enemy1").css("left", posicaoX - velocidade);

    if (posicaoX <= 0) { SpawnEnemy(); }
}
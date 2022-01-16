let chopperPositionY;
let isChopperActive = false;

function SpawnChopper() {
    if (isChopperActive) {
        isChopperActive = false;
        $("#enemy1").remove();
    }

    var spawnDelay = window.setInterval(Respawn, 4000)

    function Respawn() {
        if (!isGameOver && !isChopperActive) {
            $("#gameBackground").append("<div id='enemy1' class='anima2'></div");
            chopperPositionY = parseInt(Math.random() * 334);
            $("#enemy1").css("left", 694);
            $("#enemy1").css("top", chopperPositionY);

            window.clearInterval(spawnDelay);
            spawnDelay = null;
            isChopperActive = true;
        }
    }
}

function MoveChopper() {
    if (isChopperActive) {
        posicaoX = parseInt($("#enemy1").css("left"));
        $("#enemy1").css("left", posicaoX - 7 - (GetLevel() * 0.3));
        if (posicaoX <= 0) { SpawnChopper(); }
    }
}
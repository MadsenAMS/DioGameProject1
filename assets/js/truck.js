let isTruckActive = false;

function SpawnTruck() {
    if (isTruckActive) {
        isTruckActive = false;
        $("#enemy2").remove();
    }

    var spawnDelay = window.setInterval(Respawn, 5000)

    function Respawn() {
        if (!isGameOver && !isTruckActive) {
            $("#gameBackground").append("<div id='enemy2'></div");
            $("#enemy2").css("left", 775);

            window.clearInterval(spawnDelay);
            spawnDelay = null;
            isTruckActive = true;
        }
    }

}

function MoveTruck() {
    if (isTruckActive) {
        posicaoX = parseInt($("#enemy2").css("left"));
        $("#enemy2").css("left", posicaoX - 5 - (GetLevel() * 0.3));

        if (posicaoX <= 0) {
            SpawnTruck();
        }
    }
}

function ClearTruck() {
    isTruckActive = false;
}
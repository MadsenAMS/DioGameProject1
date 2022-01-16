let bulletLoop;
let bulletPositionX;

function fire() {
    if (canFire == true) {
        TocarSomDisparo();
        canFire = false;

        topo = parseInt($("#player").css("top"))
        bulletPositionX = parseInt($("#player").css("left"))
        tiroX = bulletPositionX + 190;
        topoTiro = topo + 37;
        $("#gameBackground").append("<div id='bullet'></div");
        $("#bullet").css("top", topoTiro);
        $("#bullet").css("left", tiroX);

        bulletLoop = window.setInterval(ExecuteFireAnimation, 30);

    }
}

function ExecuteFireAnimation() {
    bulletPositionX = parseInt($("#bullet").css("left"));
    $("#bullet").css("left", bulletPositionX + 15);

    if (bulletPositionX > 900) {
        RemoveBullet();
    }
}

function RemoveBullet() {
    window.clearInterval(bulletLoop);
    bulletLoop = null;
    $("#bullet").remove();
    canFire = true;
}
var TECLA = {
    W: 87,
    UP: 38,
    S: 83,
    DOWN: 40,
    D: 68,
    RIGHT: 39,
    SPACE: 32
}

let pressedKey = [];
let canFire = true;

function isReadyToFire() {
    return canFire;
}

function checkinput() {
    $(document).keydown(function(e) {
        pressedKey[e.which] = true;
    });

    $(document).keyup(function(e) {
        pressedKey[e.which] = false;
    });
}

function MovePlayer() {

    checkinput();

    if (pressedKey[TECLA.W] || pressedKey[TECLA.UP]) {
        var topo = parseInt($("#player").css("top"));
        if (topo <= 10) { return; }

        $("#player").css("top", topo - 10);
    }

    if (pressedKey[TECLA.S] || pressedKey[TECLA.DOWN]) {
        var topo = parseInt($("#player").css("top"));
        if (topo >= 434) { return; }
        $("#player").css("top", topo + 10);
    }

    if (pressedKey[TECLA.D] || pressedKey[TECLA.SPACE] || pressedKey[TECLA.RIGHT]) {
        if (canFire) {
            fire();
        }
    }
}
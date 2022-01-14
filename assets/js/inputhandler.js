var TECLA = {
    W: 87,
    UP: 38,
    S: 83,
    DOWN: 40,
    D: 68,
    RIGHT: 39,
    SPACE: 32
}

let pressionou = [];

function checkinput() {
    $(document).keydown(function(e) {
        pressionou[e.which] = true;
    });

    $(document).keyup(function(e) {
        pressionou[e.which] = false;
    });
}

function moveplayer() {

    checkinput();

    if (pressionou[TECLA.W] || pressionou[TECLA.UP]) {
        var topo = parseInt($("#player").css("top"));
        if (topo <= 10) { return; }

        $("#player").css("top", topo - 10);
    }

    if (pressionou[TECLA.S] || pressionou[TECLA.DOWN]) {
        var topo = parseInt($("#player").css("top"));
        if (topo >= 434) { return; }
        $("#player").css("top", topo + 10);
    }

    if (pressionou[TECLA.D] || pressionou[TECLA.SPACE] || pressionou[TECLA.RIGHT]) {

    }
}
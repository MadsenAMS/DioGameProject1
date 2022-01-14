function moveenemy2() {
    posicaoX = parseInt($("#enemy2").css("left"));
    $("#enemy2").css("left", posicaoX - 3);

    if (posicaoX <= 0) {
        $("#enemy2").css("left", 775);
    }
}
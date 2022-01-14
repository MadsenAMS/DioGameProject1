function movefriend() {

    posicaoX = parseInt($("#friend").css("left"));
    $("#friend").css("left", posicaoX + 1);

    if (posicaoX > 906) {

        $("#friend").css("left", 0);

    }

}
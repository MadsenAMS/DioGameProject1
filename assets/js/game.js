function Start() {

    $("#start").hide();

    $("#gameBackground").append("<div id='player' class='anima1'></div>");
    $("#gameBackground").append("<div id='enemy1' class='anima2'></div>");
    $("#gameBackground").append("<div id='enemy2'></div>");
    $("#gameBackground").append("<div id='friend' class='anima3'></div>");

    timer = setInterval(loop, 30);

    function movebackground() {

        esquerda = parseInt($("#gameBackground").css("background-position"));
        $("#gameBackground").css("background-position", esquerda - 1);

    }

    function loop() {
        moveplayer();
        movebackground();
        moveenemy1();
        moveenemy2();
        movefriend();
    }
}
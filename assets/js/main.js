let isGameOver;
let hitPoints;

function Start() {
    isGameOver = false;
    hitPoints = 3;
    $("#start").hide();
    $("#end").remove();

    $("#gameBackground").append("<div id='player' class='anima1'></div>");
    $("#gameBackground").append("<div id='scoreboard'></div>");
    $("#gameBackground").append("<div id='currentlevel'></div>");
    $("#gameBackground").append("<div id='energy'></div>");
    $("#gameBackground").append("<div id='mutebutton'></div>");
    LevelUp();
    StartMusic();
    UpdateEnergyBar();
    UpdateScoreBoard();
    SpawnChopper();
    SpawnTruck();

    timer = setInterval(Loop, 30);

    function MoveBackground() {

        left = parseInt($("#gameBackground").css("background-position"));
        $("#gameBackground").css("background-position", left - 1);

    }

    function Loop() {
        if (!isGameOver) {
            MovePlayer();
            MoveBackground();
            MoveChopper();
            MoveTruck();
            MoveFriend();
            Collision();
        }
    }
}

function LoseHitPoints() {
    hitPoints--;
    UpdateEnergyBar();
}

function UpdateEnergyBar() {
    switch (hitPoints) {
        case 3:
            $("#energy").css("background-image", "url(assets/imgs/energia3.png)");
            break;
        case 2:
            $("#energy").css("background-image", "url(assets/imgs/energia2.png)");
            break;
        case 1:
            $("#energy").css("background-image", "url(assets/imgs/energia1.png)");
            break;
        case 0:
            $("#energy").css("background-image", "url(assets/imgs/energia0.png)");
            EndGame();
            break;
    }
}

function EndGame() {
    TocarFimDeJogo();
    isGameOver = true;

    window.clearInterval(timer);
    timer = null;

    musica.pause();
    $("#player").remove();
    $("#enemy1").remove();
    $("#enemy2").remove();
    $("#friend").remove();
    $("#scoreboard").remove();
    $("#currentlevel").remove();
    $("#energy").remove();
    $("#mutebutton").remove();

    $("#gameBackground").append("<div id='end'></div>");

    $("#end").html("<h1> Game Over </h1><p>Your Final Score Was: " + GetTotalScore() + "</p>" + "<div id='Restart' onClick=Start()><h3>Play Again</h3></div>");
    ClearScoreboard();
}
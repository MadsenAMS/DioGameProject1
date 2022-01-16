function Collision() {
    let target = "";

    let playerCollidesWithChopper = ($("#player").collision($("#enemy1")));
    if (playerCollidesWithChopper.length > 0) {
        Explode("#player");
        LoseHitPoints();
        if (!isGameOver) SpawnChopper();
    }


    let playerCollidesWithTruck = ($("#player").collision($("#enemy2")));
    if (playerCollidesWithTruck.length > 0) {
        Explode("#player");
        LoseHitPoints();
        if (!isGameOver) SpawnTruck();
    }

    let FriendCollidesWithTruck = ($("#friend").collision($("#enemy2")));
    if (FriendCollidesWithTruck.length > 0) {
        KillFriend();
        LostFriend();
    }

    let FriendCollidesWithPlayer = ($("#friend").collision($("#player")));
    if (FriendCollidesWithPlayer.length > 0) {
        TocarSomResgate();
        ScoredFriend();
        RemoveFriend();
    }

    if (!isReadyToFire()) {
        let bulletCollidesWithChopper = ($("#bullet").collision($("#enemy1")));
        if (bulletCollidesWithChopper.length > 0) {
            Explode("#enemy1");
            SpawnChopper();
            ScoredChopper();
            RemoveBullet();
        }

        let bulletCollidesWithTruck = ($("#bullet").collision($("#enemy2")));
        if (bulletCollidesWithTruck.length > 0) {
            Explode("#enemy2");
            posX = $("#enemy2").css("left");
            SpawnFriend(posX);
            ScoredTruck();
            SpawnTruck();
            RemoveBullet();
        }
    }
}

function Explode(target) {
    if (target.length === 0) return;


    TocarSomExplosao();
    posX = parseInt($(target).css("left"));
    posY = parseInt($(target).css("top"));
    $("#gameBackground").append("<div id='explosion'></div");
    $("#explosion").css("background-image", "url(assets/imgs/explosao.png)");
    if (target == "#player") {
        $("#explosion").css("-webkit-transform", "scaleX(-1)");
        $("#explosion").css("transform", "scaleX(-1)");
    }
    var div = $("#explosion");
    div.css("top", posY);
    div.css("left", posX);
    div.animate({ width: 200, opacity: 0 }, "slow");

    var explosionTime = window.setInterval(removeExplosion, 1000);

    function removeExplosion() {

        div.remove();
        window.clearInterval(explosionTime);
        explosionTime = null;

    }

}
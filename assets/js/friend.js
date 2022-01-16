let isFriendActive = false;
let isCorpse = false;

function SpawnFriend(posX) {
    if (!isFriendActive) {
        $("#gameBackground").append("<div id='friend' class='anima3'></div>");
        $("#friend").css("left", posX);
        isFriendActive = true;
    }
}

function MoveFriend() {
    if (isFriendActive) {
        let posicaoX = parseInt($("#friend").css("left"));
        $("#friend").css("left", posicaoX - 2);

        if (posicaoX <= 1) {
            LostFriend();
            RemoveFriend();
        }
    } else if (isCorpse) {
        MoveFriendCorpse();
    }
}

function MoveFriendCorpse() {
    let posX = $("#frienddeath").css("left");
    $("#frienddeath").css("left", posX - 1);
    if (posX > 906) {
        isCorpse = false;
        $("frienddeath").remove();
    }
}

function KillFriend() {
    if (isFriendActive) {
        TocarSomAmigoMorto();
        let posX = parseInt($("#friend").css("left"));
        let posY = parseInt($("#friend").css("top"));

        $("#gameBackground").append("<div id='frienddeath' class='anima4'></div>");
        $("#frienddeath").css("top", posY);
        $("#frienddeath").css("left", posX);
        $("#friend").remove();
        isFriendActive = false;
        isCorpse = true;
        let deathDuration = window.setInterval(EndFriendDeath, 1000);

        function EndFriendDeath() {
            window.clearInterval(deathDuration);
            deathDuration = null;
            $("#frienddeath").remove();
            isCorpse = false;
        }
    }
}

function RemoveFriend() {
    $("#friend").remove();
    isFriendActive = false;
}
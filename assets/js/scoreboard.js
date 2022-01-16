let totalScore = 0;
let friendsSaved = 0;
let friendsLost = 0;
let choppersDown = 0;
let trucksDown = 0;
let gameLevel = 0;

function ScoredTruck() {
    totalScore += 25;
    trucksDown++;
    UpdateScoreBoard()
}

function ScoredChopper() {
    totalScore += 50;
    choppersDown++;
    UpdateScoreBoard()
}

function ScoredFriend() {
    totalScore += 100;
    friendsSaved++;
    UpdateScoreBoard()
}

function LostFriend() {
    totalScore -= 50;
    friendsLost++;
    UpdateScoreBoard()
}

function UpdateScoreBoard() {
    let _targetScore = (GetLevel() ** 2) * 100;
    if (totalScore > _targetScore) LevelUp();
    $("#scoreboard").html("<h2>Total Score: " + totalScore + "<br>Choppers Down: " + choppersDown + "&emsp;&emsp;Trucks Down: " + trucksDown + "<br>Friends Saved: " + friendsSaved + "&emsp;&emsp;Friends Lost: " + friendsLost + "</h2>");
}

function GetTotalScore() {
    return totalScore;
}


function GetLevel() {
    return gameLevel;
}

function LevelUp() {
    gameLevel++;
    TocarLevelUp();
    let _nextLevel = (GetLevel() ** 2) * 100;
    $("#currentlevel").html("<h2>Level: " + GetLevel() + "<br>Next Level: " + _nextLevel + "</h2>");

    $("#gameBackground").append("<div id='levelup'>Level " + GetLevel() + "</div>");

    var displayLevelUpBanner = window.setInterval(LevelUpBanner, 2000)

    function LevelUpBanner() {

        window.clearInterval(displayLevelUpBanner);
        displayLevelUpBanner = null;
        $("#levelup").remove();
    }
}

function ClearScoreboard() {
    totalScore = 0;
    friendsSaved = 0;
    friendsLost = 0;
    choppersDown = 0;
    trucksDown = 0;
    gameLevel = 0;
}
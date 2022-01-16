let totalScore = 0;
let friendsSaved = 0;
let friendsLost = 0;
let choppersDown = 0;
let trucksDown = 0;

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

function ClearScoreboard() {
    totalScore = 0;
    friendsSaved = 0;
    friendsLost = 0;
    choppersDown = 0;
    trucksDown = 0;
}
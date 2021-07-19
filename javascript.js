var playing = false;
var score;
var action;

document.getElementById("startreset").onclick = function () {
    if (playing == true) {
        location.reload();
    } else {
        playing = true;
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;
        document.getElementById("startreset").innerHTML = "Reset Game";
        show("timeremaining");
        timeremaining = 60;
        startCountdown();
        hide("gameOver");
    }
}


function startCountdown() {
    action = setInterval(
        function () {
            timeremaining -= 1;
            document.getElementById("timeremainingvalue").innerHTML = timeremaining;
            if (timeremaining == 0) {
                stopCountdown();
                show("gameOver");
                document.getElementById("gameOver").innerHTML = "<p>game over!</p><p>your score is " + score + "</p>"
                hide("timeremaining");
                hide("wrong");
                hide("correct");
                playing = false;
                document.getElementById("startreset").innerHTML = "Start Game";
            }
        }, 1000);

}

function stopCountdown() {
    clearInterval(action);
}
function show(id) {
    document.getElementById(id).style.display = "block";
}
function hide(id) {
    document.getElementById(id).style.display = "none";
}
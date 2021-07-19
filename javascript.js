var playing = false;
var score;
var action;
var correctAnswer;

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
        generateQA();
    }
}

for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick = function () {
        if (playing == true) {
            if (this.innerHTML == correctAnswer) {
                score++;
                document.getElementById("scoreValue").innerHTML = score;
                hide("wrong");
                show("correct");
                setTimeout(function () {
                    hide("correct");
                }, 1000);
                generateQA();
            } else {
                hide("correct");
                show("wrong");
                setTimeout(function () {
                    hide("wrong");
                }, 1000);
            }
        }
    };
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
function generateQA() {
    var x = 1 + Math.round(10 * Math.random());
    var y = 1 + Math.round(100 * Math.random());
    correctAnswer = x * y;

    document.getElementById("question").innerHTML = x + "X" + y;
    var correctPosition = 1 + Math.round(3 * Math.random());
    document.getElementById("box" + correctPosition).innerHTML = correctAnswer;

    var answers = [correctAnswer];

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wronganswer;
            do {
                wronganswer = (1 + Math.round(10 * Math.random())) * (1 + Math.round(100 * Math.random()));
                document.getElementById("box" + i).innerHTML = wronganswer;
            } while (answers.indexOf(wronganswer) > -1);
        }
    }
}
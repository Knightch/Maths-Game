var playing = false;
var score;

document.getElementById("startreset").onclick = function () {
    if (playing == true) {
        location.reload();
    } else {
        playing = true;
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;
        document.getElementById("startreset").innerHTML = "Reset Game";
        document.getElementById("timeremaining").style.display = "block";
    }
}
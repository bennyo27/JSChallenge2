window.onload = function() {

    var p1Button = document.querySelector("#p1");
    var p2Button = document.querySelector("#p2");
    var reset = document.querySelector("#reset");
    var p1Score = document.querySelector("#p1Score");
    var p2Score = document.querySelector("#p2Score");
    var numInput = document.querySelector("input");
    var scoreLimit = document.querySelector("p span");

    var p1Count = 0;
    var p2Count = 0;
    var winScore = 7;
    var gameOver = false;

    reset.addEventListener("click", function() {
        resetPoints();
    })

    p1Button.addEventListener("click", function() {
        if (!gameOver) {
            p1Count++;
            if (p1Count === winScore) {
                gameOver = true;
                p1Score.classList.add("win");
            }
            p1Score.textContent = p1Count;
        }
    });

    p2Button.addEventListener("click", function() {
        if (!gameOver) {
            p2Count++;
            if (p2Count === winScore) {
                gameOver = true;
                p2Score.classList.add("win");
            }
            p2Score.textContent = p2Count;
        }
    });

    function resetPoints() {
        p1Count = 0;
        p2Count = 0;
        p1Score.textContent = 0;
        p2Score.textContent = 0;
        p1Score.classList.remove("win");
        p2Score.classList.remove("win");
        gameOver = false;
    }

    numInput.addEventListener("change", function() {
        if (Number(numInput.value) <= 0 || Number(numInput.value) > 10) {
            scoreLimit.textContent = "7";
            numInput.value = "";
            winScore = 7;
        }
        else {
            winScore = Number(numInput.value);
            scoreLimit.textContent = numInput.value;
            resetPoints();
        }
    })
}

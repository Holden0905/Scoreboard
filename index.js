// Function to update the score
function updateScore(team, points) {
    let scoreElement = document.getElementById(`${team}-score`);
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + points;
}

// Function to reset the game
function resetGame() {
    document.getElementById("home-score").textContent = "0";
    document.getElementById("guest-score").textContent = "0";
}

// Function to check orientation and adjust visibility
function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        // Portrait mode
        document.querySelector(".rotate-message").style.display = "block";
        document.querySelector(".scoreboard").style.display = "none";
        document.querySelector(".reset-container").style.display = "none";
    } else {
        // Landscape mode
        document.querySelector(".rotate-message").style.display = "none";
        document.querySelector(".scoreboard").style.display = "flex";
        document.querySelector(".reset-container").style.display = "flex";
    }
}

// Listen for orientation changes
window.addEventListener("resize", checkOrientation);
window.addEventListener("load", checkOrientation);

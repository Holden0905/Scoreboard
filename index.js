// Initialize scores
let homeScore = 0;
let guestScore = 0;

// Get the score elements
const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");
const resetButton = document.getElementById("reset-button");

// Functions to update the score
function updateScore(team, points) {
    if (team === "home") {
        homeScore += points;
        homeScoreEl.textContent = homeScore;
    } else if (team === "guest") {
        guestScore += points;
        guestScoreEl.textContent = guestScore;
    }
}

// Reset function
function resetGame() {
    console.log("Reset button clicked"); // Debugging
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}

// Add event listeners for score buttons
document.getElementById("home-plus-1").addEventListener("click", () => updateScore("home", 1));
document.getElementById("home-plus-2").addEventListener("click", () => updateScore("home", 2));
document.getElementById("home-plus-3").addEventListener("click", () => updateScore("home", 3));

document.getElementById("guest-plus-1").addEventListener("click", () => updateScore("guest", 1));
document.getElementById("guest-plus-2").addEventListener("click", () => updateScore("guest", 2));
document.getElementById("guest-plus-3").addEventListener("click", () => updateScore("guest", 3));

// Add event listener for the reset button
resetButton.addEventListener("click", resetGame);
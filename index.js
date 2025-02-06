// Initialize Scores
let homeScore = 0;
let guestScore = 0;

// Function to Update Score
function updateScore(team, points) {
    if (team === "home") {
        homeScore += points;
        document.getElementById("home-score").textContent = homeScore;
    } else if (team === "guest") {
        guestScore += points;
        document.getElementById("guest-score").textContent = guestScore;
    }
}

// Function to Reset Scores
function resetScores() {
    homeScore = 0;
    guestScore = 0;
    document.getElementById("home-score").textContent = homeScore;
    document.getElementById("guest-score").textContent = guestScore;
}

// Function to Check Orientation
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
        
        // Ensure scoreboard fits properly
        document.body.style.paddingTop = "10px"; 
    }
}

// Listen for Orientation Changes
window.addEventListener("resize", checkOrientation);
window.addEventListener("load", checkOrientation);

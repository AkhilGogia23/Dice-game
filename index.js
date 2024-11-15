// Function to generate a random dice number
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to set the dice image based on the rolled number
function setDiceImage(player, randomNumber) {
    const diceImage = "dice" + randomNumber + ".png";
    const diceSource = "images/" + diceImage;
    player.querySelector("img").setAttribute("src", diceSource);
}

// Function to animate the dice roll
function rollAnimation(player) {
    const diceImage = player.querySelector("img");
    diceImage.classList.add("rolling");
    setTimeout(() => {
        diceImage.classList.remove("rolling");
    }, 1000);
}

// Function to determine the winner
function determineWinner(player1Roll, player2Roll) {
    const resultElement = document.querySelector(".result");
    if (player1Roll > player2Roll) {
        resultElement.textContent = "Player 1 Wins!";
    } else if (player2Roll > player1Roll) {
        resultElement.textContent = "Player 2 Wins!";
    } else {
        resultElement.textContent = "It's a Tie!";
    }
}

// Add event listener to the roll button
document.querySelector(".roll-button").addEventListener("click", function () {
    const player1Roll = rollDice();
    const player2Roll = rollDice();

    const player1 = document.querySelectorAll(".dice")[0];
    const player2 = document.querySelectorAll(".dice")[1];

    // Animate and set images for both players
    rollAnimation(player1);
    rollAnimation(player2);

    setTimeout(() => {
        setDiceImage(player1, player1Roll);
        setDiceImage(player2, player2Roll);

        // Determine winner
        determineWinner(player1Roll, player2Roll);
    }, 1000);  // Delay for animation
});

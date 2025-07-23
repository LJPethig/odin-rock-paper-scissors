let humanScore = 0;
let computerScore = 0;
const ROUNDS = 5; /* Number of game rounds */

function computerChoice() {
    return "ROCK";
}

function humanChoice() {
    return "SCISSORS";
}

function roundWinner(hChoice, cChoice) {
    if (cChoice === hChoice) {
        roundDraw();
    } else if (cChoice === "ROCK" && hChoice === "PAPER") {
        humanWin();
    } else if (cChoice === "PAPER" && hChoice === "SCISSORS") {
        humanWin();
    } else if (cChoice === "SCISSORS" && hChoice === "ROCK") {
        humanWin();
    } else {
        computerWin();
    }
    console.log(hChoice, cChoice);
}

function roundDraw() {
    return console.log("This round is a draw!");
}

function computerWin() {
    computerScore ++;
    return console.log("The computer won this round!");
}

function humanWin() {
    humanScore ++;
    return console.log("You won this round!");
}

function playRound(roundNumber) {
    console.log(`Round ${roundNumber}`);
    roundWinner(humanChoice(), computerChoice())
}

function gameWinner() {
    if (humanScore === computerScore) {
        return "Game Over, It's a draw";
    } else if (humanScore > computerScore) {
        return "Game Over, You won";
    } else if (computerScore > humanScore) {
        return"Game Over, You lost";
    }
}

function playGame() {
    for (let i=1; i<=ROUNDS; i++) {
        playRound(i);
    }
    console.log(humanScore, computerScore);
    console.log(gameWinner());
}

console.log("Welcome to Rock, Paper, Scissors Game");
playGame();


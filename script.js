let humanScore;
let computerScore;
const ROUNDS = 5; /* Number of game rounds */

function computerChoice() {

}

function humanChoice() {

}

function playRound(roundNumber) {
    console.log(`Round ${roundNumber}`);
}

function playGame() {
    for (let i=1; i<=ROUNDS; i++) {
        playRound(i);
    }
}

console.log("Welcome to Rock, Paper, Scissors Game");
playGame();


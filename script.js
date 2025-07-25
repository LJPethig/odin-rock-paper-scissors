let humanScore;
let computerScore;
const ROUNDS = 5; /* Number of game rounds */

function computerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return "ROCK";
    } else if (num === 2) {
        return "PAPER";
    } else if (num === 3) {
        return "SCISSORS";
    }
}

function humanChoice() {
    return "ROCK";
}

function roundWinner(humanChoice, computerChoice) {
    let result;
    if (computerChoice === humanChoice) {
        result = "this round is a draw!";
    }
    else if (computerChoice === "ROCK" && humanChoice === "PAPER" ||
             computerChoice === "PAPER" && humanChoice === "SCISSORS" ||
             computerChoice === "SCISSORS" && humanChoice === "ROCK") {
        result = "you win this round!";
        humanScore ++;
    } else {
        result = "computer wins this round!";
        computerScore ++;
    }
    return roundResult(humanChoice, computerChoice, result)
}

function roundResult(humanChoice, computerChoice, result) {
    return `Computer choose ${computerChoice}, you choose ${humanChoice} ${result}`;
}

function playRound(roundNumber) {
    console.log(`Round ${roundNumber}`);
    console.log(roundWinner(humanChoice(), computerChoice()));
}

function gameWinner() {
    let message = `You won ${humanScore} rounds, computer won ${computerScore} rounds`;
    if (humanScore === computerScore) {
        return `${message}\nGame Over, It's a draw!`;
    } else if (humanScore > computerScore) {
        return `${message}\nGame Over, You won!`;
    } else if (computerScore > humanScore) {
        return `${message}\nGame Over, You lost!`;
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let i=1; i<=ROUNDS; i++) {
        playRound(i);
    }

    console.log(gameWinner());
}

console.log("Welcome to Rock, Paper, Scissors Game");
playGame();


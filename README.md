# odin-rock-paper-scissors

First Javascript project

# Pseudocode structure

* Global variables
    - DECLARE humanScore: INTEGER
    - DECLARE computerScore: INTEGER
    - DECLARE ROUNDS: INTEGER

* Get human choice
    - FUNCTION: getHumanChoice
    - DECLARE humanChoice: STRING
    - INPUT humanChoice
    - VALIDATE is humanChoice rock, paper or scissors
    - IF NOT THEN INPUT humanChoice
    - RETURN: humanChoice

* Get computer choice
    - FUNCTION: getComputerChoice
    - DECLARE computerChoice: STRING
    - DECLARE randomNumber: INTEGER
    - CALCULATE randomNumber: 1 to 3
    - CASE OF randomNumber
        - 1: computerChoice <- "ROCK"
        - 2: computerChoice <- "PAPER"
        - 3: computerChoice <- "SCISSORS"
    - RETURN: computerChoice

* Compare the two choices to determine winner of round
    - FUNCTION: playRound
    - IF computerChoice == humanChoice
        - draw
    ELSEIF computerChoice == "ROCK" and humanChoice == "PAPER"
        - human wins round
        - humanScore <- + 1
    ELSEIF computerChoice =="PAPER" and humanChoice == "SCISSORS"
        - human wins round
        - humanScore <- + 1
    ELSEIF computerChoice =="SCISSORS" and humanChoice == "ROCK"
        - human wins round
        - humanScore <- + 1
    ELSE
        - computer wins round
        - computerScore + 1

* Repeat game for a total of five rounds
    - FUNCTION: playGame
    - CALL: playRound ROUNDS times

* Declare winner after five rounds
    - FUNCTION: gameWinner
    - IF playerScore == computerScore
        - OUTPUT "The game is a Draw"
    - ELSE IF player > computerScore
        - OUTPUT "You Won!"
    - ELSE
        - OUTPUT "You lost!"


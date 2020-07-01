let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");
const reset_button = document.createElement("button");
reset_button.innerHTML = "Reset";
reset_button.addEventListener("click", () => {
    addOptions();
    playerScore = 0;
    computerScore = 0;
    playerScore_span.innerHTML = playerScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = "Make a selection";
});

function computerPlay() {        
    let computerChoice = ["rock","paper","scissors"];
    let computerPick = computerChoice[Math.floor(Math.random() * computerChoice.length)]
    return computerPick;
}

function win(playerSelection, computerSelection) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${playerSelection} beats ${computerSelection}. You win!`;
    checkForEnd();
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${computerSelection} beats ${playerSelection}. You lose!`;
    checkForEnd();
}

function draw() {
    result_p.innerHTML = `It's a tie!`;
    checkForEnd();
}
function game(playerSelection) {
    const computerSelection = computerPlay();
    if (computerSelection === playerSelection) {
        console.log ("It's a tie!");
        draw(playerSelection, computerSelection);
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        console.log ("You lose! Rock beats scissors!");
        lose(playerSelection, computerSelection);
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        console.log ("You lose! Paper beats rock!");
        lose(playerSelection, computerSelection);
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        console.log ("You lose! Scissors beats paper!");
        lose(playerSelection, computerSelection);
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        console.log ("You win! Paper beats rock!");
        win(playerSelection, computerSelection);
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        console.log ("You win! Scissors beats paper!");
        win(playerSelection, computerSelection);
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        console.log ("You win! Rock beats scissors!");
        win(playerSelection, computerSelection);
    } else {
        console.log("Please enter a valid choice")
    }
}

function main() {
    rock_button.addEventListener("click", () => game("rock"));
    paper_button.addEventListener("click", () => game("paper"));
    scissors_button.addEventListener("click", () => game("scissors"));

}

function checkForEnd() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) { 
            result_p.innerHTML = `You win! You beat the computer by ${playerScore-computerScore}`;
            removeOptions();
        } else {
            result_p.innerHTML = `You lose! You lost by ${computerScore-playerScore}`;
            removeOptions();
        }      
    }
}
function removeOptions() {
    document.getElementById("player-input").removeChild(rock_button);
    document.getElementById("player-input").removeChild(paper_button);
    document.getElementById("player-input").removeChild(scissors_button);
    document.getElementById("player-input").appendChild(reset_button);
  }
  
  function addOptions() {
    document.getElementById("player-input").appendChild(rock_button);
    document.getElementById("player-input").appendChild(paper_button);
    document.getElementById("player-input").appendChild(scissors_button);
    document.getElementById("player-input").removeChild(reset_button);
  }
main();

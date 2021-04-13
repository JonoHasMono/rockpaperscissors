let playerChoice = "";
let computerChoice = "";
function computerPlay() {
    let randomNum = Math.ceil(Math.random() * 3)
    if(randomNum == 1) {
        computerChoice = "Rock"
        return "Rock";
    } else if(randomNum == 2) {
        computerChoice = "Paper"
        return "Paper";
    } else {
        computerChoice = "Scissors"
        return "Scissors";
    }
}


function singleGame() {
    computerPlay();
    alert("Computer chose: " + computerChoice);
    alert("You chose: " + playerChoice);
    if(playerChoice == computerChoice) {
        alert("You guys tied? Lame.");
        computerChoice = "";
    } else {
        alert("Nice");
        computerChoice = "";

    }
    playerChoice = "";
}


function rockClicked() {
    playerChoice = "Rock";
    singleGame();
}

function paperClicked() {
    playerChoice = "Paper";
    singleGame();
}

function scissorsClicked() {
    playerChoice = "Scissors";
    singleGame();
}
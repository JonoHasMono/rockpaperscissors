let playerChoice = "";
let computerChoice = "";
function computerPlay() {
    let randomNum = Math.ceil(Math.random() * 3);
    if(randomNum == 1) {
        let computerChoice = "Rock"
    } else if(randomNum == 2) {
        let computerChoice = "Paper"
    } else {
        let computerChoice = "Scissors"
    }
}


function singleGame() {
    computerPlay();
    alert("Computer chose: " + computerChoice);
    if(playerChoice == computerChoice) {
        alert("You guys tied? Lame.");
        computerChoice = "";
    } else {
        alert("Nice");
        computerChoice = "";
    }
}


function rockClicked() {
    playerChoice = "Rock";
    singleGame();
}

function paperClicked() {
    playerChoice = "Paper";
    singleGame();
}
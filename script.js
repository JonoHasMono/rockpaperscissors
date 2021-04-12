let playerChoice = "";
let computerChoice = "";
function computerPlay() {
    let randomNum = Math.ceil(Math.random()*3);
    if(randomNum == 1){
        computerChoice = "Rock";
    } else if(randomnum == 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
}


function singleGame() {
    alert("Computer chose: " + computerChoice);
    if(playerChoice == computerChoice) {
        alert("You guys tied? Lame.");
    } else {
        alert("Nice");
    }
}


function rockClicked() {
    playerChoice = "Rock";
    singleGame();
}

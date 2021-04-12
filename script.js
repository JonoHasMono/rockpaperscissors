const choices = ["rock", "paper", "scissors"];
const questionPlayer = `Rock, paper, or scissors?`;

function singleGame(playerChoice, computerChoice) {
    let playerChoice = ""
    let computerChoice = Math.floor(Math.random() * choices.length);
}

//let playerAnswer = prompt(questionPlayer);


function rockClicked() {
    playerChoice = "Rock"
    alert("You chose: Rock.")
}



    // Causes the computer to make a random choice
    function computerPlay() {
        const randomChoice = Math.floor(Math.random() * choices.length);
    
       alert(choices[randomChoice]);
    }

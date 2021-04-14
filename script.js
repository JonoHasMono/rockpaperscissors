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
    if(playerChoice == "Glock") {
        document.getElementById("demo").innerHTML = glockOutcomes();
    } else if(playerChoice == "Rock") {
        document.getElementById("demo").innerHTML =  rockOutcomes();
    } else if(playerChoice == "Paper") {
        document.getElementById("demo").innerHTML =  paperOutcomes();
    } else {
        document.getElementById("demo").innerHTML = scissorsOutcomes();
    }
}

function rockOutcomes() {
    if(computerChoice == "Rock") {
        
        
        
    return "Opponent chose Rock, you tied";
    } else if(computerChoice == "Paper") {
        
    return "Opponent chose Paper, you lost";
    } else {
        
    return "Opponent chose Scissors, you won";
    }
    computerChoice = ""
    playerChoice = ""
}

function paperOutcomes() {
    if(computerChoice == "Paper") {
        
    return "Opponent chose Paper, you tied";
    } else if(computerChoice == "Scissors") {
        
    return "Opponent chose Scissors, you lost";
    } else {
        
    return "Opponent chose Rock, you won";
    }
    computerChoice = ""
    playerChoice = ""
}

function scissorsOutcomes() {
    if(computerChoice == "Scissors") {
        
    return "Opponent chose Scissors, you tied";
    } else if(computerChoice == "Rock") {
        
    return "Opponent chose Rock, you lost";
    } else {
        
    return "Opponent chose Paper, you won";
    }
    computerChoice = ""
    playerChoice = ""
}

function glockOutcomes() {
    return "You shot your opponent 8 times, you won";
    computerChoice = ""
    playerChoice = ""
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

function glockClicked() {
    playerChoice = "Glock"
    singleGame();
}
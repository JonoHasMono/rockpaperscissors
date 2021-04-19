let playerChoice = "";
let computerChoice = "";
let score = 0
let bonusPoints = 1
let bonusChance = 0.25
let upgradeOneCount = 1
let upgradeTwoCount = 1
let itemOneCost = Math.floor(250 * (2 ** upgradeOneCount) * 0.1)
let itemTwoCost = Math.floor(250 * (3 ** upgradeTwoCount) * 0.1)

showUpgrades();


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

function showUpgrades() {
    document.getElementById("itemOnePrice").innerHTML = upgradeOneCost();
    document.getElementById("itemTwoPrice").innerHTML = upgradeTwoCost();
}

function upgradeOneCost() {
    return "Price: " + itemOneCost;
}

function upgradeTwoCost() {
    return "Price: " + itemTwoCost;
}

function bonusChanceRoll() {
    let randomBonus = Math.random()
    if(bonusChance > randomBonus) {
        document.getElementById("score").innerHTML = freePoint();
        document.getElementById("freePoint").innerHTML = freePointText();
    } else {
        document.getElementById("freePoint").innerHTML = "";
    }
}

function freePoint() {
    return score = score + bonusPoints
}

function freePointText() {
    return "Lucky!";
}

function singleGame() {
    computerPlay();
    bonusChanceRoll();

    if(playerChoice == "Glock") {
        document.getElementById("demo").innerHTML = glockOutcomes();
        document.getElementById("score").innerHTML = glockScores();
    } else if(playerChoice == "Rock") {
        document.getElementById("demo").innerHTML =  rockOutcomes();
        document.getElementById("score").innerHTML = rockScores();
    } else if(playerChoice == "Paper") {
        document.getElementById("demo").innerHTML =  paperOutcomes();
        document.getElementById("score").innerHTML = paperScores();
    } else {
        document.getElementById("demo").innerHTML = scissorsOutcomes();
        document.getElementById("score").innerHTML = scissorsScores();
    }
}

function rockOutcomes() {
    if(computerChoice == "Rock") {
    return "You tied ";
    } else if(computerChoice == "Paper") {
    return "You lost";
    } else {
    return "You won";
    }
    computerChoice = ""
    playerChoice = ""
}

function rockScores() {
    if(computerChoice == "Rock") {
    return score + 0;
    } else if(computerChoice == "Paper") {
        if(score == 0) {
            return score = score + 0;
             } else if(score < 0) {
                 return score = score * 0;
             }
    return score = score - 1;
    } else {
    return score = score + bonusPoints;
    }
}

function paperOutcomes() {
    if(computerChoice == "Paper") {
        
    return "You tied";
    } else if(computerChoice == "Scissors") {
        
    return "You lost";
    } else {
        
    return "You won";
    }
    computerChoice = ""
    playerChoice = ""
}

function paperScores() {
    if(computerChoice == "Paper") {
    return score + 0;
    } else if(computerChoice == "Scissors") {
        if(score == 0) {
            return score = score + 0;
             } else if(score < 0) {
                 return score = score * 0;
             }
    return score = score - 1;
    } else {
    return score = score + bonusPoints;
    }
}

function scissorsOutcomes() {
    if(computerChoice == "Scissors") {
    return "You tied";
    } else if(computerChoice == "Rock") {
        
    return "You lost";
    } else {
        
    return "You won";
    }
    computerChoice = ""
    playerChoice = ""
}

function scissorsScores() {
    if(computerChoice == "Scissors") {
    return score + 0;
    } else if(computerChoice == "Rock") {
        if(score == 0) {
            return score = score + 0;
             } else if(score < 0) {
                 return score = score * 0;
             }
    return score = score - 1;
    } else {
    return score = score + bonusPoints;
    }
}

function glockOutcomes() {
    return "You shot your opponent 8 times, you won";
    computerChoice = ""
    playerChoice = ""
}

function glockScores() {
    return score = score + 5;
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
    playerChoice = "Glock";
    singleGame();
}

function youreBroke() {
    document.getElementById("broke").innerHTML = `Sorry you're broke`;
}

function youreBrokeClear() {
    document.getElementById("broke").innerHTML = `e`;
}

function upgradeOne() {
    if(score >= itemOneCost) {
        bonusChance += 0.05;
        score = score - itemOneCost;
        upgradeOneCount = upgradeOneCount + 1;
        itemOneCost = Math.floor(250 * (2 ** upgradeOneCount) * 0.1)
        document.getElementById("score").innerHTML = score;
        document.getElementById("itemOnePrice").innerHTML = "Price: " + itemOneCost;
    } else {
        alert("You're broke");
    }
}

function upgradeTwo() {
    if(score >= itemTwoCost) {
        bonusPoints += 1;
        score = score - itemTwoCost;
        upgradeTwoCount = upgradeTwoCount + 1;
        itemTwoCost = Math.floor(250 * (3 ** upgradeTwoCount) * 0.1)
        document.getElementById("score").innerHTML = score;
        document.getElementById("itemTwoPrice").innerHTML = "Price: " + itemTwoCost;
    } else {
        alert("You're broke");
    }
}
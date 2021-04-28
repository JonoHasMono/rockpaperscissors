let playerChoice = "";
let computerChoice = "";
let score = 0;

let bonusPoints = 1;
let bonusChance = 0.25;

let upgradeOneCount = 1;
let upgradeTwoCount = 1;
let upgradeThreeCount = 1;
let upgradeFourCount = 1;
let upgradeFiveCount = 1;
let upgradeSixCount = 1;

let itemOneCost = Math.floor(100 * (2 ** upgradeOneCount) * 0.1);
let itemTwoCost = Math.floor(50 * (3 ** upgradeTwoCount) * 0.1);
let itemThreeCost = Math.floor(100 * (2 ** upgradeThreeCount) * 0.2);
let itemFourCost = Math.floor(100 * (2 ** upgradeFourCount) * 0.2);
let itemFiveCost = Math.floor(100 * (2 ** upgradeFiveCount) * 0.2);
let itemSixCost = 10000;

let upgradeSixDelay = 100;

const body = document.getElementById("#body");

document.addEventListener('keyup', logKey);

function logKey(e) {
    let key = ` ${e.code}`
    key = key.toString();
    if (key == ' KeyQ') {
        rockClicked();
      } else if (key == ' KeyW') {
          paperClicked();
      } else if (key == ' KeyE') {
          scissorsClicked();
      }
}

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
    document.getElementById("itemThreePrice").innerHTML = upgradeThreeCost();
    document.getElementById("itemFourPrice").innerHTML = upgradeFourCost();
    document.getElementById("itemFivePrice").innerHTML = upgradeFiveCost();
    document.getElementById("itemSixPrice").innerHTML = upgradeSixCost();
}

function upgradeOneCost() {
    return "Price: " + itemOneCost;
}

function upgradeTwoCost() {
    return "Price: " + itemTwoCost;
}

function upgradeThreeCost() {
    return "Price: " + itemThreeCost;
}

function upgradeFourCost() {
    return "Price: " + itemFourCost;
}

function upgradeFiveCost() {
    return "Price: " + itemFiveCost;
}

function upgradeSixCost() {
    return "Price: " + itemSixCost;
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
    setTimeout(() => {document.getElementById("freePoint").innerHTML = ""}, 1000);
    return "Lucky!";
}

function singleGame() {
    computerPlay();
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

    document.getElementById("score").innerHTML = scoreCommas();
}

function rockOutcomes() {
    if(computerChoice == "Rock") {
    return "You tied ";
    } else if(computerChoice == "Paper") {
    return "You lost";
    } else {
    bonusChanceRoll();
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
    return score = score + bonusPoints + (upgradeThreeCount - 1);
    }
}

function paperOutcomes() {
    if(computerChoice == "Paper") {
        
    return "You tied";
    } else if(computerChoice == "Scissors") {
        
    return "You lost";
    } else {
    bonusChanceRoll();
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
    bonusChanceRoll();
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
    return score = score + 500000;
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
    let brokeValue = Math.ceil(Math.random() * 3);
    if(brokeValue == 1) {
        document.getElementById("broke").innerHTML = "Sorry you're broke";
        setTimeout(() => {document.getElementById("broke").innerHTML = ""}, 1000);
    } else if(brokeValue == 2) {
        document.getElementById("broke").innerHTML = "Haha no money";
        setTimeout(() => {document.getElementById("broke").innerHTML = ""}, 1000);
    } else {
        document.getElementById("broke").innerHTML = "Stop it.";
        setTimeout(() => {document.getElementById("broke").innerHTML = ""}, 1000);
    }
}

function scoreCommas() {
    return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function upgradeOne() {
    if(score >= itemOneCost) {
        bonusChance += 0.05;
        score = score - itemOneCost;
        upgradeOneCount = upgradeOneCount + 1;
        itemOneCost = Math.floor(100 * (2 ** upgradeOneCount) * 0.1);
        document.getElementById("score").innerHTML = score;
        document.getElementById("itemOnePrice").innerHTML = "Price: " + itemOneCost;
        document.getElementById("score").innerHTML = scoreCommas();
        upgradeOneLock();
    } else {
        youreBroke();
    }
}

function upgradeTwo() {
    if(score >= itemTwoCost) {
        bonusPoints += bonusPoints;
        score = score - itemTwoCost;
        upgradeTwoCount = upgradeTwoCount + 1;
        itemTwoCost = Math.floor(50 * (3 ** upgradeTwoCount) * 0.1);
        document.getElementById("score").innerHTML = score;
        document.getElementById("itemTwoPrice").innerHTML = "Price: " + itemTwoCost;
        document.getElementById("score").innerHTML = scoreCommas();
    } else {
        youreBroke();
    }
}

function upgradeThree() {
    if(score >= itemThreeCost) {
        score = score - itemThreeCost;
        upgradeThreeCount = upgradeThreeCount + 1;
        itemThreeCost = Math.floor(100 * (2 ** upgradeThreeCount) * 0.2);
        document.getElementById("score").innerHTML = score;
        document.getElementById("itemThreePrice").innerHTML = "Price: " + itemThreeCost;
        document.getElementById("score").innerHTML = scoreCommas();
    } else {
        youreBroke();
    }
}

function upgradeFour() {
    if(score >= itemFourCost) {
        score = score - itemFourCost;
        upgradeFourCount = upgradeFourCount + 1;
        itemFourCost = Math.floor(100 * (2 ** upgradeFourCount) * 0.2);
        document.getElementById("score").innerHTML = score;
        document.getElementById("itemFourPrice").innerHTML = "Price: " + itemFourCost;
        document.getElementById("score").innerHTML = scoreCommas();
    } else {
        youreBroke();
    }
}

function upgradeFive() {
    if(score >= itemFiveCost) {
        score = score - itemFiveCost;
        upgradeFiveCount = upgradeFiveCount + 1;
        itemFiveCost = Math.floor(100 * (2 ** upgradeFiveCount) * 0.2);
        document.getElementById("score").innerHTML = score;
        document.getElementById("itemFivePrice").innerHTML = "Price: " + itemFiveCost;
        document.getElementById("score").innerHTML = scoreCommas();
    } else {
        youreBroke();
    }
}

function upgradeSix() {
    if(score >= itemSixCost) {
        score = score - itemSixCost;
        upgradeSixCount = upgradeSixCount + 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("itemSixPrice").innerHTML = "Price: " + itemSixCost;
        document.getElementById("score").innerHTML = scoreCommas();
        autoRock();
        upgradeSixLock();
    } else {
        youreBroke();
    }
}

function upgradeOneLock() {
    if (bonusChance >= 1) {
        document.getElementById("itemOnePrice").innerHTML = "Upgrade Maxed";
        itemOneCost = Infinity;
    }
}

function upgradeSixLock() {
    if (upgradeSixCount >= 1) {
        document.getElementById("itemSixPrice").innerHTML = "Upgrade Maxed";
        itemSixCost = Infinity;
    }
}

// AUTOCLICKER UPGRADES


let i = 0;
// Code Plans:
// If the upgrade count is less than 1, don't do anything
// If the upgrade count is greater than or equal to 1, auto-earn points that scales with the upgrade count


function autoRock() {
        setTimeout(() => { 
                score = score + 1 + (upgradeThreeCount - 1);
                bonusChanceRoll();
                document.getElementById("score").innerHTML = score;
                document.getElementById("score").innerHTML = scoreCommas();
                i++
                if (i < Infinity) {
                    autoRock();
                }
        }, upgradeSixDelay);
}
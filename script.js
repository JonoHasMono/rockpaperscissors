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
let upgradeSevenCount = 1;
let upgradeEightCount = 1;

let itemOneCost = Math.floor(100 * (2 ** upgradeOneCount) * 0.1);
let itemTwoCost = Math.floor(50 * (3 ** upgradeTwoCount) * 0.1);
let itemThreeCost = Math.floor(100 * (2 ** upgradeThreeCount) * 0.2);
let itemFourCost = Math.floor(100 * (2 ** upgradeFourCount) * 0.2);
let itemFiveCost = Math.floor(100 * (2 ** upgradeFiveCount) * 0.2);
let itemSixCost = 10000; let itemSevenCost = 10000; let itemEightCost = 10000;

let upgradeSixDelay = 200;
let upgradeSevenDelay = 200;
let upgradeEightDelay = 200;

let cosmeticOneUnlocked = false;
let cosmeticTwoUnlocked = false;

let glockUsed = false;

function cosmeticCheck() {
    //this is kinda useless now.
}

function cosmeticAutoCheck() {
    setTimeout(() => { 
        let z = 0;
            cosmeticOneCheck();
            cosmeticTwoCheck();
            z++
            if (z < Infinity) {
                cosmeticAutoCheck();
            }
    }, 100);
}


function cosmeticOneCheck() { 
    if (score >= 1000000) {
        cosmeticOneUnlocked = true;
        document.getElementById("cosmeticOne").classList.remove("cosmeticOneLocked");
        document.getElementById("cosmeticOne").classList.add("cosmeticOne");
        document.getElementById("cosmeticOneDesc").innerHTML = "Apply Score Color"
    }
}

function cosmeticTwoCheck() { 
    if (glockUsed == true) {
        cosmeticTwoUnlocked = true;
        document.getElementById("cosmeticTwo").classList.remove("cosmeticTwoLocked");
        document.getElementById("cosmeticTwo").classList.add("cosmeticTwo");
        document.getElementById("cosmeticTwoDesc").innerHTML = "Apply Score Color"
    }
}

const body = document.getElementById("#body");

document.addEventListener('keyup', logKey);

function logKey(e) {
    let key = ` ${e.code}`
    key = key.toString();
    if (key == ' KeyQ') {
        rockClicked();
        cosmeticAutoCheck();
      } else if (key == ' KeyW') {
          paperClicked();
          cosmeticAutoCheck();
      } else if (key == ' KeyE') {
          scissorsClicked();
          cosmeticAutoCheck();
      } else if (key == ' KeyG') {
          glockClicked();
          cosmeticAutoCheck();
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
    document.getElementById("itemSevenPrice").innerHTML = upgradeSevenCost();
    document.getElementById("itemEightPrice").innerHTML = upgradeEightCost();
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
    return "Price: " + (itemSixCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
}

function upgradeSevenCost() {
    return "Price: " + (itemSevenCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
}

function upgradeEightCost() {
    return "Price: " + (itemEightCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
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
    cosmeticAutoCheck();
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
        return score = score + bonusPoints + (upgradeFourCount - 1);
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
        return score = score + bonusPoints + (upgradeFiveCount - 1);
    }
}

function glockOutcomes() {
    return "You shot your opponent " + (glockBullets()) + " times, you won";
    computerChoice = ""
    playerChoice = ""
}

let glockShots = 0;

function glockBullets() {
    glockShots = Math.floor((Math.random() * 100) + 1);
    return glockShots;
}

function glockScores() {
    glockUsed = true;
    return score = score + 5000000;
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
        document.getElementById("itemOnePrice").innerHTML = "Price: " + (itemOneCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
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
        document.getElementById("itemTwoPrice").innerHTML = "Price: " + (itemTwoCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
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
        document.getElementById("itemThreePrice").innerHTML = "Price: " + (itemThreeCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
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
        document.getElementById("itemFourPrice").innerHTML = "Price: " + (itemFourCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
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
        document.getElementById("itemFivePrice").innerHTML = "Price: " + (itemFiveCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        document.getElementById("score").innerHTML = scoreCommas();
    } else {
        youreBroke();
    }
}

function upgradeSix() {
    if(score >= itemSixCost) {
        if(upgradeSixCount == 1) {
            score = score - itemSixCost;
            upgradeSixCount = upgradeSixCount + 1;
            document.getElementById("score").innerHTML = score;
            itemSixCost = itemSixCost * 5;
            document.getElementById("itemSixPrice").innerHTML = "Price: " + (itemSixCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            document.getElementById("score").innerHTML = scoreCommas();
            autoRock();
        } else if(upgradeSixCount == 2) {
            score = score - itemSixCost;
            upgradeSixCount = upgradeSixCount + 1;
            document.getElementById("score").innerHTML = score;
            document.getElementById("score").innerHTML = scoreCommas();
            upgradeSixDelay = upgradeSixDelay / 2;
            document.getElementById("itemSixPrice").innerHTML = "Upgrade Maxed";
            itemSixCost = Infinity;
        } else {

        }
        } else {
            youreBroke();
        }
    }

    function upgradeSeven() {
        if(score >= itemSevenCost) {
            if(upgradeSevenCount == 1) {
                score = score - itemSevenCost;
                upgradeSevenCount = upgradeSevenCount + 1;
                document.getElementById("score").innerHTML = score;
                itemSevenCost = itemSevenCost * 5;
                document.getElementById("itemSevenPrice").innerHTML = "Price: " + (itemSevenCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                document.getElementById("score").innerHTML = scoreCommas();
                autoPaper();
            } else if(upgradeSevenCount == 2) {
                score = score - itemSevenCost;
                upgradeSevenCount = upgradeSevenCount + 1;
                document.getElementById("score").innerHTML = score;
                document.getElementById("score").innerHTML = scoreCommas();
                upgradeSevenDelay = upgradeSevenDelay / 2;
                document.getElementById("itemSevenPrice").innerHTML = "Upgrade Maxed";
                itemSevenCost = Infinity;
            } else {
    
            }
            } else {
                youreBroke();
            }
        }

        
        function upgradeEight() {
            if(score >= itemEightCost) {
                if(upgradeEightCount == 1) {
                    score = score - itemEightCost;
                    upgradeEightCount = upgradeEightCount + 1;
                    document.getElementById("score").innerHTML = score;
                    itemEightCost = itemEightCost * 5;
                    document.getElementById("itemEightPrice").innerHTML = "Price: " + (itemEightCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    document.getElementById("score").innerHTML = scoreCommas();
                    autoScissors();
                } else if(upgradeEightCount == 2) {
                    score = score - itemEightCost;
                    upgradeEightCount = upgradeEightCount + 1;
                    document.getElementById("score").innerHTML = score;
                    document.getElementById("score").innerHTML = scoreCommas();
                    upgradeEightDelay = upgradeEightDelay / 2;
                    document.getElementById("itemEightPrice").innerHTML = "Upgrade Maxed";
                    itemEightCost = Infinity;
                } else {
        
                }
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

// AUTOCLICKER UPGRADES


let i = 0;
let j = 0;
let k = 0;
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
                    cosmeticCheck();
                    autoRock();
                }
        }, upgradeSixDelay);
}

function autoPaper() {
    setTimeout(() => { 
            score = score + 1 + (upgradeFourCount - 1);
            bonusChanceRoll();
            document.getElementById("score").innerHTML = score;
            document.getElementById("score").innerHTML = scoreCommas();
            j++
            if (j < Infinity) {
                cosmeticCheck();
                autoPaper();
            }
    }, upgradeSevenDelay);
}

function autoScissors() {
    setTimeout(() => { 
            score = score + 1 + (upgradeFiveCount - 1);
            bonusChanceRoll();
            document.getElementById("score").innerHTML = score;
            document.getElementById("score").innerHTML = scoreCommas();
            k++
            if (k < Infinity) {
                cosmeticCheck();
                autoScissors();
            }
    }, upgradeEightDelay);
}



// Cosmetic upgrades

function useCosmeticOne() {
    if (cosmeticOneUnlocked == true) {
        document.getElementById("score").removeAttribute("class");
        document.getElementById("score").classList.add("scoreC1");
        document.getElementById("bg").removeAttribute("class");
        document.getElementById("bg").classList.add("c1Body");
    }
    
}


function useCosmeticTwo() {
    if (cosmeticTwoUnlocked == true) {
        document.getElementById("score").removeAttribute("class");
        document.getElementById("score").classList.add("scoreC2");
        document.getElementById("bg").removeAttribute("class");
        document.getElementById("bg").classList.add("c2Body");
    }

    
}








// Hi   
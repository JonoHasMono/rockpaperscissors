const choices = ["rock", "paper", "scissors"];
const questionPlayer = `Rock, paper, or scissors?`;
//let playerAnswer = prompt(questionPlayer);

function startGame() {


    // Makes the player choose what to play: Rock, paper, or scissors
    function playerSelection() {

        let playerAnswerLC = playerAnswer.toLowerCase();
        
        if(playerAnswerLC == 'rock') {
            alert('You chose: Rock.');  
        } else if(playerAnswerLC == 'paper') {
         alert('You chose: Paper.');
        } else if(playerAnswerLC == 'scissors') {
         alert('You chose: Scissors.');
        } else {
         alert('Nah bro, you gotta put rock, paper, or scissors');
        }
            
    }

    playerSelection();

    // Causes the computer to make a random choice
    function computerPlay() {
        const randomChoice = Math.floor(Math.random() * choices.length);
    
       // alert(choices[randomChoice]);
    }


    // Executes the code of the computerPlay function
    computerPlay();
    
}




startGame(); 
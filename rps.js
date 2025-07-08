let humanScore = 0;
let computerScore = 0;
const winningScore = 5;


const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");


function getComputerChoice(){
    let chance = Math.random();
    if (chance < 0.33) {
        return "rock";
    } if (chance < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function updateScore() {
    scoreDiv.textContent = `Score - You: ${humanScore} Computer: ${computerScore}`;
}

function checkWinner() {
    if (humanScore === winningScore || computerScore === winningScore) {
        const winner = humanScore === winningScore ? "Human wins" : "Computer wins";
        resultsDiv.textContent += `\n${winner}`;
        disableButtons();
    }
}

function disableButtons() {
    document.querySelectorAll("button").forEach(button => button.disabled = true);
}

function playRound(human, computer){
    let resultMessage;

    if (human === computer) {
        resultMessage = `It's a tie! Both chose ${human}`;
    } else if (
        (human === "rock" && computer === "scissors")||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ){
        humanScore++;
        resultMessage = `You win! ${human} beats ${computer}`;
    } else {
        computerScore++;
        resultMessage = `You lose! ${computer} beats ${human}`
    }
    resultsDiv.textContent = resultMessage;
    updateScore();
    checkWinner();
}

document.querySelector("#choice").addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const humanChoice = event.target.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
})


// let choice = document.querySelector('#choice');

// choice.addEventListener('click', (event) => {
//     let target = event.target;

//     if (target.tagName === "BUTTON") {
//         humanChoice = target.id;
//         const computerChoice = getComputerChoice();

//         console.log(`Human: $(humanChoice), Computer: $(computerChoice)`);

//         playRound(humanChoice, computerChoice);
//     }
// });

//             humanChoice = target.id;
//             const computerChoice = getComputerChoice();
//             console.log(computerChoice);

//             switch(target.id) {
//                 case 'rock':
//                     console.log('Rock was selected');
//                     playRound(humanChoice, computerChoice);
//                     break;
//                 case 'paper':
//                     console.log('Paper was selected');
//                     playRound(humanChoice, computerChoice);
//                     break;
//                 case 'scissors':
//                     console.log('Scissors were selected');
//                     playRound(humanChoice, computerChoice);
//                     break;
//             }
// });



// let humanScore = 0;
// let computerScore = 0;





// function playRound(humanChoice, computerChoice){

  
//     if (humanChoice === computerChoice) {
//         console.log("It's a tie!") ; 
// }   if ((humanChoice === "rock") && (computerChoice === "scissors")){
//     humanScore = humanScore + 1;
//     return "You win! Rock beats Scissors"
// }   if ((humanChoice === "rock") && (computerChoice === "paper")){
//     computerScore = computerScore + 1;
//     return "You lose! Paper beats Rock"
// }   if ((humanChoice === "paper") && (computerChoice === "scissors")){
//     computerScore = computerScore + 1;
//     return "You lose! Scissors beat Paper"
// }   if ((humanChoice === "paper") && (computerChoice === "rock")){
//     humanScore = humanScore + 1;
//     return "You win! Paper beats Rock"
// }   if ((humanChoice === "scissors") && (computerChoice === "rock")){
//     computerScore = computerScore + 1;
//     return "You lose! Rock beats Scissors"
// }   if ((humanChoice === "scissors") && (computerChoice === "paper")){
//     humanScore = humanScore + 1;
//     return "You win! Scissors beats Paper"
// }   else {
//     return "invalid input"
// }
// }

//Computer choice
// function getComputerChoice(){
//     let chance = Math.random()
//     if (chance < 0.33) {
//         return "rock";
//     } if (chance < 0.66) {
//         return "paper";
//     } else {
//         return "scissors";
//     }
// }


// //Human Choice
// function getHumanChoice(){
//     let choice = (prompt("Type Rock, Paper, or Scissors before pressing Enter")).toLowerCase();
//     if (choice === "rock") {
//         return "rock";
//     } if (choice === "paper") {
//         return "paper";
//     } if (choice === "scissors"){
//         return "scissors";
//     } else {
//         return "Invalid Choie"
//     }
// }





//Main function
// function playGame(){


// //Set the scores to zero    
// let humanScore = 0;
// let computerScore = 0;

//All possibilities for each round
// function playRound(humanChoice, computerChoice){

  
//     if (humanChoice === computerChoice) {
//         return "It's a tie!"; 
// }   if ((humanChoice === "rock") && (computerChoice === "scissors")){
//     humanScore = humanScore + 1;
//     return "You win! Rock beats Scissors"
// }   if ((humanChoice === "rock") && (computerChoice === "paper")){
//     computerScore = computerScore + 1;
//     return "You lose! Paper beats Rock"
// }   if ((humanChoice === "paper") && (computerChoice === "scissors")){
//     computerScore = computerScore + 1;
//     return "You lose! Scissors beat Paper"
// }   if ((humanChoice === "paper") && (computerChoice === "rock")){
//     humanScore = humanScore + 1;
//     return "You win! Paper beats Rock"
// }   if ((humanChoice === "scissors") && (computerChoice === "rock")){
//     computerScore = computerScore + 1;
//     return "You lose! Rock beats Scissors"
// }   if ((humanChoice === "scissors") && (computerChoice === "paper")){
//     humanScore = humanScore + 1;
//     return "You win! Scissors beats Paper"
// }   else {
//     return "invalid input"
// }
// }

//Play 5 times
// while (humanScore < 5 && computerScore < 5) {
//     const humanChoice = getHumanChoice();
//     const computerChoice = getComputerChoice();
//     playRound(humanChoice, computerChoice);
//     console.log(`You chose ${humanChoice}, Computer chose ${computerChoice}.`);
//     console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`);
// }


//Final Winner
// if (humanScore === 5) {
//     console.log("Congratulations! You Win.")
// } else if (computerScore === 5) {
//     console.log("Too bad, you lose.")
// } else {
//     console.log("It's a tie!")
// }
// }


// playGame()

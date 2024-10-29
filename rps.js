
//Computer choice
function getComputerChoice(){
    let chance = Math.random()
    if (chance < 0.33) {
        return "rock";
    } if (chance < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


//Human Choice
function getHumanChoice(){
    let choice = (prompt("Type Rock, Paper, or Scissors before pressing Enter")).toLowerCase();
    if (choice === "rock") {
        return "rock";
    } if (choice === "paper") {
        return "paper";
    } if (choice === "scissors"){
        return "scissors";
    } else {
        return "Invalid Choie"
    }
}





//Main function
function playGame(){


//Set the scores to zero    
let humanScore = 0;
let computerScore = 0;

//All possibilities for each round
function playRound(humanChoice, computerChoice){

  
    if (humanChoice === computerChoice) {
        return "It's a tie!"; 
}   if ((humanChoice === "rock") && (computerChoice === "scissors")){
    humanScore = humanScore + 1;
    return "You win! Rock beats Scissors"
}   if ((humanChoice === "rock") && (computerChoice === "paper")){
    computerScore = computerScore + 1;
    return "You lose! Paper beats Rock"
}   if ((humanChoice === "paper") && (computerChoice === "scissors")){
    computerScore = computerScore + 1;
    return "You lose! Scissors beat Paper"
}   if ((humanChoice === "paper") && (computerChoice === "rock")){
    humanScore = humanScore + 1;
    return "You win! Paper beats Rock"
}   if ((humanChoice === "scissors") && (computerChoice === "rock")){
    computerScore = computerScore + 1;
    return "You lose! Rock beats Scissors"
}   if ((humanChoice === "scissors") && (computerChoice === "paper")){
    humanScore = humanScore + 1;
    return "You win! Scissors beats Paper"
}   else {
    return "invalid input"
}
}

//Play 5 times
while (humanScore < 5 && computerScore < 5) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`You chose ${humanChoice}, Computer chose ${computerChoice}.`);
    console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`);
}


//Final Winner
if (humanScore === 5) {
    console.log("Congratulations! You Win.")
} else if (computerScore === 5) {
    console.log("Too bad, you lose.")
} else {
    console.log("It's a tie!")
}
}


playGame()

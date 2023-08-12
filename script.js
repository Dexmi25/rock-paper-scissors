console.log("Rock Paper Scissor Game");

function getComputerChoice() {
    let words = ['Rock', 'Paper', 'Scissor'];
    let w = Math.floor(Math.random() * words.length);
    return words[w]; 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissor') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissor' && computerSelection === 'Paper')
    ) {
        return "You Win";
    } else {
        return "You Lose";
    }
}



const playerSelection = 'Rock';
console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));


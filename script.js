console.log("Rock Paper Scissor Game");

let playerScore = 0;
let computerScore = 0;

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

function game() {
    for (let i = 0; i < 5; i++) {
        const playerInput = prompt("Enter your choice (Rock, Paper, Scissor):");

        if (playerInput === null) {
            console.log("Game canceled.");
            alert("Game canceled.");
            return;
        }

        const playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

        if (!["Rock", "Paper", "Scissor"].includes(playerSelection)) {
            console.log("Invalid choice. Game canceled.");
            alert("Invalid choice. Game canceled.");
            return;
        }
        
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(`Round ${i + 1}:\nPlayer chose ${playerSelection}\nComputer chose ${computerSelection}\nResult: ${result}`);
        alert(`Round ${i + 1}:\nPlayer chose ${playerSelection}\nComputer chose ${computerSelection}\nResult: ${result}`);
        
        if (result === "You Win") {
            playerScore++;
        } else if (result === "You Lose") {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
        alert("Congratulations! You win the game!");
    } else if (computerScore > playerScore) {
        console.log("Sorry, you lose the game.");
        alert("Sorry, you lose the game.");
    } else {
        console.log("It's a tie game!");
        alert("It's a tie game!");
    }
}


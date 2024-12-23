function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let vars = ['rock', 'paper', 'scissors'];
    
    return vars[choice].toLowerCase();
}


function getHumanChoice() {
    let choice = prompt("Please make a choice: ");

    return choice.toLowerCase();
}


let humanScore = 0;
let computerScore = 0;


function playRound(comp, human) {

        let arr1 = [];
        let arr2 = [];

        if (comp == 'rock' && human == 'scissors') {
            computerScore += 1
        } else if (comp == 'paper' && human == 'scissors') {
            humanScore += 1
        } else if (human == 'rock' && comp == 'scissors') {
            humanScore += 1
        } else if (human == 'paper' && comp == 'scissors') {
            computerScore += 1
        } else if (human == 'rock' && comp == 'paper') {
            computerScore += 1
        } else if (human == 'paper' && comp == 'rock') {
            humanScore += 1
        }

        // arr1.push(comp)
        // arr2.push(human)
        // console.log(arr1, arr2)

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice())
    }
}

playGame();
console.log(`humanScore is ${humanScore} | ComputerScore is ${computerScore}`)
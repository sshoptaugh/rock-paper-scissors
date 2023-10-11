const computerChoiceDisplay = document.getElementById('computerChoice')
const userChoiceDisplay = document.getElementById('userChoice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button') //Will return an array of each button
let userChoice
let computerChoice

console.log(possibleChoices)

//forEach() so it can loop over each button in the array created by the querySelectorAll() method
//possibleChoices.forEach(function())
//
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)

    /*if(randomNumber === 1) {
        computerChoice = "rock"
    }
    if(randomNumber === 2) {
        computerChoice = "paper"
    }
    if(randomNumber === 3) {
        computerChoice = "scissors"
    }*/


    switch(randomNumber) {
        case 1:
            computerChoice = "rock"
            break
        case 2:
            computerChoice = "paper"
            break
        case 3:
            computerChoice = "scissors"
            break
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice) {
        resultDisplay.innerHTML = "It's a Draw!"
    }
    if(computerChoice === "rock" && userChoice === "paper" || computerChoice === "paper" && userChoice === "rock") {
        resultDisplay.innerHTML = "Paper Covers Rock!"
    }
    if(computerChoice === "rock" && userChoice === "scissors" || computerChoice === "scissors" && userChoice === "rock") {
        resultDisplay.innerHTML = "Rock Smashes Scissors!"
    }
    if(computerChoice === "paper" && userChoice === "scissors" || computerChoice === "scissors" && userChoice === "paper") {
        resultDisplay.innerHTML = "Scissors Cuts Paper!"
    }

}
//Watch out for any typos when using your variable names!!! userChoiceDisplay and userChoiceDispaly
//will have you scratching your head wondering why it doesn't work
//Make sure you actually call the function if you want to see the result
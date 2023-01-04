
let userCount = 0;
let computerCount = 0;
const results = ['rock', 'paper', 'scissor'];


document.getElementById('rock').addEventListener("click", (e) => playGame(e));
document.getElementById('paper').addEventListener("click", (e) => playGame(e));
document.getElementById('scissor').addEventListener("click", (e) => playGame(e));

let totalScore = document.getElementById("total-score");
let userChoice = document.getElementById("user-play");
let computerChoice = document.getElementById("computer-play");
let whoWon = document.getElementById("winner");


function playGame(input) {

    let randomNumber = Math.floor(Math.random() * 3);
    let computerPlay = results[randomNumber];
    let userPlay = input.target.id;
    userChoice.textContent = `The User chose: ${userPlay}`;
    computerChoice.textContent = `The Computer chose: ${computerPlay}`;


    if (computerPlay === userPlay) {
        console.log('It is a Tie');
        whoWon.textContent = "It's a Tie!";
    } else {
        if (userPlay === 'rock' && computerPlay === 'paper') {
            computerCount += 1;
            whoWon.textContent = "Computer Wins!";

        } else if (userPlay === 'rock' && computerPlay === 'scissor') {
            userCount += 1;
            whoWon.textContent = "User Wins!";

        } else if (userPlay === 'scissor' && computerPlay === 'paper') {
            userCount += 1;
            whoWon.textContent = "User Wins!";

        } else if (userPlay === 'scissor' && computerPlay === 'rock') {
            computerCount += 1;
            whoWon.textContent = "Computer Wins!";

        } else if (userPlay === 'paper' && computerPlay === 'rock') {
            userCount += 1;
            whoWon.textContent = "User Wins!";

        } else if (userPlay === 'paper' && computerPlay === 'scissor') {
            computerCount += 1;
            whoWon.textContent = "Computer Wins!";

        }

        totalScore.textContent = `USER: ${userCount} - COMPUTER: ${computerCount}`;

    }
}    
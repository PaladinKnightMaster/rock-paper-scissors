const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const totalScore = document.getElementById("total-score");
const userChoice = document.getElementById("user-play");
const computerChoice = document.getElementById("computer-play");
const whoWon = document.getElementById("winner");
rock.addEventListener("click", (e) => playGame(e));
paper.addEventListener("click", (e) => playGame(e));
scissors.addEventListener("click", (e) => playGame(e));

let userCount = 0;
let computerCount = 0;

const results = ['rock', 'paper', 'scissors'];

function playGame(input) {
    const randomNumber = Math.floor(Math.random() * 3);
    const computerPlay = results[randomNumber];
    const userPlay = input.target.id;
    const winner = getWinner(computerPlay, userPlay);

    if (winner !== "It's a Tie!") updateScores(winner);

    userChoice.textContent = `The User chose: ${userPlay}`;
    computerChoice.textContent = `The Computer chose: ${computerPlay}`;
    totalScore.textContent = `USER: ${userCount} - COMPUTER: ${computerCount}`;
    whoWon.textContent = winner;
}

function getWinner(computerChoice, userChoice) {
    if (computerChoice === userChoice) return "It's a Tie!";
    switch (userChoice) {
        case 'rock':
            return computerChoice === 'paper' ? 'Computer Wins!' : 'User Wins!';
        case 'paper':
            return computerChoice === 'scissors' ? 'Computer Wins!' : 'User Wins!';
        case 'scissors':
            return computerChoice === 'rock' ? 'Computer Wins!' : 'User Wins!';
    }
}

function updateScores(winner) {
    if (winner === 'User Wins!') userCount++;
    if (winner === 'Computer Wins!') computerCount++;
}
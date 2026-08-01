let playerScore = 0;
let compScore = 0;

const choices = ["rock", "paper", "scissors"];

const pscore = document.querySelector("#player-score");
const comscore = document.querySelector("#comp-score");
const mainPara = document.querySelector("#p3");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function playGames(playerChoice) {
  const r = Math.floor(Math.random() * choices.length);
  const compChoice = choices[r];
  if (compChoice === playerChoice) {
    mainPara.innerText = "It was Draw.";
    mainPara.style.backgroundColor = "black";
  } else if ((compChoice === 'rock' && playerChoice === 'paper') || (compChoice === 'paper' && playerChoice === 'scissors') || (compChoice === 'scissors' && playerChoice === 'rock')) {
    mainPara.innerText = `You won! ${playerChoice} beats ${compChoice}`;
    mainPara.style.backgroundColor = "green";
    playerScore++;
    pscore.innerText = `${playerScore}`;
  } else {
    mainPara.innerText = `You lost. ${compChoice} beats ${playerChoice}`;
    mainPara.style.backgroundColor = "red";
    compScore++;
    comscore.innerText = `${compScore}`;
  }
}

rock.addEventListener("click", () => playGames("rock"))
paper.addEventListener("click", () => playGames("paper"))
scissors.addEventListener("click", () => playGames("scissors"))









// rock.addEventListener("click", () => {
//   const r = Math.floor(Math.random() * choices.length);
//   const g = choices[r];
//   if (g == "rock") {
//     mainPara.innerText = "It was Draw.";
//     mainPara.style.backgroundColor = "black";
//   } else if (g == "paper") {
//     mainPara.innerText = "You lost. paper beats rock";
//     mainPara.style.backgroundColor = "red";
//     compScore++;
//     comscore.innerText = `${compScore}`;
//   } else {
//     mainPara.innerText = "You won! rock beats scissors";
//     mainPara.style.backgroundColor = "green";
//     playerScore++;
//     pscore.innerText = `${playerScore}`;
//   }
// });

console.log("Hello World");

let rockBtn = document.querySelector(".rock-button");
let paperBtn = document.querySelector(".paper-button");
let scissorsBtn = document.querySelector(".scissors-button");
let playAgainBtn = document.querySelector(".play-button");

let opponentText = document.getElementById("computer-choice-text");

let computerChoice = "";
let winner = "";
let loser = "";

function getComputerChoice() {
  let computerChoiceInt = Math.floor(Math.random() * 3);
  let opponentChoice = "";
  switch (computerChoiceInt) {
    case 0:
      opponentChoice = "Rock";
      break;

    case 1:
      opponentChoice = "Paper";
      break;

    case 2:
      opponentChoice = "Scissors";
      break;
    default:
      console.log("Random number isn't working");
  }

  return opponentChoice;
}

function rockChosen(e) {
  console.log("hello we are in the function");
  computerChoice = getComputerChoice();
  if (computerChoice === "Rock") {
    opponentText.textContent = "Opponent chose Rock";
  }
}
console.log(opponentText);

rockBtn.addEventListener("click", rockChosen);

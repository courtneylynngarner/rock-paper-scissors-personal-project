console.log("Hello World");

let rockBtn = document.querySelector(".rock-button");
let paperBtn = document.querySelector(".paper-button");
let scissorsBtn = document.querySelector(".scissors-button");
let playAgainBtn = document.querySelector(".play-button");

let state = { userCanSelect: true };

let opponentText = document.getElementById("computer-choice-text");
let winnerText = document.getElementById("winner-text");
let playerChoice = document.getElementById("player-choice");

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
  if (!state.userCanSelect) {
    return;
  }
  state.userCanSelect = false;
  playerChoice.textContent = "Player chose Rock";
  computerChoice = getComputerChoice();
  if (computerChoice === "Rock") {
    opponentText.textContent = "Opponent chose Rock";
    winnerText.textContent = "It's a Tie!";
  }
  if (computerChoice === "Paper") {
    opponentText.textContent = "Opponent chose Paper";
    winnerText.textContent = "Opponent Wins";
  }
  if (computerChoice === "Scissors") {
    opponentText.textContent = "Opponent chose Scissors";
    winnerText.textContent = "YOU WIN!";
  }
}

// calculate who wins if player selects paper

function paperChosen(e) {
  if (!state.userCanSelect) {
    return;
  }
  state.userCanSelect = false;

  playerChoice.textContent = "Player chose paper";
  computerChoice = getComputerChoice();
  if (computerChoice === "Paper") {
    opponentText.textContent = "Opponent chose paper";
    winnerText.textContent = "It's a Tie!";
  }
  if (computerChoice === "Rock") {
    opponentText.textContent = "Opponent chose Rock";
    winnerText.textContent = "YOU WIN!";
  }
  if (computerChoice === "Scissors") {
    opponentText.textContent = "Player chose Scissors";
    winnerText.textContent = "Opponent Wins!";
  }
}

// calculate who wins if player selects scissors

function scissorsChosen(e) {
  if (!state.userCanSelect) {
    return;
  }
  state.userCanSelect = false;
  playerChoice.textContent = "Player chose Scissors";
  computerChoice = getComputerChoice();
  if (computerChoice === "Scissors") {
    opponentText.textContent = "Opponent chose Scissors";
    winnerText.textContent = "It's a Tie!";
  }
  if (computerChoice === "Rock") {
    opponentText.textContent = "Opponent chose rock";
    winnerText.textContent = "Opponent Wins!";
  }
  if (computerChoice === "Paper") {
    opponentText.textContent = "Opponent chose Paper";
    winnerText.textContent = "YOU WIN!";
  }
}

function playAgain() {
  state.userCanSelect = true;
}
rockBtn.addEventListener("click", rockChosen);
paperBtn.addEventListener("click", paperChosen);
scissorsBtn.addEventListener("click", scissorsChosen);
playAgainBtn.addEventListener("click", playAgainBtn);

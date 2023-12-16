//Modal function
const modal = document.querySelector('#modal');
const modalBtn = document.querySelector('#modalBtn');
const closeBtn = document.querySelector('#closeBtn');

modalBtn.onclick = function() {
	modal.style.display = "block";
}

closeBtn.onclick = function() {
	modal.style.display = "none";
}

//Game function
let rockBtn = document.querySelector('#rockBtn');
let paperBtn = document.querySelector('#paperBtn');
let scissorsBtn = document.querySelector('#scissorsBtn');
let score = document.querySelector('#score');
let result = document.querySelector('#result');
let playerScore = 0; //Player score
let computerScore = 0; //Computer score



//Getting the computer's choice
function getComputerChoice() {
	let choices = ['rock', 'paper', 'scissors'];
	let choice = Math.floor(Math.random() * choices.length);
	return choices[choice];
}
//Playing a round
function playRound(playerSelection, computerSelection) {
	computerSelection = getComputerChoice();
	if(playerSelection == computerSelection){
		result.innerHTML = "It's a tie!"
	} else if(playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
		result.innerHTML = `You win! ${playerSelection} beats ${computerSelection}`
		playerScore++;
		score.innerHTML = playerScore;
	} else {
		result.innerHTML = `You lose. ${computerSelection} beats ${playerSelection}`
		playerScore;
		score.innerHTML = playerScore;
	}
}
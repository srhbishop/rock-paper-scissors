

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const userResult = document.querySelector('.user-result');
const computerResult = document.querySelector('.computer-result');
const roundResult = document.querySelector('.round-result');

const userScorePrint = document.querySelector('.user-score-print');
const computerScorePrint = document.querySelector('.computer-score-print');

// 0 is rock, 1 is paper, 2 is scissors

rock.addEventListener('click', function() {
    computerChoice = Math.floor(Math.random() * 3);

    userResult.innerText = 'You chose rock';
    if(computerChoice === 0) {
        computerResult.innerText = 'Computer chose rock';
        roundResult.innerText = 'It\'s a tie!';
    } else if (computerChoice === 1) {
        computerResult.innerText = 'Computer chose paper';
        roundResult.innerText = 'Computer wins';
    } else {
        computerResult.innerText = 'Computer chose scissors';
        roundResult.innerText = 'You win!';
    }

    updateScore();
})

paper.addEventListener('click', function() {
    computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);

    userResult.innerText = 'You chose paper';
    if(computerChoice === 0) {
        computerResult.innerText = 'Computer chose rock';
        roundResult.innerText = 'You win!';
    } else if (computerChoice === 1) {
        computerResult.innerText = 'Computer chose paper';
        roundResult.innerText = 'It\'s a tie!';
    } else {
        computerResult.innerText = 'Computer chose scissors';
        roundResult.innerText = 'Computer wins';
    }

    updateScore();
})

scissors.addEventListener('click', function() {
    computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);

    userResult.innerText = 'You chose scissors';
    if(computerChoice === 0) {
        computerResult.innerText = 'Computer chose rock';
        roundResult.innerText = 'Computer wins';
    } else if (computerChoice === 1) {
        computerResult.innerText = 'Computer chose paper';
        roundResult.innerText = 'You win!';
    } else {
        computerResult.innerText = 'Computer chose scissors';
        roundResult.innerText = 'It\'s a tie!';
    }

    updateScore();
});

let userScore = 0;
let computerScore = 0;

function updateScore() {
    if(roundResult.innerText === 'You win!') {
        userScore++;
    } else if (roundResult.innerText === 'Computer wins') {
        computerScore++;
    } else {
    }
    userScorePrint.innerText = userScore;
    computerScorePrint.innerText = computerScore;
}




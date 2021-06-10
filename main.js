'use strict'


const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('#roll');
const holdBtn = document.querySelector('#hold');
const ruleBtn = document.querySelector('#rules')
const newBtn = document.getElementById('newGame');
const playerOne = document.querySelector('.player-1');
const playerTwo = document.querySelector('.player-2');
const rulemodal = document.querySelector('.rulesmodal')
const overlay = document.querySelector('.overlay')
const close = document.getElementById('close');
const winmodal = document.querySelector('.winnerPlayer');
let playerOneCurrScore = document.getElementById("currentScore1");
let playerTwoCurrScore = document.getElementById("currentScore2");
let playerOneTotalScore = document.getElementById("displayScore1")
let playerTwoTotalScore = document.getElementById("displayScore2")
let score = [0, 0];
let currScore = [0, 0];

console.log(playerTwoCurrScore);


rollBtn.addEventListener('click', () => {
    const number = Math.trunc(Math.random() * 6) + 1;
    dice.style.display = 'block'
    dice.src = `dice-${number}.png`
    if (playerOne.classList.contains("active-player")) {
        if (number !== 1) {

            currScore[0] += number;


            playerOneCurrScore.textContent = `${currScore[0]}`


        }
        if (number === 1) {
            playerOne.classList.remove('active-player');
            playerTwo.classList.add('active-player');
            playerOneCurrScore.textContent = 0;
            playerOneTotalScore.textContent = 0;
            currScore[0] = 0;
            score[0] = 0;

        }


    } else {
        if (number !== 1) {

            currScore[1] += number;


            playerTwoCurrScore.textContent = `${currScore[1]}`;


        }
        if (number === 1) {
            playerOne.classList.add('active-player');
            playerTwo.classList.remove('active-player');
            playerTwoCurrScore.textContent = 0;
            playerTwoTotalScore.textContent = 0;
            currScore[1] = 0;
            score[1] = 0;
        }

    }


});
holdBtn.addEventListener('click', () => {
    if (playerOne.classList.contains("active-player")) {
        score[0] += currScore[0];
        playerOneTotalScore.textContent = `${score[0]}`;
        playerOne.classList.remove('active-player');
        playerTwo.classList.add('active-player');
        playerOneCurrScore.textContent = "0";
        currScore[0] = 0;
        if (score[0] >= 30) {
            playerOneCurrScore.textContent = "You Won :D";

        }
    } else {
        score[1] += currScore[1];

        playerTwoTotalScore.textContent = `${+ score[1]}`;
        playerTwo.classList.remove('active-player');
        playerOne.classList.add('active-player');
        playerTwoCurrScore.textContent = "0";
        currScore[1] = 0;
        if (score[1] >= 30) {
            playerTwoCurrScore.textContent = "You Won :D";

        }

    }

})

newBtn.addEventListener('click', () => {
    score = [0, 0];
    currScore = [0, 0];
    playerOneCurrScore.textContent = 0;
    playerTwoCurrScore.textContent = 0;
    playerOneTotalScore.textContent = 0;
    playerTwoTotalScore.textContent = 0;
    if (playerTwo.classList.contains('active-player')) {
        playerTwo.classList.remove('active-player');
        playerOne.classList.add('active-player')
    }
})

ruleBtn.addEventListener('click', () => {
    rulemodal.classList.add('modal-active');
    overlay.classList.add('overlay-active');
})
close.addEventListener('click', () => {
    rulemodal.classList.remove('modal-active');
    overlay.classList.remove('overlay-active');
})

overlay.addEventListener('click', () => {
    winmodal.classList.remove('modal-active');
    rulemodal.classList.remove('modal-active');
    overlay.classList.remove('overlay-active');

})












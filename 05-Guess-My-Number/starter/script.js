'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayNumber(secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
}

function bodyBg(bgColor) {
  document.querySelector('body').style.backgroundColor = bgColor;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (document.querySelector('.guess').value === '') {
    displayMessage('Insert a number');
    bodyBg('gray');
  } else {
    bodyBg('#222');
    //for correct guess
    if (guess === secretNumber) {
      displayMessage('🎉 Correct Number');
      bodyBg('#60b347');
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = score;
        console.log(highScore);
      }
      displayNumber(secretNumber);
      document.querySelector('.number').style.width = '30rem';
      //for incorrect guess
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too Low');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You Lost ');
        document.querySelector('.score').textContent = 0;
        bodyBg('#f00');
        displayNumber(secretNumber);
      }
    }
  }
});
// NOTE: for again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  displayNumber('?');
  displayMessage('Start guessing...');
  bodyBg('#222');
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});

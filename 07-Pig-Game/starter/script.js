'use strict';

// document.querySelector('#score--0').textContent = 0;
// document.querySelector('#score--1').textContent = 0;
// //NOTE: Why below method is not working ????
// // let scoreOne = document.querySelector('#score--0').textContent;
// // let scoreTwo = document.querySelector('#score--1').textContent;
// let scoreOne = document.querySelector('#score--0');
// let scoreTwo = document.querySelector('#score--1');

// // user rolls dice
// let storedArray = [];
// let currentPlayerIsOne = true;

// document.querySelector('.btn--roll').addEventListener('click', function () {
//   if (
//     Number(scoreOne.textContent) <= 50 &&
//     Number(document.querySelector('#score--1').textContent) <= 50
//   ) {
//     let rolledNumber = Math.trunc(Math.random() * 6 + 1);
//     document
//       .querySelector('.dice')
//       .setAttribute('src', `dice-${rolledNumber}.png`);
//     document.querySelector('.dice').setAttribute('style', 'display:block');
//     let result = 0;
//     storedArray.push(rolledNumber);
//     if (currentPlayerIsOne) {
//       // player1
//       if (rolledNumber === 1) {
//         document.querySelector('.player--0').classList.remove('player--active');
//         document.querySelector('.player--1').classList.add('player--active');
//         document.querySelector('#current--0').textContent = 0;
//         storedArray = [];
//         currentPlayerIsOne = !currentPlayerIsOne;
//       } else {
//         for (let i = 0; i < storedArray.length; i++) {
//           result = result + storedArray[i];
//           document.querySelector('#current--0').textContent = result;
//         }
//       }
//     } else {
//       //player2
//       if (rolledNumber === 1) {
//         document.querySelector('.player--1').classList.remove('player--active');
//         document.querySelector('.player--0').classList.add('player--active');
//         document.querySelector('#current--1').textContent = 0;
//         storedArray = [];
//         currentPlayerIsOne = !currentPlayerIsOne;
//       } else {
//         for (let i = 0; i < storedArray.length; i++) {
//           result = result + storedArray[i];
//           document.querySelector('#current--1').textContent = result;
//         }
//       }
//     }
//   }
// });

// document.querySelector('.btn--hold').addEventListener('click', function () {
//   if (
//     Number(scoreOne.textContent) <= 50 &&
//     Number(document.querySelector('#score--1').textContent) <= 50
//   ) {
//     currentPlayerIsOne = !currentPlayerIsOne;
//     storedArray = [];
//     // player 2
//     if (!currentPlayerIsOne) {
//       document.querySelector('.player--0').classList.remove('player--active');
//       document.querySelector('.player--1').classList.add('player--active');
//       scoreOne.textContent =
//         Number(scoreOne.textContent) +
//         Number(document.querySelector('#current--0').textContent);
//       document.querySelector('#current--0').textContent = 0;
//       if (Number(scoreOne.textContent) >= 50) {
//         document.querySelector('.player--0').classList.add('player--winner');
//       }
//     } else {
//       //player1
//       document.querySelector('.player--1').classList.remove('player--active');
//       document.querySelector('.player--0').classList.add('player--active');
//       document.querySelector('#score--1').textContent =
//         Number(document.querySelector('#score--1').textContent) +
//         Number(document.querySelector('#current--1').textContent);
//       document.querySelector('#current--1').textContent = 0;
//       if (Number(document.querySelector('#score--1').textContent) >= 50) {
//         document.querySelector('.player--1').classList.add('player--winner');
//       }
//     }
//   }
// });
// document.querySelector('.btn--new').addEventListener('click', function () {
//   if (Number(scoreOne.textContent) >= 50) {
//     document.querySelector('.player--0').classList.remove('player--winner');
//   }
//   if (Number(document.querySelector('#score--1').textContent) >= 50) {
//     document.querySelector('.player--1').classList.remove('player--winner');
//   }
//   storedArray = [];
//   currentPlayerIsOne = true;
//   if (
//     !document.querySelector('.player--0').classList.contains('player--active')
//   ) {
//     document.querySelector('.player--0').classList.add('player--active');
//   }
//   if (
//     document.querySelector('.player--1').classList.contains('player--active')
//   ) {
//     document.querySelector('.player--1').classList.remove('player--active');
//   }
//   document.querySelector('#current--0').textContent = 0;
//   document.querySelector('#current--1').textContent = 0;
//   scoreOne.textContent = 0;
//   document.querySelector('#score--1').textContent = 0;
//   document.querySelector('.dice').setAttribute('style', 'display:none');
// });

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');
const btnNewEl = document.querySelector('.btn--new');
const diceImgEl = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let activePlayer, playing, currentScore, scores;

//function for new game
const init = () => {
  activePlayer = 0;
  playing = true;
  currentScore = 0;
  scores = [0, 0];

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  diceImgEl.classList.add('hidden');
};
init();
//function for switching players
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// on Roll dice btn click
btnRollEl.addEventListener('click', function () {
  if (playing) {
    const rolledNumber = Number(Math.trunc(Math.random() * 6) + 1);
    diceImgEl.classList.remove('hidden');
    diceImgEl.src = `dice-${rolledNumber}.png`;
    if (rolledNumber !== 1) {
      currentScore = currentScore + rolledNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      console.log(currentScore, 'current');
    } else {
      switchPlayer();
    }
  }
});
//on Hold btn click
btnHoldEl.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 50) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      //   diceImgEl.src = 'pig-game-flowchart.png';
      diceImgEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});
//on New game btn click
btnNewEl.addEventListener('click', init);

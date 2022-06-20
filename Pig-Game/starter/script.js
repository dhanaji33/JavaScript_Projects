'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector('.btn--new');
const btnHoldCore = document.querySelector('.btn--hold');

score0El.textContent = 0;

score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
btnRollDice.addEventListener('click', function () {
  //
  diceEl.classList.remove('hidden');
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    currentScore0El.textContent = currentScore;
  } else {
  }
});

'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const raceToEl = document.querySelector('.race-to');
const btnSubmit = document.querySelector('.btn--submit');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const inputRace = document.querySelector('.modal__input--race');

let scores, currentScore, activePlayer, playing, raceTo;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  raceTo = 20;

  raceToEl.textContent = `🚀 Race to ${raceTo}`;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const rollDice = function () {
  if (!playing) return;
  console.log(raceTo);
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `./public/img/dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    // Switch to next player
    switchPlayer();
  }
};

const holdDice = function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= raceTo) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
};

const modalShow = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const modalHide = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const setRace = function () {
  init();

  raceTo = inputRace.value;

  if (!raceTo) return;

  raceToEl.textContent = `🚀 Race to ${raceTo}`;
  modalHide();
};

// Rolling dice functionality
btnRoll.addEventListener('click', rollDice);

btnSubmit.addEventListener('click', setRace);

btnHold.addEventListener('click', holdDice);

btnNew.addEventListener('click', modalShow);

closeModal.addEventListener('click', modalHide);

overlay.addEventListener('click', modalHide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modalHide();
  }
});

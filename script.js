'use strict';
const img = document.querySelector('img');
const btnRoll = document.querySelector('.btn--roll');
const activePlayer = document.querySelector('.player--active');
const activePlayerScore = activePlayer.querySelector('.score');
const activeCurrentScore = activePlayer.querySelector('.current-score');
const Player1 = document.querySelector('.player--0');
const Player2 = document.querySelector('.player--1');
const scoreP1 = document.querySelector('#score--0');
const scoreP2 = document.querySelector('#score--1');
const currentScoreP1 = document.querySelector('#current--0');
const currentScoreP2 = document.querySelector('#current--1');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
let diceRoundP1 = 0;
let diceRoundP2 = 0;
let diceTotalp1 = 0;
let diceTotalp2 = 0;
let arePlaying = true;
const randomNumber = () => {
  return Math.trunc(Math.random() * 6 + 1);
};
scoreP1.textContent = '0';
scoreP2.textContent = '0';
img.style.display = 'none';
const btnRollEvent = () => {
  if (arePlaying) {
    const randomDiceFace = randomNumber();
    img.style.display = 'block';
    img.src = `dice-${randomDiceFace}.png`;
    if (randomDiceFace > 1) {
      if (Player1.classList.contains('player--active')) {
        diceRoundP1 += randomDiceFace;
        currentScoreP1.textContent = diceRoundP1;
      } else {
        diceRoundP2 += randomDiceFace;
        currentScoreP2.textContent = diceRoundP2;
      }
    } else {
      Player1.classList.toggle('player--active');
      Player2.classList.toggle('player--active');
      if (Player2.classList.contains('player--active')) {
        diceRoundP1 = 0;
        currentScoreP1.textContent = diceRoundP1;
      } else {
        diceRoundP2 = 0;
        currentScoreP2.textContent = diceRoundP2;
      }
    }
  }
};
const btnHoldEvent = () => {
  if (arePlaying) {
    Player1.classList.toggle('player--active');
    Player2.classList.toggle('player--active');
    if (Player2.classList.contains('player--active')) {
      diceTotalp1 += diceRoundP1;
      scoreP1.textContent = diceTotalp1;
      diceRoundP1 = 0;
      currentScoreP1.textContent = diceRoundP1;
    } else {
      diceTotalp2 += diceRoundP2;
      scoreP2.textContent = diceTotalp2;
      diceRoundP2 = 0;
      currentScoreP2.textContent = diceRoundP2;
    }
    if (diceTotalp1 >= 100 || diceTotalp2 >= 100) {
      arePlaying = false;
      img.style.display = 'none';
      if (diceTotalp1 + diceRoundP1 >= 100) {
        Player1.classList.add('player--winner');
      }
      if (diceTotalp2 + diceRoundP2 >= 100) {
        Player2.classList.add('player--winner');
      }
    }
  }
};
const btnNewGameEvent = () => {
  diceRoundP1 = 0;
  diceRoundP2 = 0;
  diceTotalp1 = 0;
  diceTotalp2 = 0;
  arePlaying = true;
  Player1.classList.remove('player--winner');
  Player2.classList.remove('player--winner');
  scoreP1.textContent = '0';
  scoreP2.textContent = '0';
  img.style.display = 'none';
};
btnRoll.addEventListener('click', btnRollEvent);
btnHold.addEventListener('click', btnHoldEvent);
btnNewGame.addEventListener('click', btnNewGameEvent);

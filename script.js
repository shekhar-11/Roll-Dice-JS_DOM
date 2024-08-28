'use strict';

let changeValue = function () {
  if (current_player.classList.contains('player--0')) {
    current_player.classList.remove('player--active');
    current_player = document.querySelector('.player--1');
    current_player.classList.add('player--active');
    if (diceNum == '1') {
      curr_0('0');
    } else if (
      document.querySelector('#current--0').textContent >
      document.querySelector('#score--0').textContent
    ) {
      hs_0(document.querySelector('#current--0').textContent);
      curr_0('0');
    }
  } else if (current_player.classList.contains('player--1')) {
    current_player.classList.remove('player--active');
    current_player = document.querySelector('.player--0');
    current_player.classList.add('player--active');
    if (diceNum == '1') {
      curr_1('0');
    } else if (
      document.querySelector('#current--1').textContent >
      document.querySelector('#score--1').textContent
    ) {
      hs_1(document.querySelector('#current--1').textContent);
      curr_1('0');
    }
  }
};
const resetGame = document.querySelector('.btn--new');
// const hold_p1 =
// const hold_p2 =
let hs_0 = function (value) {
  document.querySelector('#score--0').textContent = value;
};
let hs_1 = function (value) {
  document.querySelector('#score--1').textContent = value;
};
let curr_0 = function (value) {
  document.querySelector('#current--0').textContent = value;
};
let curr_1 = function (value) {
  document.querySelector('#current--1').textContent = value;
};

let current_player = document.querySelector('.player--0');
resetGame.addEventListener('click', function () {
  hs_1('0');
  hs_0('0');
  curr_0('0');
  curr_1('0');
});

let hold = document.querySelector('.btn--hold');

hold.addEventListener('click', changeValue);

let diceNum = Math.trunc(Math.random() * 5) + 1;

let diceImg = document.querySelector('.dice');
let roll = document.querySelector('.btn--roll');
roll.addEventListener('click', function () {
  diceNum = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNum);
  if (diceNum === 1) {
    diceImg.src = 'dice-1.png';
    changeValue('1');
  } else if (diceNum === 2) {
    diceImg.src = 'dice-2.png';
  } else if (diceNum === 3) {
    diceImg.src = 'dice-3.png';
  } else if (diceNum === 4) {
    diceImg.src = 'dice-4.png';
  } else if (diceNum === 5) {
    diceImg.src = 'dice-5.png';
  } else if (diceNum === 6) {
    diceImg.src = 'dice-6.png';
  }
});

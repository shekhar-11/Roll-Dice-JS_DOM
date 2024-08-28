'use strict';
let instant_Score_0 = 0;
let instant_Score_1 = 0;

let changeValue = function () {
  if (current_player.classList.contains('player--0')) {
    current_player.classList.remove('player--active');

    if (diceNum == '1') {
      instant_Score_0 = 0;
    } else {
      hs_0(
        Number(document.querySelector('#current--0').textContent) +
          Number(document.querySelector('#score--0').textContent)
      );
      if (
        current_player.classList.contains('player--0') &&
        current_player.querySelector('#score--0').textContent >= 100
      ) {
        document.querySelector('main').style.backgroundColor = '#222';
        document.querySelector('main').style.color = '#fff';
        document.querySelector('body').classList.add('change_bg');

        document.querySelector('#modal').classList.add('modal');
        document.querySelector('.won').textContent =
          'Player 0 Has Won The Game';
      }
    }
    current_player = document.querySelector('.player--1');
    current_player.classList.add('player--active');
    curr_0('0');
  } else if (current_player.classList.contains('player--1')) {
    current_player.classList.remove('player--active');

    if (diceNum == '1') {
      instant_Score_1 = 0;
    } else {
      hs_1(
        Number(document.querySelector('#current--1').textContent) +
          Number(document.querySelector('#score--1').textContent)
      );
      if (
        current_player.classList.contains('player--1') &&
        current_player.querySelector('#score--1').textContent >= 100
      ) {
        document.querySelector('main').style.backgroundColor = '#222';
        document.querySelector('main').style.color = '#fff';
        document.querySelector('body').classList.add('change_bg');

        document.querySelector('#modal').classList.add('modal');
        document.querySelector('.won').textContent =
          'Player 1 Has Won The Game';
      }
    }
    current_player = document.querySelector('.player--0');
    current_player.classList.add('player--active');
    curr_1('0');
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
  instant_Score_0 = 0;
  instant_Score_1 = 0;
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
    if (current_player.classList.contains('player--0')) {
      instant_Score_0 += 2;
      curr_0(instant_Score_0);
    } else {
      instant_Score_1 += 2;
      curr_1(instant_Score_1);
    }
  } else if (diceNum === 3) {
    diceImg.src = 'dice-3.png';
    if (current_player.classList.contains('player--0')) {
      instant_Score_0 += 3;
      curr_0(instant_Score_0);
    } else {
      instant_Score_1 += 3;
      curr_1(instant_Score_1);
    }
  } else if (diceNum === 4) {
    diceImg.src = 'dice-4.png';
    if (current_player.classList.contains('player--0')) {
      instant_Score_0 += 4;
      curr_0(instant_Score_0);
    } else {
      instant_Score_1 += 4;
      curr_1(instant_Score_1);
    }
  } else if (diceNum === 5) {
    diceImg.src = 'dice-5.png';
    if (current_player.classList.contains('player--0')) {
      instant_Score_0 += 5;
      curr_0(instant_Score_0);
    } else {
      instant_Score_1 += 5;
      curr_1(instant_Score_1);
    }
  } else if (diceNum === 6) {
    diceImg.src = 'dice-6.png';
    if (current_player.classList.contains('player--0')) {
      instant_Score_0 += 6;
      curr_0(instant_Score_0);
    } else {
      instant_Score_1 += 6;
      curr_1(instant_Score_1);
    }
  }
});

document.querySelector('body').addEventListener('keydown', function (e) {
  if (
    document.querySelector('#modal').classList.contains('modal') &&
    e.key === 'Escape'
  ) {
    document.querySelector('.won').textContent = '';
    document.querySelector('#modal').classList.remove('modal');
  }
  hs_1('0');
  hs_0('0');
  curr_0('0');
  curr_1('0');
  instant_Score_0 = 0;
  instant_Score_1 = 0;
});

'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayChanges = function (color1, color2, color3, color4, width) {
  document.querySelector('body').style.backgroundColor = color1;
  document.querySelector('body').style.color = color2;
  document.querySelector('.right').style.color = color3;
  document.querySelector('.message').style.color = color4;
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number.');
  }

  if (guess === secretNumber) {
    displayMessage('You Guessed the Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    displayChanges('#c679f6', '#000', '#000', '#3a471d', '30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    confetti({
      particleCount: 100, // Number of confetti particles
      spread: 160, // Spread of confetti particles
      origin: { y: 0.6 }, // Origin of confetti explosion (top of the screen)
    });
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('You Lost');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start Guessing?');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayChanges('#b32c3c', '#fff9f9', '#fff9f9', '#fff9f9', '15rem');
});

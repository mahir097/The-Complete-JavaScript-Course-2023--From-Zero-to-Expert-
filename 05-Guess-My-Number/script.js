'use strict';

/*  71.Video 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(
  (document.querySelector('.message').textContent = 'Correct Number!')
);
*/

/*  72. Video
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value); //input yok boş yazdırır
document.querySelector('.guess').value = 19;
console.log(document.querySelector('.guess').value);
*/

/*  73.Video
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value); //inputlar string veri türündedir.Matematiksel işlem için sayıya dönüştürmeliyiz.
  const guess = Number(document.querySelector('.guess').value); //sayıya dönüştürüp değişkene atadık
  console.log(guess);
  document.querySelector('.message').textContent = 'Correct Number!';

  Veri girilmezse guess falsy value olur.Tersini alarak true yaparız
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
});
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; //Trunc sayının tam kısmını alır
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('No Number');
  }

  // When player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number');

    document.querySelector('.number').textContent = secretNumber; //Rastgele sayıyı tahmin kutusuna atadık

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score >= highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //When guess is wrong
  else if (guess != secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost te Game!');
    }
  }

  /*
  //When guess is too high
  else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost te Game!';
    }
  }

  // When guess is too low
  else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost te Game!';
    }
  }
  */
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; //Trunc sayının tam kısmını alır
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

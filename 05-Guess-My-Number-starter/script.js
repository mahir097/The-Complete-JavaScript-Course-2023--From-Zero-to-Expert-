'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(
  (document.querySelector('.message').textContent = 'Correct Number!')
);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value); //input yok boş yazdırır
document.querySelector('.guess').value = 19;
console.log(document.querySelector('.guess').value);

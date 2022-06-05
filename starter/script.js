'use strict';
console.log(document.querySelector('.message').textContent);
let score = 20;
let random = Math.trunc(Math.random() * 20) + 1;

const display = function (message) {
  console.log(message);

  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  console.log('Hiiiii');
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    //document.querySelector('.message').textContent = 'Plese ';
    score--;
    document.querySelector('.score').textContent = score;
    display('Please Enter Element');
  } else if (guess) {
    if (guess === random) {
      display('Hurray! you did it');
      document.querySelector('.highscore').textContent = random;
      document.querySelector('.number').textContent = '🤩';

      document.querySelector('body').style.background = 'green';
      document.querySelector('.number').style.width = '30rem';
      //alert('Secret number:' + guess);
    } else {
      let s = guess - random;
      if (s > 2 && s > 0) {
        display('Too High');
        document.querySelector('body').style.background = 'red';
        document.querySelector('.number').textContent = '😣';
        document.querySelector('.number').style.width = '30rem';
        score--;
        document.querySelector('.score').textContent = score;
      } else if (s < 2 && s > 0) {
        display('Not too High');
        document.querySelector('body').style.background = 'red';
        document.querySelector('.number').textContent = '😕';
        document.querySelector('.number').style.width = '30rem';
        score--;
        document.querySelector('.score').textContent = score;
      } else if (s > -2 && s < 0) {
        display('Too Low!!!!!');
        document.querySelector('body').style.background = 'red';
        document.querySelector('.number').textContent = '😕';
        document.querySelector('.number').style.width = '30rem';
        score--;
        document.querySelector('.score').textContent = score;
      } else if (s < -2 && s < 0) {
        display('Not too Low!!!!!');
        document.querySelector('body').style.background = 'red';
        document.querySelector('.number').textContent = '😖';
        document.querySelector('.number').style.width = '30rem';
        score--;
        document.querySelector('.score').textContent = score;
      }
    }
  }
  //   else if (guess > random) {
  //     display('Too High');
  //     document.querySelector('body').style.background = 'red';
  //     document.querySelector('.number').textContent = ':(';
  //     document.querySelector('.number').style.width = '30rem';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else if (guess < random) {
  //     display('Too Low!!!!!');
  //     document.querySelector('body').style.background = 'red';
  //     document.querySelector('.number').textContent = ':(';
  //     document.querySelector('.number').style.width = '30rem';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  random = Math.trunc(Math.random() * 20) + 1;

  display('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = 'brown';
  document.querySelector('.number').style.width = '15rem';
});

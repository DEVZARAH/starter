'use strict';
// document.querySelector(".message").textContent = "Good Guess,Correct !"
// document.querySelector(".number").textContent = 40
// document.querySelector(".guess").value = 12;
// console.log(document.querySelector('.guess').value);

let secret_number = Math.trunc(Math.random() * 20) + 1;

let trial = 20;
let trialScore = 0;
const displayMessage= function(message){
    document.querySelector(".message").textContent=message;
}

document.querySelector('.right-btn').addEventListener('click', function () {
  const guess_num = Number(document.querySelector('.guess').value);

  if (!guess_num) {
   displayMessage('Please enter a number');
  }
   else if (guess_num === secret_number) {
    
    document.querySelector('.number').textContent = secret_number;
    displayMessage('Good guess,Correct!');
    document.querySelector('.container').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.padding = '5px 40px';

    if(trial>trialScore){
        trialScore = trial
        document.querySelector(".highscore").textContent = trialScore;
    
    }
}else if (guess_num !==secret_number){
 if (trial > 1) {
      displayMessage(
        guess_num > secret_number ? 'Oops too high' : 'Oops too low'
      );
      trial--;
      document.querySelector('.score').textContent = trial;
      document.querySelector('.container').style.backgroundColor = '#e80e20';
    }else{
        document.querySelector('.score').textContent = 0;
          displayMessage('You have exhausted your Trials.Refresh');
             document.querySelector('.container').style.backgroundColor =
               '#0ee891';

    }
} 
});

document.querySelector('.left-btn').addEventListener('click', function () {
  trial = 20;
   secret_number = Math.trunc(Math.random() * 20) + 1;
   displayMessage('start guessing!');
   document.querySelector(".score").textContent = trial;
   document.querySelector(".guess").value = "";
   document.querySelector(".number").textContent = "?"
   document.querySelector('.container').style.backgroundColor = "#0ee891";
   document.querySelector(".number").style.padding ="5px 30px"

});


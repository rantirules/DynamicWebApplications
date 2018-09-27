alert('How to play Simple hangman');
alert('You have 8 chances to guess the correct word');
alert('Only single letter lowercase inputs are allowed');
alert('And most importantly have fun!!');

var foxAnswer = ['fox', 'bunny', 'kitten', 'ribbon', 'shoe'];
var rightAnswer = Array(Math.floor(Math.random()*foxAnswer.length));
var userGuess = new Set();
var answer = userAnswer(foxAnswer);
var attemptsNumber = 0;
var guessNumber = 8;
function guessLetter(inputLetters) {

  if (userGuess.has(inputLetters)){
    return;
  }

  var wrongAnswer = true;
  userGuess.add(inputLetters);
  for (var i = 0; i < answer.length; i++) {
    if (answer[i] == inputLetters) {
      rightAnswer[i] = inputLetters;
      attemptsNumber += 1;
      wrongAnswer = false;
    }
  }
  if (wrongAnswer){
    guessNumber -= 1;
  }

}

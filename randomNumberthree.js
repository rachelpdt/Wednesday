
/*
The Random Number Guessing Game
Generates a number between 1 and 6
and gived a player two attempst to
guess the number.
*/

//assume the player didn't guess correctly

var correctGuess = false;

//generates random number between 1 and 6

var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt ("I'm thinking of a number between 1 and 6. What is it?");
/* test to see if player is
1. correct
2. guessed too high
3. guessed too low
*/

if (parseInt(guess) === randomNumber){
  correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
  var guessMore = prompt ('Try again. The number I am thinking of is more than ' + guess);
    if (parseInt(guessMore) === randomNumber) {
      correctGuess = true;
    }
} else if (parseInt(guess) > randomNumber) {
  var guessLess = prompt ('Try again. The number I am thinking of is less than ' + guess);
    if (parseInt(guessLess) === randomNumber) {
      correctGuess = true;
    }
}

// test if player is correct and output response

if (correctGuess){
  document.write('<p> You guessed the number! </p>');
} else {
  document.write('<p> Sorry. The number was ' + randomNumber + '.</p>');
}

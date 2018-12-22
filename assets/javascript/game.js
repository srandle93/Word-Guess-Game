// What to function: 
// letters appearing on lines(correct guesses)
// letters appearing on the side(wrong guess)
// 11 circles on the top
// fillers for circles when guess is wrong
// message "You Won" when word is discovered
// message "You Lost" when word is not discovered

// These are const.
var score = 0;
var random = 0;
var guesses = 12;
var words = ["CLASS", "ELEMENT", "ARRAY", "STYLESHEET", "PSEUDOCODE", "COMPONENT", "JQUERY"];
var rightGuess = [];
var wrongGuess = [];
var randomWordLetters = [];
var randomWord;
var userGuess;

function start() {
  guesses = 12;
  randomWord = words[Math.floor(Math.random() * words.length)];
  randomWordLetters = randomWord.split("");
  console.log(randomWord);


  document.getElementById("currentWord").innerHTML = randomWord;
  document.getElementById("rightGuess").innerHTML = rightGuess;
  document.getElementById("wrongGuess").innerHTML = wrongGuess;
}

function letterCheck(letters) {
  var correctLetter = false;
  for (var i = 0; i < randomWordLetters.length; i++) {
    if (randomWordLetters[i] === letters) {
      correctLetter = true;
    }
  }

  if (correctLetter) {
    document.getElementById("rightGuess").innerHTML = rightGuess;
    rightGuess.push(letters);
    for (var j = 0; j < randomWordLetters.length; j++) {
      if (randomWordLetters[j] === letters) {
        rightGuess[j] = letters;
        rightGuess.push(letters);
      }
    }
  }
  else {
    document.getElementById("wrongGuess").innerHTML = rightGuess;
    wrongGuess.push(letters);
    guesses--;
  }
  console.log(correctLetter);
}

function gameStat() {
  document.getElementById("rightGuess").innerHTML = rightGuess;
  document.getElementById("wrongGuess").innerHTML = wrongGuess;

  if (randomWordLetters.toString() === rightGuess.toString()) {
    alert("You win!");
    start();
  }

  else if (guesses === 0) {
    alert("You lose");
    start();
  }
}

start();

document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.which).toUpperCase();
  letterCheck(userGuess);
  gameStat();
  console.log(event);
};

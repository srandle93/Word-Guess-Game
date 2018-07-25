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
var words = ["ELEMENT", "ARRAY", "STYLESHEET", "JAVASCRIPT"]
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

console.log("element");
// This function is to pick amongst the "word" array declared above.
function pickWord(){
for (var i = 0; i<words.length; i++){
    var random = Math.floor(Math.random() * words.lenth - 1);
    var word = words[i];
    // The code below is to have the word in place without displaying it.
    document.getElementById("word").style.display = "none";
    wordGuess()
}
}

// This is to function a letter into each "underline" id when keyed.
document.onkeyup = function(event){
    letters (String.fromCharCode(event.keyCode));
    var wordwrap = document.getElementById("wordWrap");
};

// This is to add score when correct word is guessed.
  function updateScore() {
    document.querySelector("#score").innerHTML = "Score: " + score;
  }

  // If correct letter is guessed, then it will be placed next to "word" id.
// If it is wrong, then a circle will fill with color black.
// if (letters===word[i]){
// fill letter in respective "underline" id
// }
// else {
// list letter along "guesses" id. fill a circle the color black.
// }

// Win or Lose Alerts
// if (words = words[i]){
//     alert("You Won!")
// }
// else{
//     alert("You Lose")
// }
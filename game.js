var Hint = require("./hint.js");
var Word = require("./word.js");
var Letter = require("./letter.js");
// Add inquirer
var inquirer = require('inquirer');

// create a new object
var objChallengeWord = new Word();
var objGuessedLetter = new Letter();

// DONE Create a counter to track which question's have been asked
var questionCounter = 38;
var loop = 0;
var totalAttempts = 5;
// var loop = 0;
var userGuessLetter = function (loop) {
    console.log(loop);
    var challengeWord = objChallengeWord.pickNewWord(questionCounter);
    console.log("challengeWord:", challengeWord);
    if (loop < totalAttempts) {
        inquirer.prompt({
            name: "userGuess",
            message: "Guess a letter: "
        }).then(function (guesses) {
            console.log("you guessed: ", guesses.userGuess);
            loop++
            userGuessLetter(loop);
        });
    } else if (questionCounter < objChallengeWord.movieTitleArr.length) {
        questionCounter++
        loop = 0;
        totalAttempts = 5;
        userGuessLetter(loop);
    }
}
userGuessLetter(loop);


function playGame() {
    // if (questionCounter <= objChallengeWord.movieTitleArr.length) {
    // generate a new challenge word object    
}
// // generate a new challenge word object
// var challengeWord = objChallengeWord.pickNewWord();
// console.log("challengeWord", challengeWord);
// var disguisedWord = objChallengeWord.disguisedWord;
// console.log("disguisedWord", disguisedWord);
// var guessedLetter = objGuessedLetter.displayLetters(challengeWord, "t", disguisedWord);
// // console.log("objChallengeWord",objChallengeWord);
// // console.log("objGuessedLetter",objGuessedLetter);
// console.log("(after guessing)objChallengeWord.disguisedWord", objChallengeWord.disguisedWord);

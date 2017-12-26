var Hint = require("./hint.js");
var Word = require("./word.js");
var Letter = require("./letter.js");
// Add inquirer
var inquirer = require('inquirer');

// create a new object
var objChallengeWord = new Word();
var objGuessedLetter = new Letter();

// DONE Create a counter to track which question's have been asked
var questionCounter = 0;
var loop = 0;
var maxAttempts = 5;
var attempts = maxAttempts;
// var loop = 0;
var userGuessLetter = function (attempts) {
    console.log(attempts);
    console.log("Attempts left: ", attempts);
    var challengeWord = objChallengeWord.pickNewWord(questionCounter);
    console.log("challengeWord:", challengeWord);
    if (attempts <= maxAttempts && attempts > 0) {
        inquirer.prompt({
            name: "userGuess",
            message: "Guess a letter: "
        }).then(function (guesses) {
            console.log("you guessed: ", guesses.userGuess);
            // TODO: if the letter guessed is not in the challenge word,
            // decrement the number of attempts left
            if(!objGuessedLetter.matchLetters(challengeWord,guesses.userGuess)){
                attempts--;
            }
            // loop++
            userGuessLetter(attempts);
        });
    } else if (questionCounter < objChallengeWord.movieTitleArr.length) {
        questionCounter++
        attempts = maxAttempts;
        // totalAttempts = 5;
        userGuessLetter(attempts);
    }
}
userGuessLetter(attempts);


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

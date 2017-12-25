// pull in the Word constuctor
var Word = require("./word.js");

// declare arrays to store letters that were found and letters that were not found in the selected word
var matchedLetters = [];
var unmatchedLetters = [];



var Letter = function () {
    this.letterCount = function (word) {
        // DONE Count the number of characters in the title
        // regex to match all the letters of a title (case-insensitive)
        var regEx = /[a-z]/gi;
        var match = word.match(regEx);
        if (match) {
            letterCount = match.length;
        }
        return letterCount;
    }
    this.displayLetters = function (selectedWord, chosenLetter) {
        // convert word to lowercase
        selectedWord = selectedWord.toLowerCase();
        // declare an array to store the index of the matched letter
        // var matchIndex = [], i;
        // check to see if chosen letter is in the selected word
        var letterFound = selectedWord.includes(chosenLetter);
        if (letterFound) {
            // search through the selectedWord string like an array
            for (i = 0; i < selectedWord.length; i++) {
                // if the chosenLetter matches a letter in the selectedWord...
                if (selectedWord[i] === chosenLetter) {
                    // push that index into the matchedLetters array
                    matchedLetters.push(i);
                    // var objWord = new Word();
                    // replace the _ character by index if a letter matches
                    // objChallengeWord.disguisedWord = disguisedWord.substr(0, i) + chosenLetter + disguisedWord.substr(i + 1);
                }
            }
        }
        else {
            unmatchedLetters.push(chosenLetter);
        }
        // console.log("this.disguisedWord", this.disguisedWord);
        // console.log("letterNotFound", letterNotFound);
    }
}

module.exports = Letter;
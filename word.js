// constructor to generate and display the words for the game
// Add inquirer
var inquirer = require('inquirer');

// display a few hint's from the movie data after each incorrect guess

// display underscore character under each letter to represent the letters of that word

// DONE Create a counter to track which question's have been asked
var count = 0
var userGuessArray = [];
var Word = function () {
    this.movieTitleArr = [
        "The Shawshank Redemption", "Good Will Hunting", "Forrest Gump", "Pulp Fiction", "American Beauty",
        "The Usual Suspects", "Eternal Sunshine of the Spotless Mind", "The Green Mile", "Requiem for a Dream", "Fight Club",
        "Memento", "The Pianist", "Schindler's List", "Confessions", "Inglourious Basterds", "Django Unchained",
        "Kill Bill: Vol. 1", "Gattaca", "Secretary", "Lars and the Real Girl", "In Bruges", "Blue Valentine", "Submarine",
        "The Talented Mr. Ripley", "An Education", "Big Fish", "Zindagi Na Milegi Dobara", "Barfi", "The Departed",
        "Saving Private Ryan", "Gladiator", "Garden State", "Shutter Island", "Drive", "Being Flynn", "A Beautiful Mind",
        "Black Swan", "Inception", "Silver Linings Playbook", "A Clockwork Orange"
    ];
    this.pick = function () {
        // DONE grab a movie title from array
        // pick a title from the movieTitleArr to display to the user
        this.storedPick = this.movieTitleArr[count];
        count++;
        // output the selected word - disguised
        this.disguisedWord = this.storedPick.replace(/[aA-zZ]/gi, "?");
        console.log("disguisedWord", this.disguisedWord);
        return this.storedPick;
    };
    this.letterCount = function (word) {
        // DONE Count the number of characters in the title
        // regex to match all the letters of a title (case-insensitive)
        var regEx = /[aA-zZ]/gi;
        var match = word.match(regEx);
        if (match) {
            this.storedLetterCount = match.length;
        }
        return this.storedLetterCount;
    };
    // Store the picked word and letter count of that word
    this.storedPick = "";
    this.storedLetterCount = "";
    this.disguisedWord = "";
    this.SetCharAt = function (str, index, chr) {
        if (index > str.length - 1) return str;
        return str.substr(0, index) + chr + str.substr(index + 1);
    }
    this.displayLetters = function (selectedWord, chosenLetter) {
        // convert word to lowercase
        selectedWord = selectedWord.toLowerCase();
        // Create an array to store the index of the matched letter
        var matchIndex = [], i;
        // replace each character with a question mark
        // disguisedWord = selectedWord.replace(/[aA-zZ]/gi, "?");
        console.log("this.disguisedWord", this.disguisedWord);
        // search through the selectedWord string like an array
        for (i = 0; i < selectedWord.length; i++) {

            // if the chosenLetter matches a letter in the selectedWord...
            if (selectedWord[i] === chosenLetter) {
                // push that index into the matchIndexArray
                matchIndex.push(i);
                // console.log("matchIndex", matchIndex);
                this.disguisedWord = this.disguisedWord.substr(0, i) + chosenLetter + this.disguisedWord.substr(i + 1);
                
            }
        }
        console.log("this.disguisedWord", this.disguisedWord);

    };
};
var objNewPick = new Word();
objNewPick.pick();
objNewPick.displayLetters(objNewPick.storedPick, "s");
for (i = 0; i < objNewPick.movieTitleArr.length; i++) {
    // console.log(objNewPick.pick());
    // console.log("Number of letters in selected word: " + objNewPick.letterCount(objNewPick.storedPick));
    // Or simply write output

    // ui.updateBottomBar('new bottom bar content');
}
module.exports = Word;
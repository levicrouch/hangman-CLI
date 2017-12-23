// constructor to generate and display the words for the game

// DONE grab a movie title from array

// Count the number of characters in the title

// display a few hint's from the movie data after each incorrect guess

// Create a counter to track which question's have been asked
var count = 0
var Word = function () {
    this.movieTitleArr = [
        "The Shawshank Redemption", "Good Will Hunting", "Forrest Gump", "Pulp Fiction", "American Beauty",
        "The Usual Suspects", "Eternal Sunshine of the Spotless Mind", "The Green Mile", "Requiem for a Dream", "Fight Club",
        "Memento", "The Pianist", "Schindler's List", "Confessions", "Inglourious Basterds", "Django Unchained",
        "Kill Bill: Vol. 1", "Gattaca", "Secretary", "Lars and the Real Girl", "In Bruges", "Blue Valentine", "Submarine",
        "The Talented Mr. Ripley", "An Education", "Big Fish", "Zindagi Na Milegi Dobara", "Barfi!", "The Departed",
        "Saving Private Ryan", "Gladiator", "Garden State", "Shutter Island", "Drive", "Being Flynn", "A Beautiful Mind",
        "Black Swan", "Inception", "Silver Linings Playbook", "A Clockwork Orange"
    ];
    this.pick = function () {
        // pick a title from the movieTitleArr to display to the user
        this.storedPick = this.movieTitleArr[count];
        count++;
        return this.storedPick;
    };
    this.letterCount = function (word) {
        // take the title and convert it to lowerCase
        var word = word.toLowerCase();
        var regEx = /[a-z]/gi;
        var match = word.match(regEx);
        if (match) {
            this.storedLetterCount = match.length;
        }
        // console.log("match.length",match.length)
        return match.length;
    };
    this.storedPick = "";
    this.storedLetterCount = "";
};
var objNewPick = new Word();
// var newWord = newPick.pick();
// var newWord = newPick.letterCount(newWord);
for (i = 0; i < objNewPick.movieTitleArr.length; i++) {
    console.log(objNewPick.pick());
    console.log("Number of letters in selected word: " + objNewPick.letterCount(objNewPick.storedPick));
    // console.log(objNewPick.letterCount(objNewPick.pick()));
}

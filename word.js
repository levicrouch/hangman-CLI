// constructor to generate and display the words for the game



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
    this.pickNewWord = function (count) {
        // DONE grab a movie title from array
        // pick a title from the movieTitleArr to display to the user
        this.storedPick = this.movieTitleArr[count];
        // output the selected word - disguised
        this.disguisedWord = this.storedPick.replace(/[a-z]/gi, "_ ");
        // console.log("disguisedWord", this.disguisedWord);
        return this.storedPick;
    };
    // 
    // Store the picked word and letter count of that word
    this.storedPick = "";
    this.disguisedWord = "";
    
    
};
// var objNewPick = new Word();
// objNewPick.pick();
// objNewPick.displayLetters(objNewPick.storedPick, "z");
// objNewPick.displayLetters(objNewPick.storedPick, "x");
// objNewPick.displayLetters(objNewPick.storedPick, "y");
// objNewPick.displayLetters(objNewPick.storedPick, "f");
// objNewPick.displayLetters(objNewPick.storedPick, "a");
// objNewPick.displayLetters(objNewPick.storedPick, "r");
// objNewPick.displayLetters(objNewPick.storedPick, "k");
// objNewPick.displayLetters(objNewPick.storedPick, "h");
// objNewPick.displayLetters(objNewPick.storedPick, "t");
// objNewPick.displayLetters(objNewPick.storedPick, "w");
// objNewPick.displayLetters(objNewPick.storedPick, "n");
// for (i = 0; i < objNewPick.movieTitleArr.length; i++) {
    // console.log(objNewPick.pick());
    // console.log("Number of letters in selected word: " + objNewPick.letterCount(objNewPick.storedPick));
    // Or simply write output

    // ui.updateBottomBar('new bottom bar content');
// }
module.exports = Word;
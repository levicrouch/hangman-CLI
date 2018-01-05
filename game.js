var Word = require("./word.js");
var Letter = require("./letter.js");
// Add inquirer
var inquirer = require('inquirer');

// create a new object
var objChallengeWord = new Word();
var objLetter = new Letter();

// DONE Create a counter to track which question's have been asked
var questionCounter = 0;
var loop = 0;
var maxAttempts = 5;
var attempts = maxAttempts;
var matchedLetterIndex = [];
var matchedLetters = [];
var unmatchedLetters = [];
var letterCount = 0;
var revealedWord = "";
var revealedWordLetterCount = 0;

function startGame() {
    inquirer.prompt({
        type: "list",
        message: "Welcome to hangman CLI! Please choose an option.",
        choices: ["PLAY", "QUIT"],
        name: "choice"
    })
        .then(function (response) {
            if (response.choice === "PLAY") {
                playGame(attempts);
            } else if (response.choice === "QUIT") {
                process.exit(0);
            }
        })
}

function playGame(attempts) {
    if (attempts <= maxAttempts && attempts > 0) {
        if (loop === 0) {
            var challengeWord = objChallengeWord.pickNewWord(questionCounter);
            console.log("Challenge Word: ", objChallengeWord.disguisedWord);
            letterCount = objLetter.letterCount(challengeWord);
            console.log("Challenge Word length: ", letterCount);

        } else {
            console.log("Challenge Word: ", objChallengeWord.disguisedWord);
        }
        inquirer.prompt({
            type: "input",
            name: "userGuess",
            message: "Guess a letter: "
        }).then(function (guesses) {
            console.log("you guessed: ", guesses.userGuess);
            // convert guessed letter to lowercase
            lcaseUserGuess = guesses.userGuess.toLowerCase();
            // convert challenge word to lowercase
            lcaseChallengeWord = objChallengeWord.storedPick.toLowerCase();
            // check if guessed letter is in the selected word
            var letterFound = lcaseChallengeWord.includes(lcaseUserGuess);
            if (letterFound) {
                for (i = 0; i < lcaseChallengeWord.length; i++) {
                    // if the guesses.userGuess matches a letter in the selectedWord...
                    if (lcaseChallengeWord[i] === lcaseUserGuess) {
                        // push that index into the matchedLetters array
                        matchedLetterIndex.push(i);
                        if (!matchedLetters.includes(lcaseUserGuess)) {
                            matchedLetters.push(lcaseUserGuess);
                        }
                        // replace the _ character by index if a letter matches
                        objChallengeWord.disguisedWord = objChallengeWord.disguisedWord.substr(0, i) + lcaseUserGuess + objChallengeWord.disguisedWord.substr(i + 1);
                        revealedWord = objChallengeWord.disguisedWord;
                    }
                }
            } else {
                // Done: if the letter guessed is not in the challenge word,
                // decrement the number of attempts left
                attempts--;
                loop++;
                revealedWord = objChallengeWord.disguisedWord;
                var regEx = /[a-z]/gi;
                var match = revealedWord.match(regEx);
                if (match) {
                    revealedWordLetterCount = match.length;
                }
                unmatchedLetters.push(lcaseUserGuess);
                console.log("Sorry, that letter: " + lcaseUserGuess + " is not in the challenge word");
                if (attempts < maxAttempts) {
                    console.log("You now have: " + attempts + " attempts left");
                }
                if (attempts === 0) {
                    inquirer.prompt({
                        type: "list",
                        message: "Sorry you did not guess the challenge word: " + objChallengeWord.storedPick + " Would you like to play again?",
                        choices: ["YES", "NO"],
                        name: "continue"
                    })
                        .then(function (response) {
                            if (response.continue === "YES") {
                                questionCounter++
                                attempts = maxAttempts;
                                loop = 0;
                                playGame(attempts);
                            } else if (response.continue === "NO") {
                                process.exit(0);
                            }
                        });
                }
            }
            var regEx = /[a-z]/gi;
            var match = revealedWord.match(regEx);
            if (match) {
                revealedWordLetterCount = match.length;
            }
            loop++;
            if (revealedWordLetterCount === letterCount) {
                questionCounter++
                attempts = maxAttempts;
                loop = 0;
                inquirer.prompt({
                    type: "list",
                    message: "Congratulations you guessed the challenge word: " + objChallengeWord.storedPick + " Would you like to play again?",
                    choices: ["YES", "NO"],
                    name: "continue"
                })
                    .then(function (res) {
                        if (res.continue === "YES") {
                            playGame(attempts);
                        } else if (res.continue === "NO") {
                            process.exit(0);
                        }
                    });
            } else {
                playGame(attempts);
            }

        });
    } else if (questionCounter < objChallengeWord.movieTitleArr.length) {
        attempts = maxAttempts;
        loop = 0;
    }
}
startGame();

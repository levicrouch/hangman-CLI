# hangman-CLI

## Overview:
This application uses node.js to play the classic hangman game. The user is prompted to guess a letter. If the letter guessed is in the challenge word, the letter is revealed, if not, the number of attempts is reduced. If the user is unable to guess the word(s), the user loses the game.

Hint: the words are all movie titles.

## Game Play:
* To start the game, open a terminal and type: "node game.js"
* The computer chooses a movie title
* The chosen title is then disguised and presented to the user as a series of underscores "_" where the letters are located within the word.
* The user then guesses a letter.
* If the letter is part of the word, the letter is revealed in place, and the user is prompted to choose another letter.
* If the letter is not part of the word, the number of attempts is reduced. The user is prompted to try another letter
* If the user is able to guess the challenge word in less than 5 attempts, they win!
* The user is prompted to start a new game.

## Technical notes:
This application is a server-side application running on node.js. The application uses inquirer to prompt the user for information. The application leverages our knowledge of javascript constructors so that we can reduce the amount of repeating code.

## Setup Instructions:
* Clone the repository to your local drive.
* Install node.js.
* Open a terminal in the root directory
* Install node packages:
    npm install
* Execute the game:
    node game.js

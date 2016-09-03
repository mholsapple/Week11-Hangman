// main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.
var inquirer = require('inquirer');

var game = require('./game.js');
var letter = require('./letter.js');
var word = require('./word.js');

var newGame = new game();

var gameAnswer = newGame.chosenWord;

// console.log(gameAnswer);

var guessesLeft = 12;

var checkWord = new word(newGame.chosenWord);


var newLetter = new letter(checkWord.word);


var isFirstGuess = true;

hangman();

function hangman (){
	
	

	if (guessesLeft > 0) {

		console.log("Remaining Guesses :" + guessesLeft)

		if (isFirstGuess) {
			newLetter.begin();
			console.log(newLetter.output);
		}
		else {
			console.log(newLetter.display());
		}

		console.log("Letters Guessed: " + newLetter.lettersGuessed);

		inquirer.prompt({
		name: "guess",
		message: "Pick a letter: "
		}).then(function(answer) {
			isFirstGuess = false;
			newLetter.update(answer.guess);

			if (newLetter.isMatch) {
				if(newLetter.win()) {
					console.log("You won");
					console.log("The answer was: " + gameAnswer);
					return;
				}
				hangman();

			}

			else {
				guessesLeft--;
				hangman();
			}

		})
	}	

	else {
		console.log("no guesses remaining, you lost");
		console.log("The answer was: " + gameAnswer);
	}

}
// main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.

//node installers to make the code run
var inquirer = require('inquirer');

var game = require('./game.js');
var letter = require('./letter.js');
var word = require('./word.js');

//creates the new game that pulls from the game.js file

var newGame = new game();

//creates a variable called gameAnswer that takes the var created above and the random word chosen from the game.js file

var gameAnswer = newGame.chosenWord;

// console.log(gameAnswer);

//tells you how many guesses you start with

var guessesLeft = 12;



var checkWord = new word(newGame.chosenWord);


var newLetter = new letter(checkWord.word);


var isFirstGuess = true;

hangman();

//creates the hangman function that runs the code and uses the code from the other files to make it happen
function hangman (){
	
	//sets the game in place. If the guesses left is greater than zero, then show the remaining guesses and allows the player to keep playing

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

		//using the npm inquirer, we are creating a prompt to ask the player to pick a letter.

		inquirer.prompt({
		name: "guess",
		message: "Pick a letter: "
		}).then(function(answer) {
			isFirstGuess = false;
			newLetter.update(answer.guess);

			//if the letter entered matches, you won!

			if (newLetter.isMatch) {
				if(newLetter.win()) {
					console.log("You won!");
					console.log("The answer was: " + gameAnswer);
					return;
				}
				hangman();

			}

			//if it doesn't, take the guesses left down 1 count
			else {
				guessesLeft--;
				hangman();
			}

		})
	}	

	//if line 42 is false (count is less than 0), then run the else statement.
	else {
		console.log("No guesses remaining, you lost!");
		console.log("The answer was: " + gameAnswer);
	}

}
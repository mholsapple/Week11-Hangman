// main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.
var inquirer = require('inquirer');

var game = require('./game.js');
var letter = require('./letter.js');
var word = require('./word.js');

var newGame = new game();

// var gameAnswer = newGame.chosenWord;

// console.log(gameAnswer);

var checkWord = new word(newGame.chosenWord);
console.log(checkWord.word);
console.log(checkWord.checkLetters("a"));

var newLetter = new letter(checkWord.word);
console.log(newLetter.word);

newLetter.begin();
console.log(newLetter.output);

Hangman();

function Hangman (){
	inquirer.prompt([{
	name: "guess",
	message: "The word is:"



	}])

	// else{
	// 	Hangman();
	// } 
}
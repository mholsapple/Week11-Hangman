// Your game.js file will randomly select a word for the player.

//created a function called game.js that stores the word list and picks one at random
var Game = function(){
	this.wordsList = ["pineapple", "banana", "apple", "strawberry", "kiwi", "orange"];
	this.chosenWord = this.wordsList[Math.floor(Math.random() * this.wordsList.length)];
}

//needed to make the file load
module.exports = Game;
// Your game.js file will randomly select a word for the player.
var Game = function(){
	this.wordsList = ["pineapple", "banana", "apple", "strawberry", "kiwi", "orange"];
	this.chosenWord = this.wordsList[Math.floor(Math.random() * this.wordsList.length)];
}

module.exports = Game;
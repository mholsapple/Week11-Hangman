// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.

//CONSTRUCTOR FUNCTION WHICH CAN TAKE IN A SERIES OF VALUES AND CREATE OBJECTS WITH THE PROPERTIES CONTAINED INSIDE//
function Letters(word) {
    this.word = word;
    this.answerLettersArray = this.word.split("");
    this.lettersGuessed = [];
    this.output = [];
    this.isMatch = false;

    //the game function that is called in the main.js file so when a player begins the game, it outputs the _'s based on the random word chosen

    this.begin = function(){
        for (i in this.word){
            this.output.push("_");
        }
    };

    //the function that displys the output
    this.display = function(){
        return this.output;
    };

    //the function that pushes the letters guessed from the array into the letter picked.
    this.update = function(letterPicked){
        this.lettersGuessed.push(letterPicked);
        this.isMatch = false;
            for (l = 0; l < this.answerLettersArray.length; l++){
                if(letterPicked == this.answerLettersArray[l]){
                    this.output[l] = this.answerLettersArray[l];
                    this.isMatch = true;
                }
            }
    };

    //the function that determines whether the player wins. ala stands for Answers Letter Array and op stands for output. this is taking those arrays and making them into a string so it can check to see if the letters guessed match the word guessed

    this.win = function(){
        var alaString = this.answerLettersArray.toString();
        var opString = this.output.toString();
        if (alaString == opString){
            return true;
        }
    }

 }

 //needed to make the file load

 module.exports = Letters;
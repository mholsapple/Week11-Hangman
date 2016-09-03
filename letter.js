// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.

//CONSTRUCTOR FUNCTION WHICH CAN TAKE IN A SERIES OF VALUES AND CREATE OBJECTS WITH THE PROPERTIES CONTAINED INSIDE//
function Letters(word) {
    this.word = word;
    this.answerLettersArray = this.word.split("");
    this.lettersGuessed = [];
    this.output = [];
    this.isMatch = false;

    this.begin = function(){
        for (i in this.word){
            this.output.push("_");
        }
    };

    this.display = function(){
        return this.output;
    };

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

    this.win = function(){
        var alaString = this.answerLettersArray.toString();
        var opString = this.output.toString();
        if (alaString == opString){
            return true;
        }
    }

 }

 module.exports = Letters;
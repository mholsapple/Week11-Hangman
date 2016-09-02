// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.

//CONSTRUCTOR FUNCTION WHICH CAN TAKE IN A SERIES OF VALUES AND CREATE OBJECTS WITH THE PROPERTIES CONTAINED INSIDE//
function Letters(word) {
    this.word = word;
    this.letter = [];
    this.output = [];

    this.begin = function(){
        for (i in this.word){
            this.output.push("_");
        }
    }
    this.update = function(){
        for (i in this.letter){
            for (l in this.word){
                if(this.letter[i] == this.word[l]){
                    this.output[l] = this.word[l];
                }
            }
        }
    }
 }

 module.exports = Letters;
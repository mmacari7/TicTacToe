//Game functions to be implimented
var prompt = require("prompt-sync")();

module.exports = {          //Allows the export of module


    newGame: function(){                        //Creates function in game module for creation of new game
        //console.log("in new game");
        var err = "Input is invalid, you are not worthy, goodbye";
        var numPlayers = prompt("Enter number of players; Minimum 1, Maximum 26: ");
        if(numPlayers >= 1 && numPlayers <= 26){
            var boardSize = prompt("Enter a board size; Maximum 999: ");
            if(boardSize >= 1 && boardSize <= 999){
                var winSequence = prompt("What is the win sequence: ");
                if(winSequence > 0 && winSequence <= boardSize){
                    if(Math.pow(boardSize, 2)/winSequence >= numPlayers -1){
                        //Create the new game...
                        // ......
                        // ......
                        // ......
                        console.log("Creating game");
                    }
                    else{
                        throw("Victory is not possible given these conditions");
                    }
                }
                else{
                    throw("Invalid, win sequence must be bigger than 0 and less than or equal to board size");
                }
            }
            else{
                throw(err);
            }
        }
        else{
            throw(err);
        }
    }
};
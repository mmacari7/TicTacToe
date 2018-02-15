//Game functions to be implimented
var prompt = require("prompt-sync")();
var fs = require("fs");
var data = require("./data");

module.exports = {          //Allows the export of module

    newGame: function(){                        //Creates function in game module for creation of new game
        //console.log("in new game");
        var err = "Input is invalid, you are not worthy, goodbye";
        var numPlayers = prompt("Enter number of players; Minimum 1, Maximum 26: ");
        if(numPlayers >= 1 && numPlayers <= 26){
            boardSize = prompt("Enter a board size; Maximum 999: ");
            if(boardSize > 1 && boardSize <= 999){
                var winSequence = prompt("What is the win sequence: ");
                if(winSequence > 0 && winSequence <= boardSize){
                    if(Math.pow(boardSize, 2)/winSequence >= numPlayers -1){
                        //Create the new game...
                        console.log("Creating game");
                        data.createBoard(numPlayers, boardSize, winSequence);
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
    },

    loadGame: function(){
         var gameFile = prompt("Enter the name of the game file to load, excluding extensions: ");  //Gets file name to load
         gameFile = gameFile + ".txt";
         fs.readFile(gameFile, "utf8", function(err, fileData){                     //Tells it what to read
             if(err){                                               //If file is not found throw an error
                 throw(err);
             }
             else{
                 //Otherwise pass the data into data
                 var fileContent = JSON.parse(fileData);                   //Read the file and get all of the data to parse
                 data.loadBoard(fileContent.numPlayers, fileContent.boardSize, fileContent.winSequence, fileContent.playerTurn, fileContent.gameBoard, fileContent.moveNum);    //Passes all the data into data loadBoard to resume game
             }
         });
     },

    saveGame: function(){
        var obj = {                             //Creates the object from all the variables in data that we are going to save to file
            numPlayers: data.numPlayers,
            boardSize: data.boardSize,
            winSequence: data.winSequence,
            playerTurn: data.playerTurn,
            gameBoard: data.gameBoard,
            moveNum: data.moveNum
        };
        var save = JSON.stringify(obj);         //Uses the stringify function to turn our object into a string for the text file.
        var fname = prompt("Enter a name for your save file: ");        //File name
        fname = fname + ".txt";                                         //appends .txt
        fs.writeFile(fname, save, function(err){                        //Writes the file to text
            if(err){
                throw(err);
            }
            console.log("File saved as " + fname);
        });
    }
};


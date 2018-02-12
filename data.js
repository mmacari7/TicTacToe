//Where all of the game data is to be held and accessed

var fs = require("fs");
var game = require("./game");

module.exports = {
    numPlayers: 0,                  //Init for variables inside of the module itself.
    boardSize: 0,
    winSequence: 0,
    playerPieces: ['X','O','A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','Y','Z'],
    playerTurn: 0,                          //Will point to indices of what players turn it is.
    gameBoard: [],

    createBoard: function(numPlayers, boardSize, winSequence){     //Sets the variables passed in by the new game
        this.numPlayers = numPlayers;
        this.boardSize = boardSize;
        this.winSequence = winSequence;

        for(i = 0; i < boardSize; i++){
            var temp = [];
            for(x = 0; x < boardSize; x++) {
                temp.push('   ');
            }
            this.gameBoard.push(temp);
        }


    },




};
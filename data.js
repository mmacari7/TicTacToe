//Where all of the game data is to be held and accessed

var fs = require("fs");
var game = require("./game");

module.exports = {
    numPlayers: 0,
    boardSize: 0,
    winSequence: 0,


    setVariables: function(numPlayers, boardSize, winSequence){
        this.numPlayers = numPlayers;
        this.boardSize = boardSize;
        this.winSequence = winSequence;

        //console.log(numPlayers, boardSize, winSequence);
    },




    setData: function(){
        console.log("hello");
    }
};
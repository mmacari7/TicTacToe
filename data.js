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
        this.drawBoard()
    },

    drawBoard: function(){
        //prints the board with the borders
        var str1 = '    ---';
        for (let a = 1; a < this.boardSize; a++)
        {
            str1 += '+---';
        }
        for (var i = 0; i < this.boardSize; i++)
        {
            if (i === 0)
            {
                var str2 = '    ';
                for (let a = 1; a <= this.boardSize; a++)
                {
                    if (Math.floor(a/10) <= 0)
                        str2 += ' ' + a.toString() + '  ';
                    else if (Math.floor(a/100) <= 0)
                        str2 += a.toString() + '  ';
                    else if (Math.floor(a/1000) <= 0)
                        str2 += a.toString() + ' ';
                }
                console.log(str2);
            }
            if(Math.floor((i+1)/10) == 0){
                process.stdout.write("  ");
            }
            else if(Math.floor((i+1)/100) == 0){
                process.stdout.write(' ');
            }
            console.log((i + 1).toString(), this.gameBoard[i].join('|'));
            if (i != this.boardSize - 1)
                console.log(str1);
        }
    },


};


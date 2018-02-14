//Michael Macari, Jon Lafluer, Anthony Rusignuolo
//Tic Tac Toe
//Main app to call rest of functions and modules

var game = require("./game");               //Declares our dependencies
var data = require("./data");
var prompt = require("prompt-sync")();

//Create a new game?
game.newGame();                             //Calls the new game function from the game module
data.drawBoard();

//Load Game?
var i =0;


//Game loop
var x = false;
while(!x){

    var row = prompt("Enter row number: ");
    if(row == "quit"){
        x = true;
        break;
    }
    var col = prompt("Enter column number: ");
    if(col == "quit"){
        x = true;
        break;
    }
    var s = data.addMove(row, col);
    if(s){
        data.drawBoard();
        x = data.checkWin(row, col);
    }

}

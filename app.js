//Michael Macari, Jon Lafluer, Anthony Rusignuolo
//Tic Tac Toe

//Main app to call rest of functions

var game = require("./game");               //Declares our dependencies
var data = require("./data");


//Create a new game?
game.newGame();                             //Calls the new game function from the game module

console.log(data.gameBoard);

console.log('FUCK');
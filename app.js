//Michael Macari, Jon Lafluer, Anthony Rusignuolo
//Tic Tac Toe
//Main app to call rest of functions and modules

var game = require("./game");               //Declares our dependencies
var data = require("./data");
var prompt = require("prompt-sync")();

//Create a new game, or load from file?
var nglg = prompt("Would you like to start a new game or load from file? Enter 'new', 'load' or 'quit' to quit: ");
while(nglg != "new" && nglg != "load" && nglg != "quit"){
    nglg = prompt("Enter 'new' for new game. Enter 'load' to load game from file. Enter 'quit' to quit: " );
}

if(nglg == "new"){
    game.newGame();
    data.drawBoard();
    mainLoop();
}
else if(nglg == "load" ){
    game.loadGame();
}

else{
    console.log("Shutting Down");
}


//main game loop
function mainLoop() {
    var x = false;
    while (!x) {                                  //Loops until quit is written, or someone wins, or a tie happens
        var sg = "";
        console.log("Type 'quit' at any time to quit");
        var row = prompt("Enter row number: ");
        if (row == "quit") {
            while(sg != 'y' && sg != 'n') {       //Game user must input if they want to save or not
                sg = prompt("Would you like to save? Enter y/n: ");
            }
            if(sg == 'y') {
                game.saveGame()
                console.log("Shutting Down");       //Shut down message
                x = true;
                break;
            }
            else {
                console.log("Shutting Down");
                x = true;
                break;
            }

        }
        var col = prompt("Enter column number: ");
        if (col == "quit") {
            while(sg != 'y' &&  sg != 'n'){
                sg = prompt("Would you like to save? Enter y/n: ");       //Same for column quit
            }
            if(sg == 'y') {
                game.saveGame();
                console.log("Shutting Down");               //shutdown message
                x = true;
                break;
            }
            else {
                console.log("Shutting Down");
                x = true;
                break;
            }
        }
        var s = data.addMove(row, col);     //Calls the move add function
        if (s) {
            data.drawBoard();               //Redraws the board
            x = data.checkWin(row, col);    //Checks if a win happened and exits if so
        }

    }
}
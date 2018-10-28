const Board = require("./board");
// Game class
class Game {
    constructor() {
        console.log('Creating game.....');
        this.board = new Board('');
        this.gameStatus = true;
        this.playerTurn = 'X';
        console.log('Game status: ' + this.gameStatus);
    }
    // Game over
    gameEnded() {
        if (this.board.checkWinner() === true) {
            this.gameStatus = false;
            return this.gameStatus;
        }
    }
    // Swap between players
    changePlayer() {
        if (this.playerTurn === "X" && this.gameStatus === true) {
            this.playerTurn = "O";
        }
        else if (this.playerTurn === 'O' && this.gameStatus === true) {
            this.playerTurn = "X";
        }
        else {
            console.log('Game is over.');
        }
    }
    // Print gameBoard
    printTable() {
        return this.board.printSquares();
    }
    // Input player moves
    playerMove(row, col) {
        console.log('Making move for ' + this.playerTurn);
        if (this.board.makeMove(row, col, this.playerTurn)) {
            console.log('Move made: ' + this.playerTurn);
            this.changePlayer();
            this.printTable();
            console.log("Player " + this.playerTurn + " it's your turn!");
        }
        else {
            console.log('Square is alredy taken!');
        };
    }
}
module.exports = Game; 
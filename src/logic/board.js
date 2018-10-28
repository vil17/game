const Square = require('./square');
const Game = require('./game');
// Board class
class Board {
    constructor() {
        this.counter = 0;
        this.grid = [[new Square(''), new Square(''), new Square('')],
        [new Square(''), new Square(''), new Square('')],
        [new Square(''), new Square(''), new Square('')]
        ];
    }
    // Print squares in gameBoard
    printSquares() {
        var string = '';
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < this.grid.length; j++) {
                string += this.grid[i][j].box + ' ';
            }
            console.log(string);
            string = "";
        }
    }
    // Input into grid
    makeMove(row, col, playerTurn) {
        console.log(row, col, playerTurn + ": Made move");
        if (this.grid[row][col].isEmpty()) {
            this.grid[row][col].placeInput(playerTurn);
            this.counter++;
            return true;
        }
        else {
            return false;
        }
    }
    // Scan for winners
    checkWinner() {
        // Horizontal check 
        for (var i = 0; i < 3; i++) {
            if (this.grid[i][0].box === this.grid[i][1].box &&
                this.grid[i][0].box === this.grid[i][2].box &&
                this.grid[i][0].box != '') {
                return true;
            }
        }
        // Vertical check 
        for (var j = 0; j < 3; j++) {
            if (this.grid[0][j].box === this.grid[1][j].box &&
                this.grid[0][j].box === this.grid[2][j].box &&
                this.grid[0][j].box != '') {
                return true;
            }
        }
        // KRISSKROSS
        if (this.grid[0][0].box == this.grid[1][1].box &&
            this.grid[0][0].box == this.grid[2][2].box &&
            this.grid[0][0].box != '' ||
            this.grid[0][2].box == this.grid[1][1].box &&
            this.grid[0][2].box == this.grid[2][0].box &&
            this.grid[0][2].box != '') {
            return true;
        }
        // Draw
        else if (this.counter === 9) {
            console.log('Draw!');
            return true;
        }
        // Game not over
        else {
            console.log('Game goes on');
            return false;
        }
    }
}

module.exports = Board; 
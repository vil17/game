// Square class
class Square {
    constructor(box) {
        this.box = box;
    }
    // Place symbol
    placeInput(newsign) {
        this.box = newsign;
    }
    // Check if square is empty
    isEmpty() {
        if (this.box === '') {
            return true;
        }
        else {
            console.log('This square is already taken!');
            return false;
        }
    }
}

module.exports = Square; 
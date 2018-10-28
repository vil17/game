import style from './styles.css'
var player = "O";
var boxes = document.getElementsByClassName('box');
var resetButton = document.getElementById("reset-button");
var headLine = document.getElementById("player-turn-text");
boxes[0].addEventListener("click", function () { selectBox(0, 0); });
boxes[1].addEventListener("click", function () { selectBox(0, 1); });
boxes[2].addEventListener("click", function () { selectBox(0, 2); });
boxes[3].addEventListener("click", function () { selectBox(1, 0); });
boxes[4].addEventListener("click", function () { selectBox(1, 1); });
boxes[5].addEventListener("click", function () { selectBox(1, 2); });
boxes[6].addEventListener("click", function () { selectBox(2, 0); });
boxes[7].addEventListener("click", function () { selectBox(2, 1); });
boxes[8].addEventListener("click", function () { selectBox(2, 2); });

function newGame() {
    //for(i = 0; i< boxes.length)
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
        boxes[i].disabled = false;
    };
    fetch("/game/newgame")
        .then(function (res) {
            return res.json();
        })
    headLine.innerHTML = "X, It's your turn!";
}

function selectBox(var1, var2) {
    headLine.innerHTML = player + " it's your turn!";
    var getId = var1.toString() + var2.toString();
    fetch("/game/makemove/" + var1 + "/" + var2)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            document.getElementById(getId).innerHTML = data.fillsquare;
            player = data.fillsquare;
            document.getElementById(getId).disabled = true;
            //player = data.fillsquare;
            if (!data.gameStatus) {
                for (var i = 0; i < boxes.length; i++) {
                    boxes[i].disabled = true;
                };
                headLine.innerHTML = data.fillsquare + " Has Won The Game!";
            }
        });

}


resetButton.addEventListener("click", function () { newGame(boxes) });

newGame();

/*

else

            */
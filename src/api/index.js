const express = require("express");
const router = express.Router();
const game = require("../logic/game");


var newGame;
var playerTurn


router.get("/", (req, res) => {
  res.status(405).send({ error: "GET method not allowed here, try OPTIONS." });
});

router.options("/", (req, res) => {
  const options = {
    options: { get: ["/closegame", "/newgame", "/resetboard", "makemove/{var1}/{var2}"] }
  };
  res.status(200).send(options);
});

router.get("/newgame", (req, res) => {
  newGame = new game();
  playerMove = newGame.playerTurn;
  res.status(200).send({game: newGame});
});

router.get("/closegame", (req, res) => {
  newGame = null;
  res.status(200).send({ game: isOff });
});




router.get("/makemove/:var1/:var2", (req, res) => {
  newGame.printTable(); //console debug
  
  if(newGame.gameStatus === true){
    newGame.playerMove (req.params.var1, req.params.var2);
    newGame.gameEnded();
    res.status(200).send({
      "fillsquare": playerMove,
      "gameStatus": newGame.gameStatus,
    });
    console.log("gamestatus is " + newGame.gameStatus)
    playerMove = newGame.playerTurn //Tharf ad geta bedid med ad senda ut thessa 
  }else{
  res.status(200).send({
    "fillsquare": playerMove,
    "gameStatus": newGame.gameStatus,
  });
  
}
  //res.status(200).send({ playerturn: newGame.playerTurn });
});











module.exports = router;
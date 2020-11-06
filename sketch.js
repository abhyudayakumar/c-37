var canvas, backgroundImage;
var form, player, game;
var gameState = 0;
var distance = 0;
var playerCount;
var allPlayers;
var database;
var cars = [];
var car1;
var car2;
var car3;
var car4;

function setup(){
  canvas = createCanvas(displayWidth - 20 , displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}

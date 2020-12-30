
var monkeySpr , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var groundSpr,ground_img;

var PLAY = 0;
var END = 1;
var gamestate = PLAY;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  groundSpr = createSprite(380,380,750,5);
  groundSpr.velocityX = -3;
  monkeySpr = createSprite(50,370,20,20);
  monkeySpr.addAnimation("monkey_running", monkey_running);
  monkeySpr.scale=0.1;
  obstacleGroup = new Group();
  
  
}


function draw() {
  background(220);
 // console.log(groundSpr.x);
  
  if(gamestate === PLAY){
      if(groundSpr.x<101){
    groundSpr.x = 380;
  }
  
  monkeySpr.collide(groundSpr);
  
  if(keyDown("space")&&monkeySpr.y === 346.8){
    monkeySpr.velocityY = -5;
  }
  
  
  if(monkeySpr.y <= 226){
    monkeySpr.velocityY = 3;
  }
  console.log(monkeySpr.y); 
  if(frameCount%80 === 0){
    SpawnObs();
  }
  
  }
  
  if(gamestate === END){
    background(0);
    fill("Yellow");
    textSize(25);
    text("GAMEOVER",200,200);
  }
  
  if(monkeySpr.isTouching(obstacle)){
    gamestate = 1;
  }
  
  gamestate = 0;
  drawSprites();

  
}


function SpawnObs(){
  obstacle = createSprite(370,355,20,20);
  obstacle.addImage(obstacleImage);
  
  obstacle.velocityX = -5;
  obstacle.lifetime = 400;
  obstacle.scale = .15;
  obstacleGroup.add(obstacle);
}



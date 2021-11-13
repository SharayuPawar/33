var Img,Img2,Img3;
var Body1Img,Body2Img,Body3Img,obstacleImg;
var createSprite;
var backgroundImg;
var obstaclesGroup;
var obstaclesGroup2;
var collidedSound;
var jumpsound;



function preload(){
  backgroundImg = loadImage("snow3.jpg");
Body1Img = loadImage('WINTER_1-removebg-preview.png');
Body2Img = loadImage('WINTER_2-removebg-preview.png');
Body3Img = loadImage('WINTER_3-removebg-preview.png')
obstacleImg = loadImage ('snow4.webp');
obstacle2Img = loadImage('snow5.webp');
collidedSound = loadSound("JoyMusic.mp3");
jumpsound = loadSound("jump.wav");
}


function setup() {
  createCanvas(800,400);
  collidedSound.play();
  
  Img=createSprite(70,300,50,50);
	Img.addImage(Body1Img);
  Img.scale=0.5

  Img2=createSprite(750,300,40,40);
  Img2.addImage(Body2Img)
  Img2.scale=0.3;

  Img3=createSprite(400,300,40,40);
  Img3.addImage(Body3Img)
  Img3.scale=0.7;
	
  obstaclesGroup = new Group();
  obstaclesGroup2 = new Group ();
}

function draw() {
  background(backgroundImg );

  textSize(20);
  fill("yellow");
  text("PRESS UP ARROW, LEFT ARROW,RIGHT ARROW",100,30);

spawnObstacles();
spawnObstacles2();
  drawSprites();

  
}

function spawnObstacles() {
  if(frameCount % 50 === 0) {

    var obstacle = createSprite(Math.round(random(50,750)),10,10);
    obstacle.addImage(obstacleImg);
    obstacle.velocityY = 5
    obstacle.scale = 0.15;      
    obstaclesGroup.add(obstacle);
    
  }
}

function spawnObstacles2() {
  if(frameCount % 50 === 0) {

    var obstacle2 = createSprite(Math.round(random(50,750)),10,10);
    obstacle2.addImage(obstacle2Img);
    obstacle2.velocityY = 5
    obstacle2.scale = 0.15;      
    obstaclesGroup2.add(obstacle2);
    
  }
}

function keyPressed(){
	if(keyCode===RIGHT_ARROW){
    Img.x=Img.x+50;
    jumpsound.play();
	}

  if(keyCode===UP_ARROW){
    Img2.y=Img2.y-50;
	}

  if(keyCode===LEFT_ARROW){
    Img3.x=Img3.x-5;
	}
}







var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
bullet=createSprite(50,200,50,10);
wall=createSprite(1200,200,thickness,100);
movingrect=createSprite(200,200,30,30);
speed=random(200,3);
weight=random(30,52);
bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  
  drawSprites();
}

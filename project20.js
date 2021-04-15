var object1,bullet,wall
function setup() {
  createCanvas(800,400);
  
object1=createSprite(100,200,30,30);
bullet=createSprite(200,200,50,50);
wall=createSprite(200,200,30,30);
wall.shapeColor=("yellow")
bullet.shapeColor=("yellow")
object1.shapeColor = ("yellow")
}

function draw() {
  background(255,255,255);  
  wall.x=World.mouseX;
  wall.y=World.mouseY;
  if (isTouching(wall,object1)){
   wall.shapeColor=("red")
   bullet.shapeColor=("yellow")
   object1.shapeColor=("red")
  }
  else if(wall,bullet){
    wall.shapeColor=("red")
    bullet.shapeColor=("red")
    object1.shapeColor=("yellow")
  }
  else{
    wall.shapeColor=("yellow")
    bullet.shapeColor=("yellow")
    object1.shapeColor = ("yellow")
  }
  drawSprites();
}
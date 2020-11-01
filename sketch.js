var bullet1;
var wall,thickness;
var deformation
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,83))
  bullet1 = createSprite(50, 200, 50, 30);
  bullet1.shapeColor = "white"
  bullet1.velocityX = speed;
  wall = createSprite(1400, 200, thickness, height/2);
  wall.shapeColor = "yellow"
  
}

function draw() {
  

  
  background(0);  

  if (wall.x-bullet1.x < bullet1.width/2 + wall.width/2 && bullet1.x-wall.x < bullet1.width/2 + wall.width/2){
    bullet1.velocityX = 0;
    deformation=0.5*weight*speed*speed/thickness*thickness*thickness
    if (deformation>=10){
      bullet1.shapeColor = "red"
    }
    if (deformation<10){
      bullet1.shapeColor = "green"
    }
  }
  drawSprites();
}
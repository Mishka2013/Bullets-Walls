var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 10);
  car.shapeColor = "#ffffff";
  
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor =  color(86,82,10);

  speed = random(223,321);
  thickness = random(22,83);
 weight = random(30,42);
}

function draw() {
  background(0,0,0); 
  
  car.velocityX = speed;

  if(hasCollided(bullet,wall))
  {
       bullet.velocityX = 0;
        
       var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

       if(damage>10)
       {
           wall.shapeColor = color(255,0,0);

       }

       if(damage<10)
       {
        wall.shapeColor = color(0,255,0);

       }
  }





  drawSprites();


}

function hasCollided(lbullet, lwall){

bulletRightEdge =  lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;

if(bulletRightEdge>=wallLeftEdge){
  return  true
}
return false;
}









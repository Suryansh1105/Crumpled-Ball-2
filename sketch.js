
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground1,binImg;
var bin1,ball1;

function preload()
{

  binImg=loadImage("dustbingreen.png")
}


function setup() {
	createCanvas(1200, 400);


  engine = Engine.create();
  world = engine.world;
 

 

  ball1= new ball(150,320,70);
  bin1= new bin(800,325,15,220);
  bin2= new bin(890,390,180,15);
  bin3= new bin(980,325,15,220);
  ground1= new ground(600,392.5,1200,15);
	
  
}


function draw() {
  
  background("lightblue");

  Engine.update(engine);
  ball1.display();
  image(binImg,800,200,180,190);

  ball1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground1.display();


}
function keyPressed()
{
  if(keyCode === RIGHT_ARROW)
  {
    Body.applyForce(ball1.body,ball1.body.position,{x:920,y:-920});
  }
}



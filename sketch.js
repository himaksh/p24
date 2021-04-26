
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	Matter.Bodies.circle(position.X,position.Y,radius,[options],[maxSides])
   
	ground = createSprite(400,600,800,20);

	log1 = createSprite(720,585,150,20);
	log2 = createSprite(790,515,20,150);
	log3 = createSprite(650,515,20,150);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  circle.display();
  ground.display();
  log1.display();
  log2.display();
  log3.display();
  drawSprites();
 
}

function keypressed(){
	if(keyCode === UP_ARROW){
	
Matter.Body.applyForse(paperObject.Body,paperObject.Body.position,{x:85,y:-85});		
	}
}


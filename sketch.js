
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stone1 = new Stone(200,500,70,70);
	plane1 = new Plane(400,600,900,20);
	hammer1 = new Hammer(200,120);
	rubber1 = new Rubber(500,500,70);
	sand1 = new Sand(300,500,30);
	sand2 = new Sand(320,500,30);
	sand3 = new Sand(340,500,30);
	sand4 = new Sand(360,500,30);
	sand5 = new Sand(380,500,30);
	sand6 = new Sand(400,500,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  

  stone1.display();
  plane1.display();
  hammer1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  
  drawSprites();
 
}




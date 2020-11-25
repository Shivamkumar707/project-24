const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper, dustbin1, dustbin2, dustbin3;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	ground = Bodies.rectangle(400,640,800,20,{isStatic:true});
  World.add(world,ground);

  paper = new Paper(70,630,40);
  dustbin1 = new Dustbin(655,618,160,25);
  dustbin2 = new Dustbin(570,575,25,120);
  dustbin3 = new Dustbin(740,575,25,120);

  keyPressed();

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  fill("yellow");
  rect(ground.position.x,ground.position.y,800,20);
  
  drawSprites();
 
}

function keyPressed() {
   if(keyCode === UP_ARROW) {
     Matter.Body.applyForce(paper.body,paper.body.position,{x:63,y:-63})

   }
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground;
var paper1;

function preload(){
  boximage = loadImage('sprites/bin.png');
}


function setup() {
  createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,650,1700,20);
	box2 = new Box(1265,580,30,120);
	box3 = new Box(1120,580,30,120);
	box1 = new Box(1200,625,150,30);
paper = new Paper(100,300);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
  image(boximage,1090,450,200,200);

drawSprites();{

}
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}


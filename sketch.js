const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var paper, ground, edge, dustbin, paperLauncher;

function preload(){}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	paper = new Paper(100,675,50);
	dustbin = new Dustbin(800,580,10,10);
//	ground = new Ground(550,680,1000,20);
ground = new Ground(width/2,600,width,20)
	paperLauncher = new Launcher(paper.body, {x:300, y:100});
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  text(mouseX + ";" + mouseY, 200,200);
  ground.display();
  paper.display();
  dustbin.display();
  paperLauncher.display();
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    paperLauncher.fly();	
}
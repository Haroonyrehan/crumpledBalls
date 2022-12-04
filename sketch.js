
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftWall, rightWall;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		restitution: 0,
		density:1.2,
		friction:0
	}
	ball = Bodies.circle(100,400,25,ball_options)
	World.add(world,ball)

	ground = new Ground(550,790,1100,20)
	leftWall = new Ground(650,730,15,100)
	rightWall = new Ground(800,730,15,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  fill("yellow")
  ellipse(ball.position.x,ball.position.y,25,25)
  
  ground.display()
  leftWall.display()
  rightWall.display()
   
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(ball,{x:0,y:0},{x:+120,y:-90})
	}
}




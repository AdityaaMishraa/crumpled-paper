
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
function setup() {
	createCanvas(800, 300);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(50,150,30);
	ground=new Ground(width/2, 300, width, 20);
	// console.log(paper);

	Engine.run(engine);
 	 

}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();

  noStroke();
  fill("white")

  boxPosition=width/2+100
  boxY=232;

  boxleftSprite=rect(boxPosition, boxY, 15,120);

  boxLeftBody = Bodies.rectangle(boxPosition, boxY, 15,120 , {isStatic:true} );
  World.add(world, boxLeftBody);

  boxBase=rect(boxPosition+100, boxY+53, 200,15);


  boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+53, 200,15 , {isStatic:true} );
  World.add(world, boxBottomBody);

  boxleftSprite=rect(boxPosition+200 , boxY, 15,120);


  boxRightBody = Bodies.rectangle(boxPosition+200 , boxY, 15,120 , {isStatic:true} );
  World.add(world, boxRightBody);

  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
	Body.applyForce(paper.body,paper.body.position,{x:115,y:-115});
  }
}






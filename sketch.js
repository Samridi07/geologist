const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

	var sandparticles1;
	var hammer1;
	var ironbodies1;
	var rubber1;
	var stone1;

function setup() {
	var canvas = createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;
	
	sandparticles1 = new sandparticles(70,70,50,50);
	sandparticles2 = new sandparticles(68,70,50,50);
	sandparticles3 = new sandparticles(66,70,50,50);
	sandparticles4 = new sandparticles(40,70,50,50);
	sandparticles5 = new sandparticles(48,70,50,50);
	sandparticles6 = new sandparticles(46,70,50,50);
	hammer1 = new hammer(810,160,70,70);
	ground = new Ground(600,height,1200,20);
	ironbody1 = new ironbody(810,350);
	rubber1 = new rubber(810,220);
	stone1 = new stone(810,260,);
	}


function draw() {
  background(0);
  Engine.update(engine);
  sandparticles1.display();
  sandparticles2.display();
  sandparticles3.display();
  sandparticles4.display();
  sandparticles5.display();
  sandparticles6.dispaly();
  hammer1.dispaly();
  ironbody1.dispaly();
  stone1.dispaly();
  rubber1.display();
  ground.display();
 }




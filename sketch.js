const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;
//var myPlayer;
var ground, plr, surface, time=60;
var oxy;

function preload(){
	bg=loadImage('bg.png');
	plrIMG =loadImage('player.png')
}

function setup() {
	createCanvas(1000, 800);

	engine = Engine.create();
	world = engine.world;

	//myPlayer = new Player();

	//create player, ground, surface, 
	plr=createSprite(180, 370, 200, 190);
	plr.addImage(plrIMG);

	//oxy
	oxy=createSprite(200, 200, 100, 30);
	oxy.shapeColor='red';

	ground = createSprite(500, 880, 1000, 40);
	ground.visible = false;
	//ground.shapeColor=rgb(78, 111, 173);
	//World.add(world, ground);

	Engine.run(engine); 
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(bg);
 
  time>=0;

  //the players y position moves with the mouse if its in the limit
  if(mouseY>341 /*&&gamestate=play*/){
  	plr.y = mouseY;
  }

  //refill oxygen
  //another idea is the longer the player is up, the moe oxygen gets filled
//   if(keyDown(UP_ARROW) /*&&gamestate=play*/){
// 	  oxygenlevel = 100;
// 	  time = time-10;
// 	  text('you have 100% oxygen, but you have lost 10 seconds', 500, 200)
//   }

  //oxy
  if(keyIsDown(UP_ARROW) && oxy.width<100){
	  oxy.width=oxy.width+0.5;
  }
  console.log('oxygen: '+oxy.width)
  if(oxy.width<=20){
	  text('WARNING! LOW OXYGEN', 480, 220);
	  playSound('alarm')
  }
  
  //make time pass and oxy decrease
  if(frameCount%25===0){
	  time = time-1;
	  oxy.width=oxy.width-0.5;
  }
  
  //if time runs out then display text and start endstate
  if(time===0){
	  console.log('the time===0 condition works')  

	  text('You have collected '+plastic+' plastic polluters and saved '+fish+' fish', 400, 400)
	  if(plastic>50){
		  text('Congratulations!', 490, 300)
	  }

	  //gamestate=end;
  }
  
  //display time left
  text('Countdown: '+time, 900, 20)

  //the player cant go down
  plr.collide(ground);
 
  //rect(ground.position.x, ground.position.y, 1000, 20)
  //myPlayer.display();

  //display the sprites
  drawSprites();
}




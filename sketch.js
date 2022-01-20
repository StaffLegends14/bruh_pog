
var gameState = 0;

var BG_main,BG_console,BG_the;

var hitman,Hitman,pman;

var Start,start,control,controled;

var left,right,uo,down,l,r,u,d;

var lvl = 69;

var man,manimg;

var lazabeam,lever,Lazer,key;

var Bruh;

var keyState = 1;

var stab,stabber,bitsadinnit;

var ww,ww2,w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20;

var bullet,bgroup;

function setup() {

	createCanvas(300, 200);

	Bruh = createSprite(width/2 + 5,height - 60,40,40);
	Bruh.visible = false;
	//Bruh.debug = true;

	left = createSprite(width/2,height/9.9,40,20);
	left.addImage("left",l);
	left.scale = 0.15

	right = createSprite(width/2,height/3,40,20);
	right.addImage("right",r);
	right.scale = 0.15

	up = createSprite(width/2,height/1.7,40,20);
	up.addImage("up",u);
	up.scale = 0.15

	down = createSprite(width/2,height - 30,40,20);
	down.addImage("down",d);
	down.scale = 0.15

	Hitman = createSprite(width/2,height/2,40,20);
	Hitman.addImage("hit",hitman);
	Hitman.scale = 0.09;
	Hitman.setCollider("rectangle",-20,-10,Hitman.width,Hitman.height);
	//Hitman.debug = true;
	
	start = createSprite(width/2,height/2,70,20);
	start.setCollider("rectangle",0,0,start.width * 4,start.height * 4);
	start.addImage("start",Start);
	start.scale = 0.3
	//start.debug = true;

	key = createSprite(random(1,300),random(1,200),1,1);
	key.setCollider("rectangle",0,0,key.width,key.height);
	//key.debug = true;

	control = createSprite(width/2,height - 60,70,20);
	control.setCollider("rectangle",0,0,control.width * 5,control.height * 4.5);
	control.addImage("console",controled);
	control.scale = 0.3;
    //control.debug = true;

	man = createSprite(width - 20,Hitman.y,10,10);
	man.addImage("upman",manimg);
	man.visible = false;
	man.scale = 0.07;

	bitsadinnit = new Group();
	bgroup = new Group();
    
}

function preload()
{
	BG_main = loadImage("VFX/BG_start.png");

	BG_the = loadImage("./VFX/BG_end.png")

	Start = loadImage("VFX/start.png");

	hitman = loadImage("VFX/hitman.png");

	pman = loadImage("VFX/upman.png");

	l = loadImage("./VFX/LEFT.png");

	r = loadImage("./VFX/RIGHT.png");

	u = loadImage("./VFX/UP.png");

	d = loadImage("./VFX/DOWN.png");

	stabber = loadImage("./VFX/Dagger_right.png");

	ww = loadImage("./VFX/Wall.png")

	ww2 = loadImage("./VFX/Sidewall.png")

	lazabeam = loadImage("./VFX/Laser.png")

	manimg = loadImage("./VFX/upman.png");

	BR = loadImage("./VFX/Bullet_right.png");

	controled = loadImage("./VFX/Help.png");


	BG_console = loadImage("./VFX/BG_about.png");

}


function draw() {

	controls();

	if(gameState === 0){
  background(BG_main);

  Hitman.visible = false;
  left.visible = false;
  right.visible = false;
  up.visible = false;
  down.visible = false;

  if(mousePressedOver(start)){
	gameState = 1;

	control.visible = false

	Hitman.addImage("hit",hitman);
	Hitman.scale = 0.09;
	Hitman.setCollider("rectangle",-20,-10,Hitman.width,Hitman.height);
	Hitman.x = width/2;
	Hitman.y = height/2;

}

if(mousePressedOver(control)){

	gameState = 10;

}

	}

	if(gameState === 1){
		background(0);
		start.visible = false;
		left.visible = true;
		right.visible = true;
		up.visible = true;
		down.visible = true;
		Hitman.visible = true;		

		if(keyDown("UP_ARROW")){
			Hitman.y = 119;
		  }

		  if(keyDown("RIGHT_ARROW")){
			Hitman.y = 65;
		  }

		  if(keyDown("LEFT_ARROW")){
			Hitman.y = 20;
		  }

		  if(keyDown("DOWN_ARROW")){
			Hitman.y = 169;
		  }

		  spawner();

		  if(frameCount % 2000 === 0){
              lvl = lvl - 10;
		  }

		  if(frameCount % 10000 === 0){
			  gameState = 3
		  }

		  if(bitsadinnit.collide(Hitman)){

			  gameState = 2;

			  bitsadinnit.destroyEach();

			  Hitman.x = 20;

			  left.visible = false;
		      right.visible = false;
		      up.visible = false;
		      down.visible = false;

			  start.visible = false;

			  background("./VFX/Start.png");

		  }

		console.log(mouseY);
	
	}

	if(gameState === 3){
		
		bitsadinnit.destroyEach();

		left.visible = false;
		right.visible = false;
		up.visible = false;
		down.visible = false;
		start.visible = false;

		Hitman.visible = true;

		w1 = new Wall(0 + 20,0 + 25);
		w2 = new sideWall(0 + 40,0 + 45);
		w3 = new Wall(0 + 60,0 + 65);
		w4 = new sideWall(0 + 80,0 + 45);

		lever = createSprite(60,45,10,10);

		if(Hitman.x < 0){
			gameState = 4;
			
			w1.sprite.destroy();
			w2.sprite.destroy();
			w3.sprite.destroy();
			w4.sprite.destroy();
			lever.destroy();

		}

		Hitman.collide(w1.sprite);
		Hitman.collide(w2.sprite);
		Hitman.collide(w4.sprite);
		Hitman.collide(lever);

		if(Hitman.collide(w3.sprite)){
            gameState = 1;
		}		

		if(Hitman.collide(lever) && keyState === 2){
            gameState = 0;
		}		

		console.log(mouseX + "," + mouseY)
		console.log(keyState)

		background("#280137");

		fill("black");
		textSize(40);
		text("ERROR 404",30,125);

	}

	if(gameState === 2){
		background("yellow");

		man.visible = true;

		Hitman.scale = 0.03 
		Hitman.addImage("hit",pman);

			man.y = Hitman.y

			bullets();

			if(Hitman.collide(bgroup)){
				gameState = 0;
				bgroup.destroyEach();

				start.visible = true;
				control.visible = true;
				Hitman.visible = false
				man.visible = false
			}

			if(Hitman.x > width){
			   gameState = 3;

			   Hitman.x = 0 + 10
			  Hitman.y = 0 + 10
			  Hitman.scale = 0.03 
			  Hitman.addImage("hit",pman);

			  Hitman.visible = false;
			  left.visible = false;
			  right.visible = false;
			  up.visible = false;
			  down.visible = false;

			   man.destroy();
			}

	}

	if(gameState === 4){
		background(BG_the);

		Hitman.destroy();

		if(mousePressedOver(Bruh)){
			window.location.reload();
		}
	}

	if(gameState === 10){
		background(BG_console);
		start.visible = false;
		control.visible = false;

		if(keyDown("ESC")){

			window.location.reload();

		}
	}
  
  drawSprites();
 
}

function spawner(){

	if(frameCount % lvl === 0){

		randoms = Math.round(random(1,4));

		switch(randoms) {
			case 1: stab = createSprite(20,119);
			        stab.addImage("stab",stabber);
					stab.scale = 0.05;
					stab.velocityX = 1;
					break;
			case 2: stab = createSprite(20,65);
			        stab.addImage("stab",stabber);
					stab.scale = 0.05;
					stab.velocityX = 1;
					break;
			case 3: stab = createSprite(20,20);
			        stab.addImage("stab",stabber);
					stab.scale = 0.05;
					stab.velocityX = 1;
					break;
			case 4: stab = createSprite(20,169);
			        stab.addImage("stab",stabber);
					stab.scale = 0.05;
					stab.velocityX = 1;
			default: break
		  }

		  bitsadinnit.add(stab);

	}

}

function controls(){
	if(keyDown("S")){
		Hitman.y = Hitman.y + 2;
	}

	if(keyDown("W")){
		Hitman.y = Hitman.y - 2;
	}

	if(keyDown("D")){
		Hitman.x = Hitman.x + 2;
	}

	if(keyDown("A")){
		Hitman.x = Hitman.x - 2;
	}
}

function bullets(){

	if(frameCount % 20 === 0){
	bullet = createSprite(width/2 + 7,height/2 - 15);
	bgroup.add(bullet);
  
	bullet.y = man.y + 3;
      bullet.x = width - 25;
      bullet.velocityX = -5;
      bullet.addImage("bullet",BR);
      bullet.scale = 0.02
	}

}




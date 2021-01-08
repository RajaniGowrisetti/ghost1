var Door, Door_Image, Door_Groups
var tower, towerImg;
var Ghost, Ghost_image, Ghost_Image2
var climbers, Climbers_image

function preload() {
towerImg=loadImage("tower.png");
Door_Image=loadImage("door.png");
Climbers_image = loadImage("climber.png");
Ghost_image = loadImage("ghost-jumping.png");
Ghost_Image2 = loadImage("ghost-standing.png");
}

function setup() {
createCanvas(600,600);
tower = createSprite (300,300);
tower.addImage("tower.png",towerImg);
tower.velocityY=1;
Ghost = createSprite (200,200,50,50);
Ghost.addImage("Ghost",Ghost_image);
Ghost.scale= 0.3
}

function draw() {
background("white")
if (tower.y > 400){
tower.y = 300
}
if(keyDown("left")) {
Ghost.x=Ghost.x-3
}

if(keyDown("right")) {
Ghost.x=Ghost.x+3
}
  
if(keyDown("space")) {
Ghost.velocityY=-5
}
Ghost.velocityY= Ghost.velocityY+0.8
  
SpawnDoors()
drawSprites();

  
  

}

function SpawnDoors (){
if (frameCount%260===0) {
Door=createSprite (200,-50)

climbers=createSprite (200,10)
Door.addImage(Door_Image);
climbers.addImage(Climbers_image)
Door.velocityY=1;
Door.lifetime=600
climbers.velocityY=1
climbers.x=Door.x;
climbers.lifetime=600
DoorsGroup = new Group();
DoorsGroup.add(Door);
ClimbersGroup = new Group();
ClimbersGroup.add(climbers)
}

}


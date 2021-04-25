var ninja,ninjaimage,bgimg1,ground,healthbar,obstaclecoures


function preload(){
ninjaimage=loadAnimation("images/Ninja1.png","images/Ninja2.png","images/Ninja3.png","images/Ninja4.png","images/Ninja5.png","images/Ninja6.png","images/Ninja sword1.png","images/Ninja sword2.png","images/Ninja sword3.png","images/Ninja sword4.png","images/Ninja sword5.png")
healthbarimage=loadImage("images/Health bar3.jpg",("images/Health bar1.jpg",("images/Health bar4.jpg",("images/Health bar7.jpg")
obstaclecouresimage=loadImage("images/obstacle coures 1.jpg","images/obstacle coures 2.jpg","images/obstacle coures 3.jpg")

bgimg1=loadImage("images/Fantasy Forest.jpg")


}




function setup(){
createCanvas(1500,500);
ninja=createSprite(100,350);
ninja.addAnimation("ninja",ninjaimage)


ground=createSprite(0,490,1500,10)
ground.visble=false


healthbar=createSprite(100,15);
healthbar.addAnimation("health",healthimage)

obstaclecoures=createSprite(0,390,1200,5)
obstaclecoures.visble=true

}




function draw(){
background(bgimg1)
ground.visble=false
ground.velocityX=-3;
//infinite ground
if(ground.x<0){
  ground.x=ground.width/2

  if(KeyIsDown(UP_ARROW)&& player.index !== null){
   player.distance +=10
   player.update();
  }
}

ninja.collide(ground)



drawSprites()

}
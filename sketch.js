function preload (){
    snow=loadImage("snow1.jpg")
    girl=loadImage("Girl in snow.jpg")
    snowfall=loadImage("snow5.webp")
  
}

function setup() {
  createCanvas(800,400);
  snowImage = createSprite(400, 200, 50, 50);
  snowImage.addImage(snow)
  girlImg = createSprite(400,340,75,75) 
  girlImg.addImage(girl)
  girlImg.scale = 0.2; 
  snowfallImg = createSprite(400,100,10,10)
  snowfallImg.addImage(snowfall)
  snowfallImg.scale = 0.1
   snowfall2Img = createSprite(600,100,10,10)
  snowfall2Img.addImage(snowfall)
  snowfall2Img.scale = 0.1
  snowfall3Img = createSprite(250,100,10,10)
  snowfall3Img.addImage(snowfall)
  snowfall3Img.scale = 0.1
  edges = createEdgeSprites();
}

function draw() {
  background(255,255,255);
  
  if(keyDown("up")){
    girlImg.velocityY = -3
  }
  girlImg.velocityY = girlImg.velocityY+0.5
  girlImg.collide(edges[3]) 

  snowfallImg.velocityY = 3
  snowfall2Img.velocityY = 3
  snowfall3Img.velocityY = 3


  drawSprites();
}
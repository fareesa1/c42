const { lightblue } = require("color-name")

function preload(){
  layer1 = loadImage("stringstar fields/background_0.png")
  layer2 = loadImage("stringstar fields/background_1.png")
  layer3 = loadImage("stringstar fields/background_2.png")
  groundImage = loadImage("stringstar fields/ground.png")
}

function setup(){
  createCanvas(800,600)
l1 = createSprite(400,300)
l1.addImage(layer1)
l1.scale = 3;

l2 = createSprite(400,300)
l2.addImage(layer2)
l2.scale = 3


l3 = createSprite(400,300)
l3.addImage(layer3)
l3.scale = 3
 

ground = createSprite(400,300)
ground.addImage(groundImage)
ground.scale = 3
}

function draw(){
  background("black")
  

  drawSprites()
}

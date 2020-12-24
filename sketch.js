var spongebobimg, tornadoimg, cashimg, bgimg, homeimg;
var bob, tornado, cash, home;
var c1, c2, c3, c4, c5, c6, c7, c8, c9, c10;

function preload(){
  spongebobimg = loadImage("Images/spongebob.png")
  cashimg = loadImage("Images/cash.png")
  bgimg = loadImage("Images/bg.jpg")
  pineapleimg = loadImage("Images/pineaple 1.png")
  tornadoimg = loadImage("Images/tornado.png")
}
function setup() {
  createCanvas(1200,600);
  home=createSprite(200, 800, 10,10)
  home.addImage(pineapleimg)

  bob=createSprite(500, 800, 10,10)
  bob.addImage(spongebobimg)

  c1=createSprite(800, 800, 10,10)
  c1.addImage(cashimg)

  c2=createSprite(80, 800, 10,10)
  c2.addImage(cashimg)
  c3=createSprite(800, 800, 10,10)
  c3.addImage(cashimg)
  c4=createSprite(800, 800, 10,10)
  c4.addImage(cashimg)
  c5=createSprite(800, 800, 10,10)
  c5.addImage(cashimg)
  c6=createSprite(800, 800, 10,10)
  c6.addImage(cashimg)
  c7=createSprite(800, 800, 10,10)
  c7.addImage(cashimg) 
  c8=createSprite(800, 800, 10,10)
  c8.addImage(cashimg) 
  c9=createSprite(800, 800, 10,10)
  c9.addImage(cashimg)  
  c10=createSprite(800, 800, 10,10)
  c10.addImage(cashimg)
  
  
}

function draw() {
  background(bgimg);  
  spawnTornado();
  drawSprites();
}


function spawnTornado(){
  if(frameCount%100==0){
  var tornado=createSprite(1200,600, 10,10)
  tornado.addImage(tornadoimg)
}
}
var KLA
var coin
var ground
var gameState= "play"
function preload(){
kLAImg=loadImage("KLA.jfif,");
  GroundImg=loadImage("download.png");
  coinImg=loadImage("coin.png");
}
function setup() {
  createCanvas(300,600)
  ground=createSprite(300,300)
 ground.addImage("ground1",GroundImg);
  ground.velocityY=1
  KLA = createSprite(200,200,50,50);
  KLA.scale = 0.3; 
  KLAaddImage("KLA",KLAImg);
  KLA=console.log("KLA")
}
function draw() {
 background(225)
   if (gameState === "play") {
    if(keyDown("left_arrow")){
      KLA.x = KLA.x - 3;
    }
    if(keyDown("right_arrow")){
      KLA.x = KLA.x + 3;
    }
    KLA.velocityY = KLA.velocityY + 0.8
       coin.x = Math.round(random(120,400));
    drawSprites();
  }
}

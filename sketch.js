var ISSimg, bg, craftN, craftB, craftL, craftR;
var dockingStatus = false;
var iss;

function preload() {
  ISSimg = loadImage("iss.png");
  bg = loadImage("spacebg.jpg");
  craftN = loadImage("spacecraft1.png");
  craftB = loadImage("spacecraft2.png");
  craftL = loadImage("spacecraft3.png");
  craftR = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(1000,500);

  iss = createSprite(500, 250, 50, 50);
  iss.addImage(ISSimg);

  craft = createSprite(435, 320, 50, 50);
  craft.x = Math.round(random(435,550));
  //craft.y = Math.round(random(280,400));
  craft.addImage(craftN);
  craft.scale = 0.2;
}

function draw() {
  background(bg);

  if(!dockingStatus) {
    if(keyDown("left_arrow")) {
      craft.x -=1;
      craft.addImage(craftL);
    } 

    if(keyDown("right_arrow")) {
      craft.x +=1;
      craft.addImage(craftR);
    } 

    if(keyDown("up_arrow")) {
      craft.y -=1;
      craft.addImage(craftB);
    } 

    if(keyDown("down_arrow")) {
      craft.y +=1;
    } 
  }

  if(craft.x == 435 && craft.y == 320) {
    dockingStatus = true;
  }

  if(dockingStatus) {
    textSize(30);
    fill("red");
    text("Docking Successful!", 360, 450);
  }

  drawSprites();
}
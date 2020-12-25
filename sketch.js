var fixedRect, movRect, obj1, obj2, obj3;

function setup() {
  createCanvas(1200, 800);
  
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "blue";
  //fixedRect.debug = true;

  movRect = createSprite(400, 200, 80, 30);
  movRect.shapeColor = "blue";
  //movRect.debug = true;

  //obj1 = createSprite(600, 400, 50, 80);
  //obj1.shapeColor = "blue";
  //obj1.debug = true;

  obj2 = createSprite(950, 150, 50, 80);
  obj2.shapeColor = "blue";
  //obj2.debug = true;

  obj3 = createSprite(950, 700, 50, 80);
  obj3.shapeColor = "blue";
  //obj3.debug = true;

  obj2.velocityY = 5;
  obj3.velocityY = -5;

}

function draw() {
  background(255,255,255); 
  
  movRect.x = World.mouseX;
  movRect.y = World.mouseY;

  bounceOff(obj2, obj3);

  if(isTouching(movRect, fixedRect)) {
    movRect.shapeColor = "purple";
    fixedRect.shapeColor = "purple";
  } else {
    movRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  drawSprites();
}
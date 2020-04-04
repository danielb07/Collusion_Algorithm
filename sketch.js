var  fixedrectangle, movingrectangle
function setup() {
  createCanvas(800,400);
  fixedrectangle =createSprite(400, 200, 50, 50);
    fixedrectangle.shapeColor="blue";
  movingrectangle =createSprite(200,200,50,50);
    movingrectangle.shapeColor="blue";
}

function draw() {
  background(255,255,255);  

  movingrectangle.x = World.mouseX;
  movingrectangle.y = World.mouseY;

  if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2&&
    fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2&&
    movingrectangle.y-fixedrectangle.y<movingrectangle.height/2+fixedrectangle.height/2&&
    fixedrectangle.y-movingrectangle.y<movingrectangle.height/2+fixedrectangle.height/2){
      movingrectangle.shapeColor="pink";
      fixedrectangle.shapeColor="pink";
    }
    else{
      movingrectangle.shapeColor="blue";
      fixedrectangle.shapeColor="blue";
    }
  drawSprites();
}
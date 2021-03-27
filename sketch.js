var canvas;
var music;
var box1,box2,box3,box4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);

    //create 4 different surfaces
    box1 = createSprite(100,750,150,20);
    box1.shapeColor = "red";

    box2 = createSprite(300,750,150,20);
    box2.shapeColor = "green";

    box3 = createSprite(500,750,150,20);
    box3.shapeColor = "yellow";

    box4 = createSprite(700,750,150,20);
    box4.shapeColor = "blue";

    //create box sprite and give velocity

    ball = createSprite(400,400,50,50);
    ball.shapeColor = "white";

}

function draw() {
    background("black");
    //create edgeSprite

    ball.x = World.mouseX;
    ball.y = World.mouseY;

    //add condition to check if box touching surface and make it box

  if(box1.isTouching(ball)){
      ball.shapeColor = "red";
  }

  if(box2.isTouching(ball)){
      ball.shapeColor = "green";
  }

  if(box3.isTouching(ball)){
      ball.shapeColor = "yellow";
  }

  if(box4.isTouching(ball)){
      ball.shapeColor = "blue"
  }

    drawSprites();
}

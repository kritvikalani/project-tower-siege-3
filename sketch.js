const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score;
var backgroundImg;

function preload() {
  //backgroundImg = loadImage("sprites/bg.png");
  getBackgroundImg();
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  stand= new Ground(390,380,200,20);

  polygon= new Polygon(200,100,20)

  sling= new SlingShot(polygon.body, {x: 100, y:300})

  score= 0

  //level5
  block1= new Box(330,350,30,40)
  block2= new Box(360,350,30,40)
  block3= new Box(390,350,30,40)
  block4= new Box(420,350,30,40)
  block5= new Box(450,350,30,40)
  //level4
  block6= new Box(345,310,30,40)
  block7= new Box(375,310,30,40)
  block8= new Box(405,310,30,40)
  block9= new Box(435,310,30,40)
  //level3
  block10= new Box(355,270,30,40)
  block11= new Box(385,270,30,40)
  block12= new Box(415,270,30,40)
  //level2
  block13= new Box(365,230,30,40)
  block14= new Box(395,230,30,40)
  //level1
  block15= new Box(380,190,30,40)

  stand.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();

  polygon.display();

  Engine.run(engine)
}

function draw() {
  if (backgroundImg) 
  background(backgroundImg);
  
  Engine.update(engine);


  noStroke();
  textSize(25);
  fill("white");
  text("Score= " + score, 330, 50)

  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  polygon.display();
  sling.display();

  //fly();
  drawSprites();

  getBackgroundImg();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, {x: mouseX, y:mouseY})
}

function mouseReleased() {
  sling.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    sling.attach(polygon.body)
  }
}

async function getBackgroundImg() {
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJ= await response.json();
  //console.log(responseJ);

  var dt = responseJ.datetime
  //console.log(dt)

  var hour= dt.slice(11,13)
  console.log(hour)
  
  if (hour>=6 && hour<=19){
    var bg= "Day.jpg"
}
else {
    bg= "Night.jpg"
}
backgroundImg = loadImage(bg)

//console.log(backgroundImg)
}
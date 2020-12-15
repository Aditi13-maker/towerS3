const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var gameState = "onSling";
var score=0;
var background1;
//var str="Hello world!";
//var res=str.slice(0,5)
function preload() {
   //backgroundImg = loadImage("sprites/bg.png");
   Day();

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  polygon=new Polygon(100,200,40,40)
  slingshot = new SlingShot(polygon.body,{x:100, y:200});
  ground=new Ground(375,350,250,10)
  ground1=new Ground(580,200,200,10)
  box01=new Box3(325,330,50,40)
  box02=new Box3(375,330,50,40)
  box03=new Box3(395,330,50,40)
  box04=new Box3(410,330,50,40)
  box05=new Box2(338,287,50,40)
  box06=new Box2(380,287,50,40)
  box07=new Box2(420,287,50,40)
  box08=new Box1(353,257,50,40)
  box09=new Box1(400,257,50,40)
  box10=new Box(375,227,50,40)

  box11=new Box2(530,140,30,30)
  box12=new Box2(580,140,30,30)
  box13=new Box2(630,140,30,30)
  box14=new Box1(550,90,30,30)
  box15=new Box1(600,90,30,30)
  box16=new Box(570,50,20,20)
  
}

function draw() {
  if(background1)
  {
      background(background1);
}
  Engine.update(engine);
  //background("grey"); 
  fill("black")
  stroke(3)
  text("Score:"+score,740,40)
  polygon.display()
  slingshot.display()
  ground.display()
  ground1.display()
  fill("teal")
  box01.display()
  box01.score()
  box02.display()
  box02.score()
  box03.display()
  
  box03.score() 
  box04.display() 
  box04.score()
  fill("lightblue")
  box05.display()
  box05.score()
  box06.display()
  box06.score()
  box07.display()
  box07.score()
  fill("lightgreen")
  box08.display()
  box08.score()
  box09.display()
  box09.score()
  fill("lightpink")
  box10.display()
  box10.score()
  fill("teal")
  box11.display()
  box11.score()
  box12.display()
  box12.score()
  box13.display()
  box13.score()
  fill("lightblue")
  box14.display()
  box14.score()
  box15.display()
  box15.score()
  fill("lightpink")
  box16.display()
  box16.score()


  
 

}

function mouseDragged(){
  if (gameState!=="launched"){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}}

function mousePressed(){
  if(keyCode===32){
    gameState="launched"
      slingshot.attach(polygon.body)
  }
}
function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
  }
}
async function Day(){

  var response=await fetch("http://worldclockapi.com/api/json/est/now")
  var responseJSON=await response.json()
 
  var datetime=responseJSON.datetime
  var str="Hello world!";
  var res=str.slice(0,5)
  console.log(responseJSON)
  console.log("a")
  if(hour>=06&hour<=18){
      bg="sprites/bg.png"

  }
  else{
      bg="sprites/bg2.jpg"
  }
  background1=loadImage(bg)


}

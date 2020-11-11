const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var en,w,ob

function setup() {
  createCanvas(1200,400);
  en=Matter.Engine.create()
  wd=en.world
  
ground=new Ground(600,390,1200,20)
  box1=new Box(700,320)
 box2=new Box(920,320)

 pig1=new Pig(810,320)

 bird1=new bird(100,100)
 
}

function draw() {
  background(0);
  Matter.Engine.update(en)  
  fill ("brown")


box1.display()
box2.display()
ground.display()
pig1.display()
bird1.display()
}
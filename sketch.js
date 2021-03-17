const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,rubberObj,sandObj2,sandObj3,sandObj1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(180,100,50,100);
    box2 = new Box2(200,300,50,50);
   
    rubberObj = new Circle(150,200,40);

    sandObj1 = new Sand(180,200,10);
    sandObj2 = new Sand(160,200,10);
    sandObj3 = new Sand(170,200,10);

    ground = new Ground(200,390,400,15)
}

function draw(){
    background("lightblue");
    Engine.update(engine);

    box1.display();
    box2.display();

    rubberObj.display();
    rubberObj.display();
    
    sandObj1.display();
    sandObj2.display();
    sandObj3.display();

    ground.display();

   // drawSprites();
}
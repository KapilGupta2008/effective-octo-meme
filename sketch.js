const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;
function setup(){
    var canvas = createCanvas(400,400);
    engine=Engine.create();
    world=engine.world;

    var options=
    {
        isStatic:true
    }
    object=Bodies.rectangle(200,390,400,20,options);
    World.add(world,object);
   // console.log(object.position.x);
    var a=
    {
        restitution:0.8
    }

   ball = Bodies.circle(300,10,20,a);
   World.add(world,ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    //rect(200,200,50,50);
    fill("brown");
    rect(object.position.x,object.position.y,400,20);
    ellipseMode(RADIUS);
    fill("blue");
    ellipse(ball.position.x,ball.position.y,20,20);
}

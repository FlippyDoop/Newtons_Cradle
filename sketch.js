const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constrained = Matter.Constraint;


function setup(){
    createCanvas(900,600);
    engine = Engine.create();
    world = engine.world;

    //ground
    

    //box
    box1 = new BoxMaker(465, 100, 350, 15)

    //ball
    ball1 = new BallMaker(300, 100, 90, 90);
    ball2 = new BallMaker(360, 100, 90, 90);
    ball3 = new BallMaker(450, 100, 90, 90);
    ball4 = new BallMaker(540, 100, 90, 90);
    ball5 = new BallMaker(700, 90, 90, 90);
    

    //rope
    rope1 = new RopeMaker(ball1.ball, {x: 300, y: 100});
    rope2 = new RopeMaker(ball2.ball, {x: 360, y: 100});
    rope3 = new RopeMaker(ball3.ball, {x: 450, y: 100});
    rope4 = new RopeMaker(ball4.ball, {x: 540, y: 100});
    rope5 = new RopeMaker(ball5.ball, {x: 630, y: 100});
}

function draw(){
    background("grey")
    Engine.update(engine);

    //ground
 

    //box
    box1.display();

    //ball
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    

    //rope
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
}
















































const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, ball, box1, wreckline;
var wall1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, 400, 1200, 50);
    wall1 = new Ground(-20, 200, 10, 2400);
    wall1 = new Ground(1200, 200, 10, 12000);
    ball = new WreckBall(450, 300, 30);
    box1 = new Box(660, 300, 86, 74);
    box2 = new Box(630, 226, 74, 74);
    box3 = new Box(660, 152, 74, 74);
    box4 = new Box(660, 78, 74, 74);
    box5 = new Box(760, 300, 86, 74);
    box6 = new Box(780, 226, 74, 74);
    box21 = new Box(705, 226, 74, 74);
    box7 = new Box(760, 152, 74, 74);
    box8 = new Box(760, 78, 74, 74);
    box9 = new Box(580, 300, 74, 74);
    box10 = new Box(840, 300, 74, 74);
    box11 = new Box(705, 4, 74, 74);
    // box12 = new Box(674, -320, 74, 74);
    // box13 = new Box(674, -480, 74, 74);
    // box14 = new Box(674, -560, 74, 74);
    // box15 = new Box(674, -640, 74, 74);
    // box16 = new Box(674, -720, 74, 74);
    // box17 = new Box(674, -800, 74, 74);
    // box18 = new Box(674, -880, 74, 74);
    // box19 = new Box(674, -960, 74, 74);
    // box20 = new Box(674, -1040, 74, 74);

    wreckline = new String({x: 450, y: 100}, ball.body, 200);
}

function draw(){
    Engine.update(engine);
    background('white');
    ground.display();
    wreckline.display();
    ball.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    // box12.display();
    // box13.display();
    // box14.display();
    // box15.display();
    // box16.display();
    // box17.display();
    // box18.display();
    // box19.display();
    // box20.display();
    box21.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}


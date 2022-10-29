//variables. Ball is object.
var ball = {    //<- declare var
  x: 620,       //<- initialize var (give value - a.k.a. name parameter (x), then give value(600))
  y: 350,
  xspeed: 6,    //<- x, y, xspeed, yspeed:  parameters.
  yspeed: -5    //<- 600, 350, 6, -5:       arguments.
};

//var & parameters rightPaddle
var a = 980;  // x as
var b = 300;  // y as
var c = 40;   // width
var d = 130;  // height

//var & parameters leftPaddle
var leftPaddle;
var e = 300;  // x as
var f = 300;  // y as

//var score left 
var scoreLeft = 0;

//var score right 
var scoreRight = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {            //<- function (parameter)
  background(20, 20, 20);    //<- function with (arguments)
  display();
  move();
  bounce();
  ballGoal();
  scoreDesign();
  scoreBoard();
  ballStopLP();
  ballStopRP();
  rightPaddle();
  leftPaddle();
}

//ball
function display() {
  stroke(0, 130, 30);
  fill(0, 130, 30);
  ellipse(ball.x, ball.y, 40, 40);
}

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

function bounce() {
  if (ball.y > windowHeight - 20 || ball.y < 0 + 20) {
    ball.yspeed = ball.yspeed * -1;
    if (ball.xspeed < 0) {
      ball.xspeed = random(-4, -8);
    } else {
      ball.xspeed = random(4, 8);
    }
    //console.log(ball.xspeed) <- check why  ball dissapeared from windowheight screen
  }
}

function ballGoal() {
  if (ball.x > windowWidth - 20 || ball.x < 0 + 20) {
    ball.xspeed = 0;
    ball.yspeed = 0
  }
}

//score board point system
function scoreDesign() {
  stroke(200, 100, 50);
  fill(200, 100, 50);
  text(scoreLeft + " - " + scoreRight, 620, 50);
  textSize(35);
}

//restart ball when goal
function scoreBoard() {
  if (ball.x > windowWidth - 20) {
    scoreLeft += 1;
    ball.x = 620;
    ball.y = 350;
    ball.xspeed = -6;
    ball.yspeed = -5;
  }
  if (ball.x < 0 + 20) {  
    scoreRight += 1;
    ball.x = 620;
    ball.y = 350;
    ball.xspeed = 6;
    ball.yspeed = -5;
  }
}

//ball intersection with paddles
function ballStopLP() {
  if (ball.x > e && ball.x - 20 <= e + c && ball.y > f && ball.y < f + d) {
    ball.xspeed *= -1;
    console.log(ball.xspeed)
  }
}

function ballStopRP() {
  if (ball.x < a + c && ball.x + 20 >= a && ball.y > b && ball.y < b + d) {
    ball.xspeed *= -1;
  }
}

// ballStopPLP & ballStopRP took me a lot of time to figure out. These are my previous attempts: 

//   if (ball.x > e && ball.x < e + 40)
//   ball.xspeed *= -1;
//   ball.yspeed *= -1;

//   if (ball.y > e && ball.y < e + 40)
//   ball.xspeed *= -1;
//   ball.yspeed *= -1;

//   var distance = dist(ball.x, ball.y, leftPaddle.x, leftPaddle.y);
//   if (distance < 20 + c/2) {
//     console.log("hit");
//     ball.xspeed = ball.xspeed *-1;

// function ballstopRP(){
//   if (ball.x > a && ball.x < a + 40)
//   ball.xspeed *= -1;
//   ball.yspeed *= -1;
// }

//rightPaddle
function rightPaddle() {
  stroke(100, 200, 50);
  fill(100, 200, 50);

  if (keyIsDown(UP_ARROW) && b > 0) {
    b -= 7;
  } else if (keyIsDown(DOWN_ARROW) && b < windowHeight - d) {
    b += 7
  }
  rect(a, b, c, d);
}

//leftPaddle
function leftPaddle() {
  stroke(100, 200, 50);
  fill(100, 200, 50);

  if (keyIsDown(87) && f > 0) {
    f -= 7;
  } else if (keyIsDown(83) && f < windowHeight - d) {
    f += 7
  }
  rect(e, f, c, d);
}






//NOTES:
  // om voor bal stuiter hoeken te definieren voor de bal, Google "calculate angle of view "
  // verdiepen in variabelen, if else, key is pressed, funtions, array, bal laten bewegen.
  // keyTyped, keyReleased

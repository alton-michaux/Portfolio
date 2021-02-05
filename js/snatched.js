//Star array
var xPos = [45, 100, 180, 260, 350, 140, 480];
var yPos = [230, 170, 150, 220, 280, 160, 200];

//UFO variable
var x2Pos = 423;
var y2Pos = 247;
//ufo speed
var speed = 2;

//Moon variable
var x3Pos = 15;
var y3Pos = 75;

//Setup
function setup() {
  // create your canvas and define size here it's set to 500 x 500px you can also set any static shapes that won't need to be drawn here.
  createCanvas(500, 500);
}
setup();
// Const Functions
function twoTrees() {
  for (var t = 15; t < 500; t += 74) {
    for (var to = 21; to < 500; to += 73) {
      fill(153, 115, 20); //tree 1 trunk
      rect(t, 305, 10, 95);

      fill(42, 158, 32); //tree 1 top
      ellipse(to, 297, 67, 20);

      fill(153, 115, 20); //tree 2 trunk
      rect(t + 30, 336, 7, 65);

      fill(42, 158, 32); //tree 2 top
      ellipse(to + 30, 328, 38, 28);
    }
  }
}

function star() {
  noStroke();

  for (var i = 0; i < xPos.length; i++) {
    fill(255, 242, 0); //star
    ellipse(xPos[i], yPos[i], 5, 5);
  }
}

function ufo() {
  fill(143, 143, 139); //ufo
  ellipse(x2Pos, y2Pos, 60, 10);

  fill(247, 247, 242); //search beam
  triangle(x2Pos, y2Pos, x2Pos - 30, y2Pos + 155, x2Pos + 30, y2Pos + 155);

  //ufo animation
  if (x2Pos <= 35) {
    speed = -2;
  }

  if (x2Pos >= 465) {
    speed = 2;
  }

  x2Pos = x2Pos - speed;
}

function moon() {
  fill(242, 237, 237); //moon
  ellipse(x3Pos, y3Pos, 40, 40);

  //moon animation
  /*if (x3Pos > 600) {
    speed = -0.5;
  }

  if (x3Pos < 0) {
    speed = 0.5;
  }*/

  //x3Pos += 1;
}

//Draw Function
function draw() {
  background(29, 40, 115); //background
}

draw();
moon();
ufo();
star();
twoTrees();
// 
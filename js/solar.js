//star array
var xPos = [45, 200, 380, 260, 350, 140, 480, 87, 353, 14, 490, 100, 20];
var yPos = [430, 170, 350, 120, 480, 160, 400, 379, 12, 480, 190, 100, 10];

//sun variables
var sun = 250;
var sunSize = 80;
var sunGrowth = 1;

//setup
function setup() {
  createCanvas(500, 500);
}

function gasBall() {
  fill(255, 50, 10); //color sun
  ellipse(sun, sun, sunSize, sunSize); //draw sun
  if (sunSize <= 81) {
    sunGrowth += 0.02;
  }
  if (sunSize >= 82) {
    sunGrowth -= 0.02;
  }
  sunSize = sunSize + sunGrowth;
}

/*function planets(x, y, radius, color) { //planet objects
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.radians = 0;
  this.velocity = .05;

  this.update = () { //move planets
    this.radians += this.velocity;
    this.x = x + Math.cos(this.radians) * 100;
    this.y = y + Math.sin(this.radians) * 100;
    this.draw();
  };

  this.draw = () {
    c.beginpath();
    c.arc(this.x, this.y, this.radius, 0, Math.pi * 2, false);
    c.closepath();
  }
}*/
function star() {
  noStroke();
  for (var i = 0; i < xPos.length; i++) {
    fill(255, 255, 255); //star color
    ellipse(xPos[i], yPos[i], 5, 5);
  }
}

function draw() {
  background(0, 0, 0); //space

  star();
  gasBall();

  fill(200, 100, 15); //color mercury
  ellipse(sun + 75, sun, 10, 10); //mercury

  fill(210, 150, 100); //color venus
  ellipse(sun - 100, sun, 20, 20); //venus

  fill(50, 100, 255); //color earth
  ellipse(sun + 125, sun - 70, 25, 25); //draw earth

  fill(255, 10, 100); //color mars
  ellipse(sun - 150, sun + 50, 15, 15); //draw mars

  fill(240, 75, 30); //color jupiter
  ellipse(sun, sun + 150, 50, 50); //draw jupiter

  fill(150, 100, 255); //color saturn
  ellipse(sun + 125, sun + 200, 40, 40); //draw saturn
  strokeWeight(2);
  line(315, 450, 355, 445);

  fill(150, 200, 255); //color uranus
  ellipse(sun - 170, sun - 210, 35, 35); //draw uranus

  fill(100, 240, 255); //color neptune
  ellipse(sun + 200, sun - 220, 35, 35); //draw neptune
}

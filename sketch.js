var dir = 1;

var x = 0;
var y = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  line(0, 0, x, y);
  fill('red');
  rect(x, y, 160, 160);
  fill('white');
  rect(x, y, 140, 140);
  fill('yellow');
  rect(x, y, 120, 120);
  fill('black');
  rect(x, y, 100, 100);
  fill('blue');
  rect(x, y, 80, 80);
  fill('#0f0');
  rect(x, y, 60, 60);
  fill('pink');
  rect(x, y, 40, 40);
  fill(110,63,63);
  rect(x, y, 20, 20);
  
  x += 0.2;
  y += 0.2;
  
  if(x >= 400 || y >= 400){
    x = 0;
    y = 0;
  }
}
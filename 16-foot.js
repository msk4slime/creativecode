let ballX = 200, direction = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(ballX, 200, 20, 20);
  
  ballX += direction;
  
  if (ballX < 10 || ballX > width - 10) direction = 0;
}

function mousePressed() {
  if (mouseX < width / 2) direction = -3;
  else direction = 3;
}

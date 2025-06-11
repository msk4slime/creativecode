let speed = 2, ballX = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(ballX, 200, 20, 20);
  ballX += speed;

  if (ballX > width - 20 || ballX < 20) speed *= -1;
}

function mousePressed() {
  speed = random(1, 5);
}

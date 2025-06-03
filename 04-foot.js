let ballY = 350, velocity = 0, gravity = 0.5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(200, ballY, 50, 50);
  
  velocity += gravity;
  ballY += velocity;

  if (ballY > height - 25) {
    ballY = height - 25;
    velocity = 0;
  }
}

function mousePressed() {
  if (dist(mouseX, mouseY, 200, ballY) < 25) {
    velocity = -8;
  }
}

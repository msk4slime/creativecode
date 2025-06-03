let ballX = 200, ballY = 350, shoot = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(ballX, ballY, 20, 20);
  
  if (shoot) ballY -= 5;
  if (ballY < 50) shoot = false;
}

function mousePressed() {
  shoot = true;
}

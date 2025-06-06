let ball;

function setup() {
  createCanvas(400, 400);
  ball = createVector(width / 2, height / 2);
}

function draw() {
  background(220);
  ellipse(ball.x, ball.y, 50, 50);
}

function mousePressed() {
  ball.set(mouseX, mouseY);
}

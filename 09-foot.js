let defenderX = 200, ballX = 50, ballY = 250, speed = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(ballX, ballY, 20, 20);
  rect(defenderX - 10, 250, 20, 40);

  ballX += speed;

  if (keyIsPressed && key === 'a') defenderX -= 5;
  if (keyIsPressed && key === 'd') defenderX += 5;

  if (abs(ballX - defenderX) < 10) speed = 0;  // Interception
}

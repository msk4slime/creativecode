let player1 = 100, player2 = 300, ballX = 100, ballY = 250, pass = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(ballX, ballY, 20, 20);
  rect(player1 - 10, 250, 20, 40);
  rect(player2 - 10, 250, 20, 40);

  if (pass) ballX += 5;
  if (ballX > player2) pass = false;
}

function keyPressed() {
  if (key === ' ') pass = true;
}

let ballX = 200, ballY = 200, ballSpeedX = 3, ballSpeedY = 2;
let player1Y = 180, player2Y = 180;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect(20, player1Y, 10, 60);
  rect(370, player2Y, 10, 60);
  ellipse(ballX, ballY, 20, 20);
  
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  
  if (ballY < 10 || ballY > height - 10) ballSpeedY *= -1;
  if (ballX < 30 && ballY > player1Y && ballY < player1Y + 60) ballSpeedX *= -1;
  if (ballX > 370 && ballY > player2Y && ballY < player2Y + 60) ballSpeedX *= -1;
}

function keyPressed() {
  if (key === 'w') player1Y -= 10;
  if (key === 's') player1Y += 10;
  if (key === 'ArrowUp') player2Y -= 10;
  if (key === 'ArrowDown') player2Y += 10;
}

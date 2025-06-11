let ballX = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(ballX, 200, 20, 20);
  ballX += 2;  // Déplacement progressif
}

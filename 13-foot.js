let size = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(200, 200, size, size);
}

function mousePressed() {
  size = random(30, 80);
}

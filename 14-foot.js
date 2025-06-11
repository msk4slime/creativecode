let score = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(20);
  text(`Jonglages: ${score}`, 150, 50);
  ellipse(200, 200, 50, 50);
}

function mousePressed() {
  if (dist(mouseX, mouseY, 200, 200) < 25) {
    score++;
  }
}

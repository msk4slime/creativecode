let angle = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let x = 200 + cos(radians(angle)) * 100;
  let y = 200 + sin(radians(angle)) * 100;
  ellipse(x, y, 50, 50);
  angle += 2;
}

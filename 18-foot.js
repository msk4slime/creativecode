let size = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  ellipse(200, 200, size, size);
  
  if (size < 100) {
    size += 1;
  }
}

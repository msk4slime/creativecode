let angle = 45;
let force = 10;
let x = 50, y = 350, vx, vy;

function setup() {
  createCanvas(400, 400);
  vx = force * cos(radians(angle));
  vy = -force * sin(radians(angle));
}

function draw() {
  background(220);
  ellipse(x, y, 20, 20);
  
  x += vx;
  y += vy;
  vy += 0.2; // Gravité
  
  if (y > height - 10) vy *= -0.8;
}

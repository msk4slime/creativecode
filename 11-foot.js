let positions = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Affichage des anciennes positions
  for (let pos of positions) {
    fill(255, 0, 0, 50);
    ellipse(pos.x, pos.y, 10, 10);
  }
  
  // Position actuelle du joueur
  fill(0, 0, 255);
  ellipse(mouseX, mouseY, 20, 20);
}

function mouseMoved() {
  positions.push({ x: mouseX, y: mouseY });
  if (positions.length > 50) {
    positions.shift();  // Supprime les vieilles positions
  }
}

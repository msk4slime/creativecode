let attaquantX = 200, dernierDefenseurX = 250;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  fill(0, 255, 0);
  rect(dernierDefenseurX, 100, 20, 50);
  
  fill(255, 0, 0);
  rect(attaquantX, 100, 20, 50);
  
  textSize(16);
  fill(0);
  text(attaquantX < dernierDefenseurX ? "HORS-JEU !" : "OK", 150, 200);
}

function keyPressed() {
  if (key === 'a') attaquantX -= 10;
  if (key === 'd') attaquantX += 10;
}

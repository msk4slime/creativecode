let passes = 0, tirs = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(20);
  text(`Passes : ${passes}`, 50, 50);
  text(`Tirs : ${tirs}`, 50, 80);
}

function keyPressed() {
  if (key === 'p') passes++;
  if (key === 't') tirs++;
}

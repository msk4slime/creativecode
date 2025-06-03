let x, y;

function setup() {
    createCanvas(400, 400);
    x = width / 2;
    y = height / 2;
}

function draw() {
    background(220);
    ellipse(x, y, 50, 50);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) x -= 10;
    if (keyCode === RIGHT_ARROW) x += 10;
    if (keyCode === UP_ARROW) y -= 10;
    if (keyCode === DOWN_ARROW) y += 10;
}

/**
 * Vérifie si le ballon est hors limite 🚨
 */
function checkBounds() {
    if (x < 0) x = width;
    if (x > width) x = 0;
    if (y < 0) y = height;
    if (y > height) y = 0;
}

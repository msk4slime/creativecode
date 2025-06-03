let x, y, speedX, speedY;

function setup() {
    createCanvas(400, 400);
    x = width / 2;
    y = height / 2;
    speedX = random(-3, 3);
    speedY = random(-3, 3);
}

function draw() {
    background(200);
    x += speedX;
    y += speedY;

    if (x < 0 || x > width) speedX *= -1;
    if (y < 0 || y > height) speedY *= -1;

    ellipse(x, y, 50, 50);
}

/**
 * Génère une vitesse aléatoire pour le ballon ⚡
 */
function randomSpeed() {
    return random(-5, 5);
}

/**
 * Change la couleur du ballon à chaque rebond 🌈
 */
function changeColor() {
    return color(random(255), random(255), random(255));
}

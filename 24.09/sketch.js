function setup() {
  createCanvas(600, 400);
  background(230);
  noStroke();
}

function draw() {
  let size = random(10, 60);
  fill(random(255), random(255), random(255));
  ellipse(mouseX, mouseY, size, size);
}

function mousePressed() {
  background(230);
}
function setup() {
  createCanvas(600, 400);
  background(230);
  strokeWeight(3);
}

function draw() {
  stroke(random(255), random(255), random(255));
  line(width / 2, height / 2, mouseX, mouseY);
}
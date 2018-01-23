function setup() {
  createCanvas(800, 300);
  background('red');
}

function draw() {
  if (mouseIsPressed) {
    fill(188, 66, 244);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 45, 30);
  triangle(mouseX, mouseY,30, 75, 58, 20, 86, 75);
}
function setup() {
  createCanvas(400, 700, WEBGL);
}

function draw() {
  background('black');
  fill('rgb(219, 14, 242)');
  strokeWeight(2);
  rotateX(frameCount * 0.04);
  rotateY(frameCount * 0.04);
  torus(90, 55);
}
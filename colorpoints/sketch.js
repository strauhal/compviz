// Rozin Mirror Starter

const cam_w = 640;
const cam_h = 360;
let capture;

let osc, fft;

function setup() {
  createCanvas(710, 200);

  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(0.5);

  fft = new p5.FFT();
  osc.start();

  //   // Create an Audio input
  //   mic = new p5.AudioIn();

  //   // start the Audio Input.
  //   // By default, it does not .connect() (to the computer speakers)
  //   mic.start();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(cam_w, cam_h);
  capture.hide();
}

function draw() {
  //clear();

  // let vol = mic.getLevel();

  capture.loadPixels();

  // don't do anything until I get a camera feed!
  if (capture.pixels.length > 0) {
    push();
    scale(width / cam_w, width / cam_w);
    mirror();
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// ADD YOUR OWN VERSION OF THE MIRROR DOWN BELOW

function mirror() {
  background(0, 0, 255);
  const stepSize = 20;

  for (let y = 0; y < cam_h; y += stepSize) {
    for (let x = 0; x < cam_w; x += stepSize) {
      const index = (cam_w - x + y * cam_w) * 4;

      const r = capture.pixels[index];
      const g = capture.pixels[index + 1];
      const b = capture.pixels[index + 2];

      const brightness = (r + g + b) / 3;
      //console.log(brightness);

      // USE THE x, y, r, g, or b values to draw things to the screen

      // const size = map(brightness, 0, 255, stepSize/4, stepSize);

      // noStroke();
      //fill(r, g, b);
      stroke(r, g, b);
      strokeWeight(1); // Default
      rotate(PI / brightness);

      // shearX(PI * brightness);

      strokeJoin(BEVEL);
      strokeCap(PROJECT);

      //       bezier(brightness*2, brightness*3, brightness*4, brightness*5, brightness*6, brightness*7, brightness*8);

      //line(x, y, width/2, height/2)

      // textSize(brightness/5)
      fill(r / brightness, g / brightness, b / brightness, 0);
      // text("cool", x, y);

      // ellipse(x, y, stepSize/2, stepSize/2)
      quad(
        x,
        y,
        brightness * 2,
        brightness * 3,
        brightness * 4,
        brightness * 5,
        brightness * 6,
        brightness * 7
      );
      // blendMode(DIFFERENCE);
      // blendMode(HARD_LIGHT);

      // blendMode(SUBTRACT);
    }
  }
}

function mirror2() {
  // background(255);
  const stepSize = 40;

  for (let y = 0; y < height; y += stepSize) {
    for (let x = 0; x < width; x += stepSize) {
      const index = (width - x + y * width) * 4;

      const r = capture.pixels[index];
      const g = capture.pixels[index + 1];
      const b = capture.pixels[index + 2];

      const brightness = (r + g + b) / 3;

      const threshold = map(mouseX, 0, 640, 0, 255);
      //console.log(brightness);

      // USE THE x, y, r, g, or b values to draw things to the screen

      const size = map(brightness, 0, 255, stepSize / 4, stepSize);

      // noStroke();
      //fill(r, g, b);

      stroke(r, g, b);

      //line(x, y, width/2, height/2)

      fill(0, 255, 0);
      // text("cool", x, y);

      //ellipse(x, y, stepSize/2, stepSize/2)
    }
  }
}

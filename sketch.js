let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0, 0, 0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  // let j = renderCounter;
  // // get one scanline
  // for(let i=0; i<1920; i++) {
  //   let pix = sourceImg.get(i, j);
  //   let mask = maskImg.get(i, j);
  //   if(mask[0] > 128) {
  //     // draw the full pixels
  //     set(i, j, pix);
  //   }
  //   else {
  //     // draw a "dimmed" version in gray
  //     let gray_color = 64 + pix[1] / 8;
  //     set(i, j, gray_color);
  //   }
  // }
  for(let i=0;i<4000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    if(mask[0] > 128) {

      stroke(pix);
      strokeWeight(height/500);
      console.log(mask[0])
      if(pix[0] > 100){
        line(x, y, x + width/100, y)
        // line(x + 100, y + 100, x + width/100 + 100, y + 100)
      } else{
        line(x, y, x - width/100, y)
        // line(x + 100, y + 100, x - width/100 + 100, y + 100)
      }
     } else{ 
      noStroke();
      rect(x, y, 5 , 5);
    }

  }
  // updatePixels();
  renderCounter = renderCounter +1 
  if(renderCounter > 100) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

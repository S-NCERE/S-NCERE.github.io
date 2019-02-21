let t = 0; // time variable

function setup() {
    noStroke();
    fill(40, 200, 40);
    
    var cnv = createCanvas(800, 400);
    //var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    cnv.parent('content');
//    cnv.position(-width/2,0);
    
}

function draw() {
// controls backgroud, rgba last argumentt makes translucent  
    background(310,210,110,10); 
//particle color
    fill(255,0,0);
    //make x-axis an y-axis a grid of ellipses
    for (let x = 0; x <= width; x = x + 50) {
    for (let y = 0; y <= height; y = y + 50) {
      // starting point of each circle depends on mouse position
      let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      let angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
//  changing the numeric value changes circle rotation size
      let myX = x + 50 * cos(2 * PI * t + angle);
      let myY = y + 50 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particles using myX an myY, last argument for particle size
    }
  }
    
    
    
    
//    translate(width/2, height/2);
//    beginShape();
//  for (var i = -4; i < width; i++){
//    curveVertex((width/2.0)*sin(i*2.0*PI/(width/mouseX)),(height/2.0)*sin(i*2.0*PI/(width/mouseY)));    
//  }
//  endShape(); 
    
    
    
}

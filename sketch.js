var r;
var g;
var b;

function setup() {
    var cnv = createCanvas(500, 500);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    cnv.parent('sketch');
    background(0);
    r = 218;
    g = 172;
    b = 213;

}



function draw() { 
    
    var pink = color(r, g, b);
    var purple = color(147, 112,219);
    var green = color(0, 255, 0);

// outer  pink circle
	stroke(green);
    fill(pink);
    ellipseMode(RADIUS);
    ellipse(250, 250, 150, 150);
// top left purple circle cut out
    
//    noStroke();
//    fill(147,112,219);
//    ellipseMode(CORNERS);
//    ellipse(200, 200, 100, 100);
//    
    
    
 // inner circle purple 3   
    stroke(0);
    fill(purple);
    ellipseMode(CENTER);
    ellipse(250, 250, 220, 220);
// inner circle pink 3    
    stroke(0);
    fill(pink);
    ellipseMode(CENTER);
    ellipse(250, 250, 190, 190);
// inner circle purple 2
    stroke(0);
    fill(purple);
    ellipseMode(CENTER);
    ellipse(250, 250, 160, 160);
//  inner circle pink 2
    stroke(0);
    fill(pink);
    ellipseMode(CENTER);
    ellipse(250, 250, 130, 130);
// inner circle purple 1
    stroke(0);
    fill(purple);
	ellipseMode(CENTER);
    ellipse(250, 250, 100, 100);
// inner circle pink 1
    stroke(0);
    fill(pink);
    ellipseMode(CENTER);
    ellipse(250, 250, 70, 70);
    
    
// crosshair dot
    fill(green);
    ellipseMode(CENTER);
    ellipse(250, 250, 5, 5);
// scope lines
    stroke(green);
    line(0, 250, 500, 250);
    line(250, 0, 250, 500);
// above dot y axis crosshairs
    line(245, 110, 255, 110);
    line(245, 120, 255, 120);
    line(245, 130, 255, 130);
    line(245, 140, 255, 140);
    line(245, 150, 255, 150);
    line(245, 160, 255, 160);
    line(245, 170, 255, 170);
    line(245, 180, 255, 180);
    line(245, 190, 255, 190);
    line(245, 210, 255, 210);
    
    line(245, 220, 255, 220);
    line(245, 230, 255, 230);
    line(245, 240, 255, 240);
    
    line(225, 260, 275, 260);
    line(235, 270, 265, 270);
    line(245, 280, 255, 280);
    
    line(245, 290, 255, 290);
    line(245, 310, 255, 310);
    line(245, 320, 255, 320);
    line(245, 330, 255, 330);
    line(245, 340, 255, 340);
    line(245, 350, 255, 350);
    line(245, 360, 255, 360);
    line(245, 370, 255, 370);
    line(245, 380, 255, 380);
    line(245, 390, 255, 390);
// x axis crosshairs
    line(110,245, 110, 255);
    line(120,245, 120, 255);
    line(130,245, 130, 255);
    line(140,245, 140, 255);
    line(150,245, 150, 255);
    line(160,245, 160, 255);
    line(170,245, 170, 255);
    line(180,245, 180, 255);
    line(190,245, 190, 255);
    line(210,245, 210, 255);
    
    line(220,245, 220, 255);
    line(230,245, 230, 255);
    line(240,245, 240, 255);
    
    line(260,245, 260, 255);
    line(270,245, 270, 255);
    line(280,245, 280, 255);
    
    line(290,245, 290, 255);
    line(310,245, 310, 255);
    line(320,245, 320, 255);
    line(330,245, 330, 255);
    line(340,245, 340, 255);
    line(350,245, 350, 255);
    line(360,245, 360, 255);
    line(370,245, 370, 255);
    line(380,245, 380, 255);
    line(390,245, 390, 255);
    
    
  } 

function mousePressed(){
     if( r = 218, g = 172, b = 213) {
         r = 0;
         g = 0;
         b = 0;
     } else {
    r = 218;
    g = 172;
    b = 213;
     }
        
   
    
}

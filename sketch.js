//var r;
//var g;
//var b;
var pink;
var green; 
var purple;

var yaxis1 = 245;
var yaxis2 = 255;
var xaxis1 = 245;
var xaxis2 = 255;
function setup() {
    var cnv = createCanvas(500, 500);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    cnv.parent('sketch');
    background(0);
//    r = 218;
//    g = 172;
//    b = 213;

}



function draw() { 
    
//    variable x for y aixs scope ticks point 1
//    var yaxis1 = 245;
//    variable x for y axis scope ticks point 2
//    var yaxis2 = 255;
//    variable y for x axis scope tick p1  
//    var xaxis1 = 245;
//    variable y for x axis scope tick p2  
//    var xaxis2 = 255;
    
    if (mouseIsPressed){
        pink = color(0, 0, 0);
        green = color(255,0,9);
        purple = color(70,102,255);
//        yaxis1 = 80;
//        yaxis2 = 420;
//        xaxis1 = 80;
//        xaxis2 = 420;
    } else {
        pink = color(218, 172, 213);
        green = color(0, 255, 0);
        purple = color(147, 112,219);
    }
    

// outer  pink circle
	stroke(green);
    fill(pink);
    ellipseMode(RADIUS);
    ellipse(250, 250, 150, 150);
// top left purple circle cut out
    


 // inner circle purple 3   
    stroke(0);
    fill(purple);
    ellipseMode(CENTER);
    ellipse(250, 250, map(mouseX, 0, width, 220, 240));
// inner circle pink 3    
    stroke(0);
    fill(pink);
    ellipseMode(CENTER);
    ellipse(250, 250, map(mouseX, 0, width, 190, 210));
// inner circle purple 2
    stroke(0);
    fill(purple);
    ellipseMode(CENTER);
    ellipse(250, 250,map(mouseX, 0, width, 160, 180));
//  inner circle pink 2
    stroke(0);
    fill(pink);
    ellipseMode(CENTER);
    ellipse(250, 250, map(mouseX, 0, width, 130, 150));
// inner circle purple 1
    stroke(0);
    fill(purple);
	ellipseMode(CENTER);
    ellipse(250, 250, map(mouseX, 0, width, 100, 120));
// inner circle pink 1
    stroke(0);
    fill(pink);
    ellipseMode(CENTER);
    ellipse(250, 250, map(mouseX, 0, width, 70, 90));
    
    
// crosshair dot
//    fill(green);
    stroke(green);
    ellipseMode(CENTER);
    ellipse(250, 250, 5, 5);
// scope lines
    noFill();
    stroke(green);
    line(0, 250, 500, 250);
    line(250, 0, 250, 500);
// above dot y axis crosshairs
    line(yaxis1, 110, yaxis2, 110);
    line(yaxis1, 120, yaxis2, 120);
    line(yaxis1, 130, yaxis2, 130);
    line(yaxis1, 140, yaxis2, 140);
    line(yaxis1, 150, yaxis2, 150);
    line(yaxis1, 160, yaxis2, 160);
    line(yaxis1, 170, yaxis2, 170);
    line(yaxis1, 180, yaxis2, 180);
    line(yaxis1, 190, yaxis2, 190);
    line(yaxis1, 210, yaxis2, 210);
    
    line(yaxis1, 220, yaxis2, 220);
    line(yaxis1 - 20, 230, yaxis2 + 20, 230);
    line(yaxis1 - 30, 240, yaxis2 + 30, 240);
    
    line(yaxis1 - 30, 260, yaxis2 + 30, 260);
    line(yaxis1 - 20, 270, yaxis2 + 20, 270);
    line(yaxis1, 280, yaxis2, 280);
    
    line(yaxis1, 290, yaxis2, 290);
    line(yaxis1, 310, yaxis2, 310);
    line(yaxis1, 320, yaxis2, 320);
    line(yaxis1, 330, yaxis2, 330);
    line(yaxis1, 340, yaxis2, 340);
    line(yaxis1, 350, yaxis2, 350);
    line(yaxis1, 360, yaxis2, 360);
    line(yaxis1, 370, yaxis2, 370);
    line(yaxis1, 380, yaxis2, 380);
    line(yaxis1, 390, yaxis2, 390);
// x axis crosshairs
    line(110,xaxis1, 110, xaxis2);
    line(120,xaxis1, 120, xaxis2);
    line(130,245, 130, 255);
    line(140,245, 140, 255);
    line(150,245, 150, 255);
    line(160,245, 160, 255);
    line(170,245, 170, 255);
    line(180,245, 180, 255);
    line(190,245, 190, 255);
    line(210,245, 210, 255);
    
    line(220,245, 220, 255);
    line(230,xaxis1, 230, xaxis2);
    line(240,245, 240, 255);
    
    line(260,245, 260, 255);
    line(270,xaxis1, 270, xaxis2);
    line(280,245, 280, 255);
    
    line(290,245, 290, 255);
    line(310,245, 310, 255);
    line(320,245, 320, 255);
    line(330,245, 330, 255);
    line(340,245, 340, 255);
    line(350,245, 350, 255);
    line(360,245, 360, 255);
    line(370,245, 370, 255);
    line(380,xaxis1, 380, xaxis2);
    line(390,xaxis1, 390, xaxis2);
    
    
    
  } 

function mousePressed(){
    
        yaxis1 = 80;
        yaxis2 = 420;
        xaxis1 = 80;
        xaxis2 = 420;
    
    
}

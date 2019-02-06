function setup() {
    createCanvas(500,500);
    background(147,112,219);
}

function draw() { 


// outer  pink circle
	stroke(10);
    fill(218, 172, 213);
    ellipseMode(RADIUS);
    ellipse(250, 250, 150, 150);
// top left purple circle
    noStroke();
    fill(147,112,219);
    ellipseMode(CORNERS);
    ellipse(200, 200, 100, 100);

// inner purple
    stroke(10);
    fill(147,112,219);
	ellipseMode(CENTER);
    ellipse(250, 250, 100, 100);
// inner pink
    stroke(25);
    fill(218, 172, 213);
    ellipseMode(CENTER);
    ellipse(250, 250, 70, 70);
// crosshair dot
    fill(0);
    ellipseMode(CENTER);
    ellipse(250, 250, 5, 5);
// scope lines
    stroke(10);
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

    line(245, 220, 255, 220);
    line(245, 230, 255, 230);
    line(245, 240, 255, 240);
// below dot y axis
    line(245, 260, 255, 260);
    line(245, 270, 255, 270);
    line(245, 280, 255, 280);

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
    line(220,245, 220, 255);
    line(230,245, 230, 255);
    line(240,245, 240, 255);
    line(260,245, 260, 255);
    line(270,245, 270, 255);
    line(280,245, 280, 255);
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


var img;
var img2;
function preload(){
    img = loadImage('images/dripDex.jpg');
    img2 = loadImage('images/sadDex.jpg');

}
function setup() {
    var cnv = createCanvas(800, 800);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    cnv.parent('meme');
    background(255);
    
}

function draw(){
    
    //when ya drip go un noticed
    // imgs to big must size down
    image(img, 200, 200, 400, 400);
    textSize(28);
    text('When Your Drip Goes Unoticed', 200, 200);
    
    
}
function mousePressed(){
//    image(img2, 200, 200, 400, 400);
//    image(img2, 200, 200, 400, 400);

    img = img2;
    if(img = img2){
         img = img;
        }
}
var img;  // Declare variable 'img'.
var heli;
var like; //click and number increases 
var r1,r2,r3,r4,r5,r6
var g1,g2,g3,g4,g5,g6; //colors
var aid = [1,2,3,4,5,6]
var a = -50

function setup() {
  createCanvas(720, 600);
  img = loadImage("map.jpg");  // Load the image
  img1 = loadImage("heli1.png");
  care = loadImage("care1.png");
  
  r1 = random(255,0,0);
  g1 = random(0,0,255);
  
  r2 = random(255,0,0);
  g2 = random(0,0,255);
  
  r3 = random(255,0,0);
  g4 = random(0,0,255);
  
  r4 = random(255,0,0);
  g4 = random(0,0,255);
  
  r5 = random(255,0,0);
  g5 = random(0,0,255);
  
  r6 = random(255,0,0);
  g6 = random(0,0,255);

}


function draw() {
  // Displays the image at its actual size at point (0,0)
  //image (img,0,0);
  background(img,0,0);
  
  //DIRECTIONS TO GAME
   fill(0);
  if(a>=width){
    a=-200;
  }
  textSize(30);
  text("Hover over and Click to aid Countires",a,100);
  
  if(a<width){
    a++
  }
  
  
  //CANADA
  fill(r1,g1,127);
  ellipse(100, 100, 20, 20);
  
  //ASIA
  fill(r2,g2,127);
  ellipse(700, 100 ,20 , 20);
  
  //EUROPE
  fill(r3,g3,127);
  ellipse(350, 200, 20, 20);
  
  //AFRICA
  fill(r4,g4,127);
  ellipse(310, 275, 20, 20);
  
  //SOUTH AMERICA
  fill(r5,g5,127);
  ellipse(200, 375, 20, 20);
  
  //ASIA
  fill(r6,g6,127);
  ellipse(500, 275, 20, 20);
  
  
  
  //CARE PACKAGE ON CLICK
  if (mouseIsPressed) {
    image(care,mouseX-21, mouseY-4);
 
  }
 //CHANGE THE ELLIPSE GREEN 
 var d1 = dist(mouseX, mouseY, 100, 100);
  if (d1 < 5) {
    // Pick new random color values
    r1 = (255,0,0);
    g1 = (0,0,255);
  }
  
  
 var d2 = dist(mouseX, mouseY, 700, 100);
  if (d2 < 5) {
    // Pick new random color values
    r2 = (255,0,0);
    g2 = (0,0,255);
  }
 
 var d3 = dist(mouseX, mouseY, 350, 200);
  if (d3 < 5) {
    // Pick new random color values
    r3 = (255,0,0);
    g3 = (0,0,255);
  }
 var d4 = dist(mouseX, mouseY, 310, 275);
  if (d4 < 5) {
    // Pick new random color values
    r4 = (255,0,0);
    g4 = (0,0,255);
  }
  var d5 = dist(mouseX, mouseY, 200, 375);
  if (d5 < 5) {
    // Pick new random color values
    r5 = (255,0,0);
    g5 = (0,0,255);
  }
  var d6 = dist(mouseX, mouseY, 500, 275);
  if (d6 < 5) {
    // Pick new random color values
    r6 = (255,0,0);
    g6 = (0,0,255);
 

 
 
  }
  
  
  
  //HELICOPTER 
  image(img1, mouseX-50, mouseY-50);
  
  


}
    
  
    



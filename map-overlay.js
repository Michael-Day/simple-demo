/*
Map scroll and hands
7th January 2016
*/

function setup() {
  var canvass = createCanvas(600,600);
  canvass.position(0, 0, P2D);

}
var myX = 0;
function draw() {
  //  background(80,80,80, 0.1);
  clear();
  stroke(255);
  line(myX,0,myX,windowHeight);
  myX++;
  if(myX > width){
    myX = 0;

  }
}

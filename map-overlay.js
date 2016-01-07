

function setup() {
  var canvass = createCanvas(windowWidth,windowHeight);
  canvass.position(0, 0, P2D);

}
  var myX = 0;
function draw() {
  background(80,80,80);

  stroke(255);
  line(myX,0,myX,windowHeight);
  myX++;
  if(myX > windowWidth){
    myX = 0;

  }
}

/*
Map scroll thing
19th January 2016

TO DO
type sizes
colours
bigger text database
upload to server
fade out, fade back in again
*/
var symptom; //

function setup() {
    var canvass = createCanvas(1,1);
    //canvass.position(300, 200, P2D);
    symptom = createSpan();
    symptom.id("text");
    symptom.html(randomText());
    windowResized();
}
var myX = 0;
var axiss = 0;
var mapp = L.map('map', {
    zoomControl: false,       // gets rid of +/- thing
    attributionControl: false, // gets rid of attribution thing
});

var layer = Tangram.leafletLayer({
    scene: 'scene.yaml',
    //attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>'
});

layer.addTo(mapp);

// process is to centre and zoom out
mapp.setView([51.52569,-0.08736], 19); // old st
//mapp.setView([40.70531887544228, -74.00976419448853], 15); //new york
panMe = function(){
    //mapp.panBy([-2,0]);
    mapp.zoomOut(0.001);
}
setInterval(panMe, 100);

function windowResized() {
  // sets the type size depending on the window size
  // mod this to not overflow the text box
  if(symptom){
    if(windowWidth > 1000){
      symptom.style("font-size","3.6em");
    } else if (windowWidth > 500) {
      symptom.style("font-size","2.1em");
    } else if (windowWidth < 499) {
      symptom.style("font-size","1.4em");
    }
  }
}

// this is the p5js stuff //
var textArray = new Array(" You are attached to your smartphone.",
    "You default to screen time in your downtime.",
    "You're afraid of silence.",
    "Phone calls aren't your communication of preference.",
    "You believe in multitasking.",
    "You can’t make up your mind.",
    "You grab the closest device when left alone.",
    "You’re worried you’re missing out.",
    "Being away from your phone makes you anxious.",
    "Your self-esteem has taken a hit.",
    "You sleep with your phone.",
    "You feel less connected.",
    "Social media makes you feel negative about your own life.",
    "You check your email and/or social feeds throughout every meal.",
    "You can’t function when your phone dies.",
    "You keep bumping into things.",
    "You can’t make up your mind.",
    "Your vision goes blurry after looking at a screen.",
    "You never read an article from beginning to end.",
    "Your thumb on your dominant hand is sore from all the scrolling.",
    "You look at your phone first thing when you wake up.",
    "You get a bit twitchy and anxious if separated from your phone.",
    "You get panicked when the battery is running low.",
    "You are feeling hurried and lacking in concentration."
);

// var xe = Math.random(textArray.length);
// xe = Math.round(xe);
// var s = textArray[xe];

randomText = function(){
    xe = Math.random()*textArray.length;
    xe = Math.round(xe);
    s = textArray[xe];
    symptom.html(s);
}
setInterval(randomText, 5000);

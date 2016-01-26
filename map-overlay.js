/*
Map scroll thing
23rd January 2016

TO DO

fade out, fade back in again
sound
upload to server
working on android/ios
*/

var symptom; // div for the texts
var fadeOut; // var for the fadeout function if text is unclicked

// var object containing the lat and long for the locations to zoom from
var locs =
    {
        ny:[40.70531887544228, -74.00976419448853],
        oldst: [51.52569,-0.08736],
        apple: [37.332342, -122.030797]
    }

function setup() {
    var canvass = createCanvas(1,1);    // canvas, for no reason

    symptom = createSpan();         // span for the texts
    symptom.id("text");             // give it an id, defined in the HTML file
    symptom.addClass("visible");    // give it a class, visible for the fades etc

    symptom.html(randomText());     // generate text content for the div
    windowResized();                // flow for smaller screens

    symptom.touchEnded(makeInvisible);      // set up listeners for the clicks and taps
    symptom.mouseReleased(makeInvisible);


}


// This is all mapzen / leaflet business //
var mapp = L.map('map', {
    zoomControl: false,        // gets rid of +/- thing
    attributionControl: false, // gets rid of attribution thing
});
var layer = Tangram.leafletLayer({
    scene: 'scene.yaml',
    //attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>'
});
layer.addTo(mapp);


mapp.setView(locs.apple, 19); // This sets up the map position, to old st

setInterval(refreshLocation, 360000);

// function to do the zooming out
zoomMe = function(){
        mapp.zoomOut(0.001);

}
setInterval(zoomMe, 100);

function windowResized() {
  // sets the type box size depending on the window size
  if(symptom){
      if(windowWidth > 1000){
          symptom.style("font-size","2.8em");
          symptom.style("width", "40%");
      } else if (windowWidth > 800) {
          symptom.style("font-size","2.2em");
          symptom.style("width", "50%");
      } else if (windowWidth > 500) {
          symptom.style("font-size","2.0em");
          symptom.style("width", "60%");
      } else if (windowWidth < 499) {
          symptom.style("font-size","1.3em");
          symptom.style("width", "80%");
      }
  }
}


function randomText() {
    // generates the text in the text box
    // textArray is in a separate js file
    xe = Math.random()*textArray.length;
    xe = Math.round(xe);
    s = textArray[xe];
    symptom.html(s);

    // set the visibility of the text to visible
    var thing =  document.getElementById("text"); // get the element
    thing.className = "visible";                 // change the class of it

    // start counter for text fadeout if unclicked
    fadeOut = setInterval(makeInvisible, 10400);
}

setInterval(randomText, 12000); // refresh interval for texts


function makeInvisible() {
    // fades out texts on click
    clearTimeout(fadeOut);      // clear the timer for UNclicked fadeout
    var thing =  document.getElementById("text"); // get the element
    thing.className = "hidden";         // change the class of it
    console.log("clicked");             // debug
}

function refreshLocation() {
    // work up through the list of locations
    mapp.setView(locs.ny, 19); // This sets up the map position, to old st

}

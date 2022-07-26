var video = "";
var Status = "";

 function preload() {
    
 }

 function setup() {
    canvas = createCanvas(700, 550);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(700, 550);
    video.hide();
 }

  function draw() {
    image(video, 0, 0, 700, 550);
  }

  function start() {
    objectDetector = ml5.objectDetector('cocossd' ,modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
  }

  function modelLoaded() {
    console.log("Model is loaded!");
    Status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
  }
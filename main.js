status = "";

function setup(){
        canvas = createCanvas(480, 380);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(480, 380);
        video.hide();
    }

 function start(){
object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("model_status").innerHTML = "Status: Detecting Objects";
 status = document.getElementById("input");
 }

 function modelLoaded(){
     console.log("Model loaded!");
     status == true;
 }

 function draw(){
     video.show();
 }
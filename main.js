status = "";
objects = [];

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

 function gotResults(error, results){
objects = results;
 }

 function draw(){
     video.show();
     if(status != ""){
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "% ", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
         
 }

 if (objects[i].label == status){
     video.stop();
     object_detector.detect(gotResults);
     document.getElementById("object_status").innerHTML = status + " Found";
     var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance("object mentioned found");
    synth.speak(utterThis);
 }
 else{
     document.getElementById("object_status").innerHTML = "Object Mentioned Not Found";
 }
}

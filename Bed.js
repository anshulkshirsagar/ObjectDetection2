img = "";
var status = "";

function setup(){
    canvas = createCanvas(1500, 800);
    canvas.position(1, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("detection").innerHTML = "Status : Detecting objects";
}
function preload(){
    img = loadImage("bedImage.jpeg");
}
function modelLoaded(){
    status = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
}
function draw(){
    image(img, 0, 0, 1500, 800);
}
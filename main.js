function preload(){
}
function setup(){
canvas=createCanvas(450,450);
canvas.position(500,125);
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function gotPoses(results){
if(results.length>0){
console.log(results);
console.log("Nose X="+results[0].pose.nose.x);
console.log("Nose Y="+results[0].pose.nose.y);
}
}
function modelLoaded(){
console.log("PoseNet Loaded");
}
function take_snapshot(){
save('snapshot.png');
}
function draw(){
image(video,25,25,400,400);
}
song = "";
song1 = "";

leftWrist_X = 0;
rightWrist_X= 0;
leftWrist_Y = 0;
rightWrist_Y = 0;


function preload(){
    song = loadSound("music.mp3");
    song1 = loadSound("music2.mp3");
    console.log("preload");
} 

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
   
}


function draw(){
    image(video, 0, 0, 400, 400);
}



function modelLoaded(){
    console.log("model is ready to work");
}

function gotPoses(result){

    console.log(result);
if(result.length > 0){


        rightWrist_X = result[0].pose.rightWrist.x;
        rightWrist_Y = result[0].pose.rightWrist.y;

        leftWrist_X = result[0].pose.leftWrist.x;
        leftWrist_Y = result[0].pose.leftWrist.y;

}
}
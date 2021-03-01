song="";
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";

function setup(){
    canvas= createCanvas(600, 500);
    canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on( 'pose',gotposes);
}

function modelLoaded(){
    console.log('posNet is intialized')
}

function preload(){
song= loadSound("music.mp3");
song= loadSound("music.mp2");
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate();
}

function gotposes(results){
if(results.length > 0)
{
console.log(results);;
leftWristY = results[0].pose.leftWrist.y;
leftWristX = results[0].pose.leftWrist.x;
 rightWristY = results[0].pose.rightWrist.y;
 rightWristX  = results[0].pose.rightWrist.x;
 console.log("leftWristX = " + leftWristX +"leftWristY" + leftWristY);
 console.log("rightWristX = "+ rightWristX + "rightWristY" + rightWristY);
}
}
leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		

function draw() {
	image(video, 0, 0, 600, 500);
	
	song1_status = song1.isPlaying();
	song2_status = song2.isPlaying();

	fill("#FF0000");
	stroke("#FF0000");

	if(scoreRightWrist > 0.2)
	{ 
		circle(rightWristX,rightWristY,20);

			song2.stop();

		if(song1_status == false)
		{
			song1.play();
			document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song"
		}
	}

	if(scoreLeftWrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);

			song1.stop();

		if(song2_status == false)
		{
			song2.play();
			document.getElementById("song").innerHTML = "Playing - Peter Pan Song"
		}
	}

}
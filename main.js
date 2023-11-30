Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");

var roverW=100;
var roverH=90;
var roverX=10;
var roverY=10;
nasaImg=["nasa_image_1.jpg","nasa_image_2.jpeg","nasa_image_3.jpg","nasa_image_4.jpg"];
var randomNumber=Math.floor(Math.random()*4)
var backgroundimg=nasaImg[randomNumber];
var roverimg="rover.png";

function add(){
    backImageTag=new Image();
    backImageTag.onload=uploadbackground;
    backImageTag.src=backgroundimg;


    roverImageTag=new Image();
    roverImageTag.onload=uploadingRover;
    roverImageTag.src=roverimg;
}
function uploadingRover(){
    ctx.drawImage(roverImageTag,roverX,roverY,roverW,roverH)
}
function uploadbackground(){
    ctx.drawImage(backImageTag,0,0,Canvas.width,Canvas.height)
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keyPressed=e.keyCode;
    if (keyPressed=="38") {
        up()
    }
    if (keyPressed=="37") {
        left()
    }
    if (keyPressed=="39") {
        right()
    }
    if (keyPressed=="40") {
        down()
    }
}
function up(){
    if (roverY>=7) {
        roverY=roverY-10;
        uploadbackground();
        uploadingRover()
    }
    
}
function down(){
    if (roverY<=305) {
        roverY=roverY+10;
        uploadbackground();
        uploadingRover()
    }
}
function right(){
    if (roverX<=700) {
        roverX=roverX+10;
        uploadbackground();
        uploadingRover()
    }
}
function left(){
    if (roverX>=10) {
        roverX=roverX-10;
        uploadbackground();
        uploadingRover()
    }
}


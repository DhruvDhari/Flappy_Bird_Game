//board

let board;
let boardWidth=360;
let boardHeight=640;
let context;

//bird
let birdWidth=32;// width/height=60/45=4/3
let birdHeight=24;
let birdX=boardWidth/8;
let birdY=boardHeight/2;
let birdImg;

let bird = {
    x:birdX,
    y:birdY,
    width:birdWidth,
    height:birdHeight

}


window.onload= function(){
    board=document.getElementById("board");
    board.height =boardHeight;
    board.width  =boardWidth;
    context= board.getContext("2d");

    //draw flappy bird

    context.fillStyle="red";
    context.fillRect(bird.x,bird.y,bird.width,bird.height);

    //loading image
    birdImg = new Image();
    birdImg.src="./images/flappy-bird.png";
    birdImg.onload = function(){
        context.drawImage(birdImg,bird.x,bird.y,bird.width,bird.height);
    }


}
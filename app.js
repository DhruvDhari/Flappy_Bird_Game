//===============board===============

let board;
let boardWidth=360;
let boardHeight=640;
let context;

//==================bird=======================
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

//==================pipes====================
let pipeArray=[];
let pipeWidth=100;
let pipeHeight=500;
let pipeX=boardWidth;
let pipeY=0;

let topPipeImg;
let bottomPipeImg;

window.onload= function(){
    board=document.getElementById("board");
    board.height =boardHeight;
    board.width  =boardWidth;
    context= board.getContext("2d");

    //=============draw flappy bird======================

    // context.fillStyle="red";
    // context.fillRect(bird.x,bird.y,bird.width,bird.height);

    //loading image
    birdImg = new Image();
    birdImg.src="./images/flappy-bird.png";
    birdImg.onload = function(){
        context.drawImage(birdImg,bird.x,bird.y,bird.width,bird.height);
    }
    //=========for pipes==============

    topPipeImg=new Image();
    topPipeImg.src="./images/flappybird-pipe.png";

    bottomPipeImg=new Image();
    bottomPipeImg.src="./images/flappybird-pipe2.png";

    requestAnimationFrame(update);
    setInterval(placePipes,1500);// every 1.5s the pipe will be placed
}

function update(){
    requestAnimationFrame(update);
    context.clearRect(0,0,board.width,board.height);

    //bird
    context.drawImage(birdImg,bird.x,bird.y,bird.width,bird.height);
}

function placePipes(){
    let topPipe={
        img :topPipeImg,
        x: pipeX,
        y:pipeY,
        width :pipeWidth,
        height:pipeHeight,
        passed :false
    }
}
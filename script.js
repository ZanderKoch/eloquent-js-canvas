let form;

let canvas;
let centerX;
let centerY;
let shortSideLength;
let margin;
let context;


function init(){
    form = document.querySelector("form");
    canvas = document.querySelector("canvas");
    
    centerX = canvas.width/2;
    centerY = canvas.height/2
    //console.log("Center: \n\rx: " + canvasCenterX + "  y: " + canvasCenterY);
    shortSideLength = Math.min(canvas.width, canvas.height);
    margin = shortSideLength / 8;

    context = canvas.getContext("2d");
    
    form.clear.onclick = clear;
    form.trapezoid.onclick = trapezoid;
    form.diamond.onclick = diamond;
    form.zigzag.onclick = zigzag;
    form.spiral.onclick = spiral;
    form.star.onclick = star;
}

function clear(){
    console.log("clearing");
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function trapezoid(){
    console.log("trapezoid");
    
    context.beginPath();
    context.moveTo(200, 100);
    context.lineTo(canvas.width - 200, 100);
    context.lineTo(canvas.width - 100, canvas.height - 100);
    context.lineTo(100, canvas.height - 100);
    context.closePath();
    context.stroke();
}

function diamond(){
    console.log("diamond");

    let cornerDistance = shortSideLength / 2 - margin;
    
    context.beginPath()
    context.moveTo(centerX, centerY - cornerDistance);
    context.lineTo(centerX + cornerDistance, centerY);
    context.lineTo(centerX, centerY + cornerDistance);
    context.lineTo(centerX - cornerDistance, centerY);
    context.fillStyle = "red";
    context.fill();
}

function zigzag(){
    console.log("zigzag");
    
    context.beginPath();
    context.moveTo(margin, margin);
    for(cycle = 1; cycle * margin <= canvas.height - margin; cycle++){
        console.log("yeah");
        if(cycle % 2 == 0){
            context.lineTo(margin, margin * cycle)
        }
        else{
            context.lineTo(canvas.width - margin, margin * cycle)
        }
    }
    context.stroke();
}

function spiral(){
    console.log("spiral");
}

function star(){
    console.log("star");
}

window.onload = init;
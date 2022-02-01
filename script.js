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
    form.house.onclick = house;

    //debug
    house();
}

function clear(){
    console.log("clearing");
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function trapezoid(){
    console.log("trapezoid");
    
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 1;
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
    context.strokeStyle = "black";
    context.lineWidth = 1;
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

    let segments = 1000;
    let maxRadius = shortSideLength/2 - margin;
    console.log("maxRadius = " + maxRadius)

    context.translate(centerX, centerY);
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 1;
    for(let i =1; i <= segments; i++){
        context.rotate((Math.PI * 6) / segments);
        context.lineTo(( maxRadius/ segments) * i, 0);
        
    }
    context.stroke();
    context.resetTransform();
}

function star(){
    console.log("star");

    let points = 5;
    let rotationStepSize = 2 * Math.PI / points;
    let angle = 0;

    let majorRadius = shortSideLength / 2 - margin;
    let minorRadius = majorRadius / 3;
    context.translate(centerX, centerY);
    context.beginPath();
    
    context.moveTo(majorRadius * Math.cos(angle),
                   majorRadius * Math.sin(angle));
    for(angle; angle < Math.PI * 2; angle += rotationStepSize){
        context.quadraticCurveTo(
            minorRadius * Math.cos(angle + rotationStepSize / 2),
            minorRadius * Math.sin(angle + rotationStepSize / 2),
            majorRadius * Math.cos(angle + rotationStepSize),
            majorRadius * Math.sin(angle + rotationStepSize)
        );
    }
    context.fillStyle = "yellow";
    context.fill();
    context.resetTransform();
}

function house(){
    //Sky
    context.fillStyle = "skyblue";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    //ground
    context.fillStyle = "darkgreen";
    context.fillRect(0,canvas.height - 200, canvas.width, 200);

    //clouds
    
    context.beginPath();
    context.fillStyle = "white";
    context.moveTo(200,300);
    context.arc(200, 300, 30, 0, 2 * Math.PI);
    context.arc(260, 300, 50, 0, 2 * Math.PI);
    context.arc(300, 320, 45, 0, 2 * Math.PI);

    context.moveTo(700, 300);
    context.arc(700, 300, 40, 0, 2 * Math.PI);
    context.arc(745, 300, 55, 0, 2 * Math.PI);
    context.arc(810, 320, 50, 0, 2 * Math.PI);
    context.fill();

    //house
    context.beginPath();
    context.fillStyle = "red";
    context.moveTo(350, canvas.height - 100);
    context.lineTo(350, canvas.height - 400);
    context.lineTo(550, canvas.height - 500);
    context.lineTo(750, canvas.height - 400);
    context.lineTo(750, canvas.height - 100);
    context.fill();

    //house border
    context.beginPath();
    context.strokeStyle = "white";
    context.lineWidth = 10
    context.moveTo(350, canvas.height - 100);
    context.lineTo(350, canvas.height - 400);
    context.lineTo(550, canvas.height - 500);
    context.lineTo(750, canvas.height - 400);
    context.lineTo(750, canvas.height - 100);
    context.stroke();

    //roof
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 10
    context.lineTo(350, canvas.height - 400);
    context.lineTo(550, canvas.height - 500);
    context.lineTo(750, canvas.height - 400);
    context.stroke();

    //door
    context.beginPath();
    context.fillStyle = "saddlebrown";
    context.fillRect(400, canvas.height - 225, 75, 125)

    //text
    context.fillStyle = "white"
    context.font = "12px Georgia"
    context.fillText("jag klarar inte att göra mer canvas")
}

window.onload = init;
let canvas = document.querySelector("canvas");
let form = document.querySelector("form");
let canvasCenterX;
let canvasCenterY;

function init(){
    canvasCenterX = canvas.width/2;
    canvasCenterY = canvas.height/2
    console.log("Center: \n\rx: " + canvasCenterX + "  y: " + canvasCenterY)
    
    form.clear.onclick = clear;
    form.trapezoid
}

function clear(){
    console.log("clearing")
}

function trapezoid(){

}

function zigzag(){

}

function spiral(){

}

function star(){

}

window.onload = init;
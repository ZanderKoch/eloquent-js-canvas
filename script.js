let form;

let canvas;
let canvasCenterX;
let canvasCenterY;
let context

function init(){
    form = document.querySelector("form");
    canvas = document.querySelector("canvas");
    
    canvasCenterX = canvas.width/2;
    canvasCenterY = canvas.height/2
    //console.log("Center: \n\rx: " + canvasCenterX + "  y: " + canvasCenterY)

    /**@type CanvasRenderingContext2D*/
    context = canvas.getContext("2d");
    
    form.clear.onclick = clear;
    form.trapezoid.onclick = trapezoid;
    form.diamond.onclick = diamond;
    form.zigzag.onclick = zigzag;
    form.spiral.onclick = spiral;
    form.star.onclick = star;
}

function clear(){
    console.log("clearing")
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function trapezoid(){
    console.log("trapezoid")
    context.
}

function diamond(){
    console.log("diamond")
}

function zigzag(){
    console.log("zigzag")
}

function spiral(){
    console.log("spiral")
}

function star(){
    console.log("star")
}

window.onload = init;
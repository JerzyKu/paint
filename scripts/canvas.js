// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;
let COLOR = 'black'
let LINE_WIDTH = 5 

const myPics = document.getElementById('main_canvas');
const context = myPics.getContext('2d');

window.onload = clear_canvas

context.lineWidth = LINE_WIDTH
// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = COLOR;
  context.lineWidth = LINE_WIDTH;
  context.lineCap = 'round' // fix fuzzy line 
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

function clear_canvas () {
    context.fillStyle = 'white';
    context.fillRect(0, 0, myPics.width, myPics.height);
    alert("clear canvas")
}




// var img = new Image();   // Create new img element
// img.src = './scripts/download.png';
// context.drawImage(img, 10, 10);
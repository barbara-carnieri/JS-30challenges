const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(event) {
  if(!isDrawing) return; // stop the fn from running when they are not moused
  console.log(event);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  ctx.beginPath();
  //start from
  ctx.moveTo(lastX, lastY);
  //go to
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  lastX = event.offsetX;
  lastY = event.offsetY;
  // [lastX, lastY] = [event.offsetX, event.offsetY];
  hue++;
};

canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  lastX = event.offsetX;
  lastY = event.offsetY;
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
import {
  DOTS_SIZE,
  DOTS_SPACE,
  DOT_OUTLINE_WIDTH,
  DOT_SHAPE,
  FLOWER_TYPE,
} from "./profile.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = "destination-over";
let number = 0;
let scale = DOTS_SPACE;
let size = DOTS_SIZE;
let flowerType = FLOWER_TYPE;

let dotShape = DOT_SHAPE;
let hue = Math.random() * 360; //for random color
function draw() {
  let angle = number * flowerType;
  let radius = scale * Math.sqrt(number);
  let positionX = radius * Math.sin(angle) + canvas.width / 2;
  let positionY = radius * Math.cos(angle) + canvas.height / 2;
  ctx.fillStyle = `hsl(${hue},100%,50%)`;
  ctx.strokeStyle = `white`;
  ctx.lineWidth = DOT_OUTLINE_WIDTH;
  ctx.beginPath();

  ctx.arc(positionX, positionY, size, dotShape, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  number += 1;
  hue += 0.1;
}

function animate() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw();
  if (number === window.innerWidth && number === window.innerHeight) return;
  requestAnimationFrame(animate);
}
animate();
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  //   animate();
});

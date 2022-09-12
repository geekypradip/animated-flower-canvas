const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = "destination-over";
let number = 0;
let scale = 5; //space between dots
let size = 3; //dots size
let flowerType = 7; //change the type of flower by modifying the value

let dotShape = 1; //dots shape
let hue = Math.random() * 360; //for random color
function draw() {
  let angle = number * flowerType;
  let radius = scale * Math.sqrt(number);
  let positionX = radius * Math.sin(angle) + canvas.width / 2;
  let positionY = radius * Math.cos(angle) + canvas.height / 2;
  ctx.fillStyle = `hsl(${hue},100%,50%)`;
  ctx.strokeStyle = `white`;
  ctx.lineWidth = 3;
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

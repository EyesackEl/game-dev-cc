const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);
let gameSpeed = 15;

const backgroundLayer1 = new Image();
backgroundLayer1.src = './assets/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = './assets/layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = './assets/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = './assets/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = './assets/layer-5.png';

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  requestAnimationFrame(animate);
}
animate();

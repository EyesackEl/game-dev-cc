let playerState = 'idle';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function (e) {
  playerState = e.target.value;
});
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
//? console.log(ctx);

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const spriteImage = new Image();
spriteImage.src = './assets/sprites.png';
const spriteWidth = 575;
const spriteHeight = 523;
console.log(document.getElementById('animations'));

let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
  {
    name: 'idle',
    frames: 7,
  },
  {
    name: 'jump',
    frames: 7,
  },
  {
    name: 'fall',
    frames: 7,
  },
  {
    name: 'run',
    frames: 9,
  },
  {
    name: 'dizzy',
    frames: 11,
  },
  {
    name: 'sit',
    frames: 5,
  },
  {
    name: 'roll',
    frames: 7,
  },
  {
    name: 'bite',
    frames: 7,
  },
  {
    name: 'ko',
    frames: 12,
  },
  {
    name: 'getHit',
    frames: 4,
  },
];

animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let posX = j * spriteWidth;
    let posY = index * spriteHeight;
    frames.loc.push({ x: posX, y: posY });
  }

  spriteAnimations[state.name] = frames;
});
//? console.log(spriteAnimations);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //?   s=source d=destination
  //?   ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
  let position =
    Math.floor(gameFrame / staggerFrames) %
    spriteAnimations[playerState].loc.length;
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].loc[position].y;
  ctx.drawImage(
    spriteImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();

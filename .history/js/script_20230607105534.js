const mario = document.querySelector("#mario");
const pipe = document.querySelector("#pipe");

let marioJumping = false;
let marioBottom = 0;
let pipeLeft = 100;

const jump = () => {
  if (!marioJumping) {
    marioJumping = true;
    marioBottom += 150;

    setTimeout(() => {
      marioJumping = false;
      marioBottom -= 150;
    }, 500);
  }
};

const updatePositions = () => {
  mario.style.bottom = `${marioBottom}px`;
  pipe.style.left = `${pipeLeft}%`;
};

const checkCollision = () => {
  const pipeRect = pipe.getBoundingClientRect();
  const marioRect = mario.getBoundingClientRect();

  return (
    pipeRect.left < marioRect.right &&
    pipeRect.right > marioRect.left &&
    pipeRect.bottom > marioRect.top &&
    pipeRect.top < marioRect.bottom
  );
};

const gameLoop = setInterval(() => {
    pipeLeft -= 2;
    if (pipeLeft < -10) {
      pipeLeft = 100;
    }
  
    updatePositions();

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    jump();
  }
});

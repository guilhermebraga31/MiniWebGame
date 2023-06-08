const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
  mario.classList.add("jump");
  setTimeout((jump) => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = window.getComputedStyle(mario).bottom;

  console.log(marioPosition); // parei aqui .

  if (pipePosition <= 120) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition} px `;
  }
}, 10);

document.addEventListener("keydown", jump);

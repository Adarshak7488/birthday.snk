const overlay = document.getElementById("overlay");
const story = document.getElementById("story");
const music = document.getElementById("music");

overlay.onclick = () => {
  overlay.style.display = "none";
  story.style.display = "block";
  music.play();
  launchConfetti();
  showPages();
};

const pages = document.querySelectorAll(".page");
let current = 0;

function showPages() {
  if (current < pages.length) {
    pages[current].classList.add("active");
    current++;
    setTimeout(showPages, 4000);
  }
}

// Confetti Animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];
for (let i = 0; i < 150; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    radius: Math.random() * 6 + 4,
    color: `hsl(${Math.random() * 360}, 100%, 60%)`,
    speed: Math.random() * 4 + 2
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of pieces) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.y += p.speed;
    if (p.y > canvas.height) p.y = -10;
  }
}

function launchConfetti() {
  setInterval(drawConfetti, 33);
}

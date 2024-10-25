const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createParticles();
});

function createParticles() {
  particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      dx: Math.random() * 0.5 - 0.25,
      dy: Math.random() * 0.5 - 0.25
    });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    // Bounce off edges
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    particles.forEach(other => {
      const distance = Math.sqrt((p.x - other.x) ** 2 + (p.y - other.y) ** 2);
      if (distance < 100) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(other.x, other.y);
        ctx.stroke();
      }
    });
  });

  requestAnimationFrame(animateParticles);
}

window.addEventListener('mousemove', e => {
  const dx = (e.clientX - mouse.x) * 0.0; // 0.01
  const dy = (e.clientY - mouse.y) * 0.0; // 0.01
  particles.forEach(p => {
    p.x += dx;
    p.y += dy;
  });
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function register() {
  alert("Register button clicked!");
}

createParticles();
animateParticles();

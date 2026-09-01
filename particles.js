/**
 * Canvas Gold Dust Particles & Stage Fireworks Effect
 */

(function () {
  const particleCanvas = document.getElementById('stage-particles');
  const pCtx = particleCanvas.getContext('2d');

  const fireworksCanvas = document.getElementById('fireworks-canvas');
  const fCtx = fireworksCanvas.getContext('2d');

  let width = 0;
  let height = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    particleCanvas.width = width;
    particleCanvas.height = height;
    fireworksCanvas.width = width;
    fireworksCanvas.height = height;
  }

  window.addEventListener('resize', resize);
  resize();

  // Floating Gold Dust Particles
  const particles = [];
  const PARTICLE_COUNT = 65;

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 2.5 + 0.8;
      this.speedY = Math.random() * 0.6 + 0.2;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.alpha = Math.random() * 0.7 + 0.2;
      this.pulseSpeed = Math.random() * 0.02 + 0.008;
      this.color = Math.random() > 0.3 ? '#fcf6ba' : '#b38728';
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.alpha += Math.sin(Date.now() * this.pulseSpeed) * 0.015;

      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
      }
    }

    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = Math.max(0.1, Math.min(1, this.alpha));
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#e6ca65';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  // Fireworks Sparkles on Winner
  let sparks = [];

  class Spark {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 7 + 2;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.gravity = 0.12;
      this.friction = 0.96;
      this.alpha = 1;
      this.decay = Math.random() * 0.02 + 0.012;
      this.size = Math.random() * 3 + 1.5;
    }

    update() {
      this.vx *= this.friction;
      this.vy *= this.friction;
      this.vy += this.gravity;
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= this.decay;
    }

    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.alpha);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 12;
      ctx.shadowColor = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  window.triggerFireworks = function () {
    const colors = ['#fff6bd', '#ffd700', '#e6ca65', '#ffffff', '#e0a96d'];
    const centerX = width / 2;
    const centerY = height * 0.45;

    // Multi burst
    for (let burst = 0; burst < 3; burst++) {
      setTimeout(() => {
        const offsetBX = centerX + (Math.random() - 0.5) * 350;
        const offsetBY = centerY + (Math.random() - 0.5) * 180;
        for (let i = 0; i < 60; i++) {
          const color = colors[Math.floor(Math.random() * colors.length)];
          sparks.push(new Spark(offsetBX, offsetBY, color));
        }
      }, burst * 200);
    }
  };

  // Main Render Loop
  function animate() {
    pCtx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw(pCtx);
    });

    fCtx.clearRect(0, 0, width, height);
    if (sparks.length > 0) {
      sparks.forEach(s => s.update());
      sparks.forEach(s => s.draw(fCtx));
      sparks = sparks.filter(s => s.alpha > 0);
    }

    requestAnimationFrame(animate);
  }

  animate();
})();


  const audio = document.getElementById('myAudio');
  
    document.addEventListener('DOMContentLoaded', function () {
      audio.play().catch(error => {
        // Gérer les erreurs liées à la lecture automatique ici, si nécessaire
      });
    });

(function () {
  const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

const fake_cursor = document.querySelector('.fake_cursor');
document.body.addEventListener("mousemove", function(event){
  fake_cursor.style.top = event.y + 'px';
  fake_cursor.style.left = event.x + 'px';
});

const canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    settings = {
        color: {
            r: 255,
            g: 255,
            b: 255
        }
    },
    loading = true;

let parts = [],
  minSpawnTime = 100,
  lastTime = new Date().getTime(),
  maxLifeTime = 2000,
  textPos = document.getElementsByTagName("h1")[0].getBoundingClientRect(),
  emitterX = textPos.left - 100,
  emitterY = textPos.bottom,
  emitter2X = textPos.left + 700,
  emitter2Y = textPos.bottom,
  smokeImage = new Image(),
  skullImage = new Image();

function spawn() {
  if (new Date().getTime() > lastTime + minSpawnTime) {
      lastTime = new Date().getTime();
      parts.push(new smoke(emitterX, emitterY));
      parts.push(new smoke(emitter2X, emitter2Y));
  }
}

function render() {
  if (loading) {
      load();
      return false;
  }

  let len = parts.length;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  while (len--) {
      if (parts[len].y < 0 || parts[len].lifeTime > maxLifeTime) {
          parts.splice(len, 1);
      } else {
          parts[len].update();

          ctx.save();
          const offsetX = -parts[len].size / 2,
                offsetY = -parts[len].size / 2;

          ctx.translate(parts[len].x - offsetX, parts[len].y - offsetY);
          ctx.rotate(parts[len].angle / 180 * Math.PI);
          ctx.globalAlpha = parts[len].alpha;
          ctx.drawImage(parts[len].image, offsetX, offsetY, parts[len].size, parts[len].size);
          ctx.restore();
      }
  }
  spawn();
  requestAnimationFrame(render);
}

function smoke(x, y, index) {
  this.image = smokeImage;
  this.angle = Math.random() * 359;
  this.startAlpha = 1;

  if (Math.random() > 0.85) {
      this.image = skullImage;
      this.angle = 0;
      this.startAlpha = 1;
  }
  this.x = x;
  this.y = y;

  this.size = 1;
  this.startSize = 50 + Math.random() * 10;
  this.endSize = 70 + Math.random() * 10;;

  this.startLife = new Date().getTime();
  this.lifeTime = 0;

  this.velY = -2;
  this.velX = -2 + (Math.random() * 4);
}

smoke.prototype.update = function () {
  this.lifeTime = new Date().getTime() - this.startLife;
  this.angle += 0.2;

  const lifePerc = ((this.lifeTime / maxLifeTime) * 100);

  this.size = this.startSize + ((this.endSize - this.startSize) * lifePerc * 0.1);

  this.alpha = this.startAlpha - (lifePerc * 0.01);
  this.alpha = Math.max(this.alpha, 0);

  this.x += this.velX;
  this.y += this.velY;
}

smokeImage.onload = function () {
  loading = false;
}

function load() {
  if (loading) {
      setTimeout(load, 100);
  } else {
      render();
  }
}

window.onresize = resizeMe;
window.onload = resizeMe;

function resizeMe() {
  canvas.width = window.innerWidth;
  textPos = document.getElementsByTagName("h1")[0].getBoundingClientRect();
  emitterX = textPos.left - 100;
  emitterY = textPos.bottom - 50;
  emitter2X = textPos.left + 700;
  emitter2Y = textPos.bottom - 50;
}

setTimeout(function () {
  canvas.height = 600;
  canvas.width = window.innerWidth;
  render();
}, 100);

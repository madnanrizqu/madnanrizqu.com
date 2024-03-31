function main() {
  // Initialising the canvas
  const canvas = document.getElementById("hero_background"),
    ctx = canvas.getContext("2d");

  const parent = document.getElementById("hero");

  // Setting the width and height of the canvas
  canvas.width = parent.clientWidth;
  canvas.height = parent.clientHeight;

  // Setting up the letters
  const letters = "01".split("");

  // Setting up the columns
  const fontSize = 13,
    columns = canvas.width / fontSize;

  // Setting up font size
  ctx.font = `${fontSize}px monospace`;

  // Setting up the drops
  const drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  // Setting up the draw function
  function draw() {
    ctx.fillStyle = "rgba(255, 255, 255, .1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillStyle = "#e2e2e2";
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
        drops[i] = 0;
      }
    }
  }

  // Loop the animation
  setInterval(draw, 99);
}

document.addEventListener("DOMContentLoaded", () => {
  main();
});

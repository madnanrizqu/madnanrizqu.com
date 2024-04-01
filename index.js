function heroBackground() {
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
      ctx.fillStyle = "rgba(31, 169, 200, 0.221)";
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

function heroAnimatedHeadline() {
  const text = document.getElementById("hero__dynamic_text");

  try {
    // Set to no content to avoid jitter
    text.textContent = "";

    var typed = new Typed("#hero__dynamic_text", {
      strings: ["smooth", "reliable", "engaging", "aesthetic", "powerful"],
      typeSpeed: 100,
      startDelay: 300,
      loop: true,
      showCursor: false,
    });
  } catch (error) {
    text.textContent = "smooth"; // add fallback incase type.js fails to load
  }
}

function initDrawerToggleListener() {
  const toggler = document.getElementById("mobile_drawer_toggle");
  toggler.addEventListener("click", toggleMobileDrawer);
}

function initButtonDialogListener() {
  const openButtons = document.querySelectorAll("[data-open-dialog-id]");
  openButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const openDialogId = btn.dataset.openDialogId;
      const dialog = document.getElementById(openDialogId);
      dialog.showModal();
    });
  });

  const closeButtons = document.querySelectorAll("[data-close-dialog-id]");
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const closeDialogId = btn.dataset.closeDialogId;
      const dialog = document.getElementById(closeDialogId);
      dialog.close();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  heroBackground();
  heroAnimatedHeadline();
  initDrawerToggleListener();
  initButtonDialogListener();
});

function toggleMobileDrawer() {
  const toggler = document.getElementById("mobile_drawer_toggle");
  const drawer = document.getElementById("mobile_drawer");
  const [openIcon, closeIcon] = toggler.children;

  const hideClassName = "u_hide_all";

  if (closeIcon.classList.contains(hideClassName)) {
    // Open drawer

    // Change icons
    closeIcon.classList.remove(hideClassName);
    openIcon.classList.add(hideClassName);

    // Show drawer
    drawer.classList.remove(hideClassName);
  } else {
    // Close drawer

    // Change icons
    closeIcon.classList.add(hideClassName);
    openIcon.classList.remove(hideClassName);

    // Hide drawer
    drawer.classList.add(hideClassName);
  }
}

// TODO: refactor to use js modules. reuse in all pages
function initDrawerToggleListener() {
  const toggler = document.getElementById("mobile_drawer_toggle");
  toggler.addEventListener("click", toggleMobileDrawer);
}

document.addEventListener("DOMContentLoaded", () => {
  initDrawerToggleListener();
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

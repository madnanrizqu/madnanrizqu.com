// TODO: refactor to use js modules. reuse in home page and portfolio
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

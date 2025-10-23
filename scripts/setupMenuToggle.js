// MENU hamburger animation
export function setupMenuToggle() {
  const menuToggle = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".navbar-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("open");
    });
  } else {
    console.warn("⚠️ No se encontró .menu-icon o .navbar-links");
  }
}

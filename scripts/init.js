//imports
import { setupHead } from "./setupHead.js";
import { setupLogo } from "./setupLogo.js";
import { loadComponent } from "./loadComponents.js";
import { setupMenuToggle } from "./setupMenuToggle.js";

// 🌐 DOM
const logoId = "site_logo"
// let logoElement = document.getElementById(logoId);

// 📁 Imgs paths
const logoLight = "/assets/images/logo_light.png";
const logoDark = "/assets/images/logo_dark.png";
const faviconImg = "/assets/images/favicon.ico";

//init
document.addEventListener("DOMContentLoaded", () => {
  //config head
    setupHead(faviconImg);
  
    //load navbar (menu)
    loadComponent("navbar", "/components/navbar/navbar.html", () => {
      setupLogo(logoId, logoLight, logoDark);
      setupMenuToggle //hamburger animation
  
      // detect active link on Menu
      const currentPath = window.location.pathname;
      const links = document.querySelectorAll(".navbar-links li a");
      links.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
          link.classList.add("active");
        }
      });
    });
  
    //load footer
    loadComponent("footer", "/components/footer/footer.html");
  });
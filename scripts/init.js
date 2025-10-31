//imports
import { setupHead } from "./setupHead.js";
import { setupLogo } from "./setupLogo.js";
import { loadComponent } from "./loadComponents.js";
import { setupMenuToggle } from "./setupMenuToggle.js";
import { setupFooter} from "./setupFooter.js";

// 🌐 DOM
const logoId = "site_logo"
// let logoElement = document.getElementById(logoId);

// 📁 Imgs paths
const logoLight = "/assets/images/logo_light.png";
const logoDark = "/assets/images/logo_dark.png";
const faviconImg = "/assets/images/favicon.ico";

//init
document.addEventListener("DOMContentLoaded", () => {
  //config head and favicon
    setupHead(faviconImg);
  
    //load navbar (menu)
    loadComponent("navbar", "/components/navbar/navbar.html", () => {
      setupLogo(logoId, logoLight, logoDark, ".navbar");
      setupMenuToggle(); //hamburger animation
  
      // detect active link on Menu -> apply active class
      const currentPath = window.location.pathname.toLowerCase();
      const links = document.querySelectorAll(".navbar-links li a");
      
      // recorre cada link del menu y compara href con url actual. Todo se convierte a minusculas Page -> page
      links.forEach(link => {
        const href = link.getAttribute("href");
        if(!href) return;
      })

      const normalizedHref = href.toLowerCase();

      // exact match -> URL es identica a href
      const matchesExactPath = currentPath === normalizedHref;

      // suffix match -> URL ends with href
      const matchesTail = currentPath.endsWith(normalizedHref);

      // quitar index.html para home -> solo sale /
            const isHomeIndex =
        normalizedHref.endsWith("index.html") && (currentPath === "/" || currentPath.endsWith("/"));

      if (matchesExactPath || matchesTail || isHomeIndex) {
        link.classList.add("active");
      }
  });
  
  //load footer
  loadComponent("footer", "/components/footer/footer.html", () => {
    setupFooter();
    setupLogo("footer_logo", logoLight, logoDark, ".footer");
  });
});
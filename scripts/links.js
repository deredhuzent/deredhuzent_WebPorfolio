// 🌐 DOM
const head = document.head;
const logoId = "site_logo"
let logoElement = document.getElementById(logoId);

//stylesheets to load
const links = [
  "/styles/style.css",
  "/components/navbar/navbar.css",
  "/components/footer/footer.css"
];

// 📁 Imgs paths
const logoLight = "/assets/images/logo_light.png";
const logoDark = "/assets/images/logo_dark.png";
const faviconImg = "/assets/images/favicon.png"

//Theme Detection
const prefersDark = window.matchMedia("(prefers-colo-scheme: dark)").matches;

function setupHead() {
    //loading styles
    links.forEach(href => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      head.appendChild(link);
    });
    
    //meta viewport
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1.0";
    head.appendChild(meta);

    //loading Favicon
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = faviconImg;
    head.appendChild(favicon);
}

function setupLogo(){
    logoElement = document.getElementById(logoId);
    //DYNAMIC LOGO -> assign logo according to theme
    if (logoElement) {
        logoElement.src = prefersDark ? logoDark : logoLight;
    }
    
    //change of logo if theme changes real time
    window.matchMedia("prefers-colorscheme: dark").addEventListener("change", e => {
        const logo = document.getElementById(logoId);
        if(logo){
            logo.src = e.matches ? logoDark : logoLight;
        }
    })
}

//Compoment Loader
function loadComponent(id, path, callback) {
    fetch(path)
    .then(res => res.text())
    .then(html => {
        document.getElementById(id).innerHTML = html;
        if(typeof callback === 'function') callback();
    })
}

//init
document.addEventListener("DOMContentLoaded", () => {
    setupHead();
  
    loadComponent("navbar", "/components/navbar/navbar.html", () => {
      setupLogo();
  
      // detect active link
      const currentPath = window.location.pathname;
      const links = document.querySelectorAll(".navbar-links li a");
      links.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
          link.classList.add("active");
        }
      });
    });
  
    loadComponent("footer", "/components/footer/footer.html");
  });
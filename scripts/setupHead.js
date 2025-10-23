// config head
export function setupHead(faviconImg){
    const head = document.head;

    //style sheets array
    const links = [
        "/styles/style.css",
        "/components/navbar/navbar.css",
        "/components/footer/footer.css"
    ];

    //load styles
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
    
    //favicon
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = faviconImg;
    head.appendChild(favicon);
}
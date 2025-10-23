// dynamic logo according to theme
export function setupLogo(logoId, logoLight, logoDark) {
    const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const prefersDark = themeQuery.matches; 
    const logoElement = document.getElementById(logoId);

    //which logo to load
    if (logoElement) {
        logoElement.src = prefersDark ? logoDark : logoLight;
    }  

    //check theme in real time
    themeQuery.addEventListener("change", e => {
        const logo = document.getElementById(logoId);
        if(logo) {
            logo.src = e.matches ? logoDark : logoLight;
        }
    })

}
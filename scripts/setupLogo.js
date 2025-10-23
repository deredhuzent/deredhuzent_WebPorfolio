// dynamic logo according to theme
export function setupLogo(logoId, logoLight, logoDark) {
    const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const prefersDark = themeQuery.matches; 
    const logoElement = document.getElementById(logoId);

    //load logo
    if (logoElement) {
        logoElement.src = logoLight;
        //which logo to load dark or light
        // logoElement.src = prefersDark ? logoDark : logoLight;
    }  

    //check theme in real time
    // themeQuery.addEventListener("change", e => {
    //     const logo = document.getElementById(logoId);
    //     if(logo) {
    //         logo.src = e.matches ? logoDark : logoLight;
    //     }
    // })

}
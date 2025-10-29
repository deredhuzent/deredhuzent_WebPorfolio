// dynamic logo \
// 1) Decision function (you can grow this later)
function whichLogoToUse(logoElement, brightness, { light, dark, threshold = 127 }) {
// bright bg -> dark logo | dark bg -> light logo
logoElement.src = brightness > threshold ? light : dark;
}

//dynamic logo based on background
export function setupLogo(logoId, logoLight, logoDark, backgroundSelector, opts = {}) {
//get logoElement
    const logoElement = document.getElementById(logoId);
    if (!logoElement) return;

//find target's background color
    const background_target = document.querySelector(backgroundSelector);
    if (!background_target) return;
3
 //ger the beackground color (like "rgb #, # , #)")
    const background_Color = window.getComputedStyle(background_target).backgroundColor;

 // convert color txt to numbers
    const rgb = background_Color.match(/\d+/g)?.map(Number);
    if(!rgb || rgb.length < 3) return; //safety check

//calculate birghtness of background --> 0 = black, 255 = white
const brightness = (rgb[0] * 299 + rgb [1] * 587 + rgb [2] * 114) / 1000;


//choose which logo to use
whichLogoToUse(logoElement, brightness, {
    light: logoLight,
    dark:  logoDark,
    threshold: opts.threshold ?? 127,
});
}

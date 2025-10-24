export function setupFooter() {
    
    //logo


    // Dynamic year in copyright
    const yearSpan = document.getElementById("year");
    if (yearSpan){
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }
}
// copyright
document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById("copyright");
    copyrightElement.textContent += "2023-" + currentYear + " kmiharu.com";
});

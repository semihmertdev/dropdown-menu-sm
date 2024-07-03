document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");

    // Toggle menu visibility on button click
    menuButton.addEventListener("click", () => {
        menu.classList.toggle("visible");
    });

    // Show menu on hover
    menuButton.addEventListener("mouseenter", () => {
        menu.classList.add("visible");
    });

    menuButton.addEventListener("mouseleave", () => {
        menu.classList.remove("visible");
    });

    menu.addEventListener("mouseenter", () => {
        menu.classList.add("visible");
    });

    menu.addEventListener("mouseleave", () => {
        menu.classList.remove("visible");
    });
});

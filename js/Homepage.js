const acordeons = document.querySelectorAll(".footer_acordeonDisplay");

acordeons.forEach((footer_acordeonDisplay) => {
    footer_acordeonDisplay.addEventListener("click", () => {
        footer_acordeonDisplay.classList.toggle("active")
    });
});
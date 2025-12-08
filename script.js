// ====== Smooth Animations + Dark Mode Toggle ======

// Detect elements
const toggleBtn = document.getElementById("theme-toggle");

// Load saved mode on page load
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
};

// Toggle dark/light mode
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        // Save in browser
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

// Subtle fade-in animation when navigating between pages
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 0.6s ease";
        document.body.style.opacity = 1;
    }, 50);
});
// Handles contact form interaction

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const contactSection = document.getElementById("contact");
    const thankYouMessage = document.getElementById("thankYouMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // stop page refresh

        // Hide contact form content
        form.style.display = "none";

        // Show thank-you message
        thankYouMessage.hidden = false;
    });
});


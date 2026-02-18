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

// Character counter for message textarea
const messageInput = document.getElementById("message");
const charCount = document.getElementById("charCount");
const maxLength = 300;

messageInput.setAttribute("maxlength", maxLength);

messageInput.addEventListener("input", () => {
    const length = messageInput.value.length;
    charCount.textContent = `${length} / ${maxLength}`;
});


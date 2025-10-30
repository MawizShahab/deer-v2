/* hamburger */

const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const navLinks = navbar.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

// Close menu when link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

/* Reference Slider */

$(document).ready(function () {
  $(".reference-card.owl-carousel").owlCarousel({
    loop: true, // Enable looping
    // items: 3, // Show one testimonial per row
    dots: false, // Enable dots navigation
    nav: true, // Enable arrows navigation
    margin: 20, // Adjust the space between testimonial items
    autoplay: true,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1, // 📱 Mobile: 1 item per row
      },
      768: {
        items: 2, // 💻 Tablet: 2 items per row
      },
      1024: {
        items: 3, // 🖥️ Desktop: 3 items per row
      },
    },
  });
});

/* Retype Text */

const phrases = ["UI/UX návrhy", "UI navrhy", "UX navrhy", "moderné rozhrania"];

const el = document.getElementById("dynamic-text");
let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;

function typeEffect() {
  const phrase = phrases[currentPhrase];

  // Create the text to display
  const displayText = phrase.substring(0, currentChar);
  el.textContent = displayText;

  if (!isDeleting && currentChar < phrase.length) {
    currentChar++;
    setTimeout(typeEffect, 100); // typing speed
  } else if (!isDeleting && currentChar === phrase.length) {
    // ✅ reached full phrase, wait before deleting
    isDeleting = true;
    setTimeout(typeEffect, 3000);
  } else if (isDeleting && currentChar > 0) {
    currentChar--;
    setTimeout(typeEffect, 60); // deleting speed
  } else if (isDeleting && currentChar === 0) {
    // move to next phrase
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(typeEffect, 2000);
  }
}

// Start typing effect after 5 seconds
window.addEventListener("load", () => {
  setTimeout(() => {
    typeEffect();
  }, 3000);
});

/* Cursor Move */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", (e) => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

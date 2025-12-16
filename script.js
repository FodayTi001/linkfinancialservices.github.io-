// script.js - Corporate Accordion (single-file replacement)
console.log("Link Financial Services website loaded successfully.");

document.addEventListener("DOMContentLoaded", function () {

  // nav highlight (keep if present)
  try {
    const navLinks = document.querySelectorAll("nav ul li a");
    const currentPage = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) link.classList.add("active");
    });
  } catch (e) {
    // ignore
  }

  // Accordion functionality (single-open, keyboard accessible)
  const headers = Array.from(document.querySelectorAll(".accordion-header"));

  headers.forEach(header => {
    // make keyboard accessible (Enter / Space)
    header.setAttribute("tabindex", "0");
    header.addEventListener("click", () => toggle(header));
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle(header);
      }
    });
  });

  function toggle(clicked) {
    const content = clicked.nextElementSibling;
    const isOpen = clicked.classList.contains("active");

    // close all
    headers.forEach(h => {
      h.classList.remove("active");
      h.setAttribute("aria-expanded", "false");
      const c = h.nextElementSibling;
      if (c) c.classList.remove("open");
    });

    // open clicked if it was closed
    if (!isOpen) {
      clicked.classList.add("active");
      clicked.setAttribute("aria-expanded", "true");
      if (content) {
        content.classList.add("open");
        // ensure smooth transition by setting maxHeight based on scrollHeight
        content.style.maxHeight = content.scrollHeight + "px";
      }
    } else {
      // ensure collapsed content has no maxHeight set (allow CSS to close)
      if (content) content.style.maxHeight = null;
    }
  }

  // On resize, recompute open accordion maxHeight (keeps transitions correct)
  window.addEventListener("resize", () => {
    const openContent = document.querySelector(".accordion-content.open");
    if (openContent) {
      openContent.style.maxHeight = openContent.scrollHeight + "px";
    }
  });

});

/* ==========================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================== */

function revealElements() {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 120) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);


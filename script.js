"use strict";

// Keep the copyright year current without making the page depend on JavaScript.
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Highlight the section currently being read. Native anchor links still work without JS.
const navigationLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sections = navigationLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateActiveSection() {
  const readingLine = window.innerHeight * 0.35;
  let activeSection = sections[0];

  for (const section of sections) {
    if (section.getBoundingClientRect().top <= readingLine) activeSection = section;
  }

  // Make the last section active even when it is shorter than the viewport.
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    activeSection = sections[sections.length - 1];
  }

  for (const link of navigationLinks) {
    if (activeSection && link.hash === `#${activeSection.id}`) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  }
}

let scrollUpdatePending = false;
window.addEventListener("scroll", () => {
  if (scrollUpdatePending) return;
  scrollUpdatePending = true;
  window.requestAnimationFrame(() => {
    updateActiveSection();
    scrollUpdatePending = false;
  });
}, { passive: true });
window.addEventListener("resize", updateActiveSection);
window.addEventListener("load", updateActiveSection);
updateActiveSection();

// Clipboard support is optional. The email link is always available as a fallback.
const copyButton = document.querySelector(".copy-email");
const copyStatus = document.querySelector(".copy-status");
if (copyButton && copyStatus && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  let resetMessage;

  copyButton.addEventListener("click", async () => {
    window.clearTimeout(resetMessage);
    try {
      await navigator.clipboard.writeText(copyButton.dataset.email);
      copyStatus.textContent = "Email copied.";
    } catch {
      copyStatus.textContent = "Please select and copy the email address above.";
    }
    resetMessage = window.setTimeout(() => { copyStatus.textContent = ""; }, 5000);
  });
}

"use strict";

// Dynamic Year
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// Custom Cursor
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");

if (cursor && ring) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    ring.style.left = `${e.clientX}px`;
    ring.style.top = `${e.clientY}px`;
  });

  const cards = document.querySelectorAll(".link-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      ring.classList.add("hovered");
    });

    card.addEventListener("mouseleave", () => {
      ring.classList.remove("hovered");
    });
  });
}

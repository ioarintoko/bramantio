// Shared behaviour across pages: mobile nav toggle + active link highlighting.

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });
  }

  // Highlight the current page in the nav based on data-page attribute
  const current = document.body.getAttribute("data-page");
  if (current) {
    document.querySelectorAll(".nav-links a").forEach((a) => {
      if (a.getAttribute("data-page") === current) {
        a.classList.add("active");
      }
    });
  }
});

// Utility: read a query param, e.g. getParam("id")
function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

// Contact form: no backend yet, so we just show a success state locally.
function handleContactSubmit(event) {
  event.preventDefault();
  const form = document.getElementById("contact-form");
  const success = document.getElementById("contact-success");
  if (form && success) {
    form.classList.add("hidden");
    success.classList.remove("hidden");
  }
  return false;
}

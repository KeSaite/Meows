(() => {
  "use strict";

  function initializeEmailLinks() {
    document.querySelectorAll("[data-email]").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        let address;
        try {
          address = atob(link.dataset.email);
        } catch (_) {
          return;
        }

        link.href = `mailto:${address}`;
        link.textContent = address;
        link.removeAttribute("data-i18n");
        link.removeAttribute("data-email");
      }, { once: true });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeEmailLinks, { once: true });
  } else {
    initializeEmailLinks();
  }
})();

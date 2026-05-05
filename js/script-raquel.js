/**
 * Perfil Raquel: navegación por secciones + copiar URL del perfil.
 */
(function () {
  "use strict";

  const SECTION_IDS = ["sobre-mi", "habilidades", "peliculas", "discos"];

  function setActiveNavLink(navRoot, activeId) {
    const links = navRoot.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      const href = link.getAttribute("href");
      const match = href === `#${activeId}`;
      link.classList.toggle("nav-section-active", match);
      if (match) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function initScrollSpy() {
    const nav = document.getElementById("nav-principal");
    if (!nav) return;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const ratios = new Map();

    const pickBest = () => {
      let bestId = null;
      let best = -1;
      ratios.forEach((ratio, id) => {
        if (ratio > best) {
          best = ratio;
          bestId = id;
        }
      });
      if (bestId) setActiveNavLink(nav, bestId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            ratios.set(id, entry.intersectionRatio);
          } else {
            ratios.set(id, 0);
          }
        });
        pickBest();
      },
      {
        root: null,
        rootMargin: "-12% 0px -12% 0px",
        threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    const hash = window.location.hash.slice(1);
    if (hash && SECTION_IDS.includes(hash)) {
      setActiveNavLink(nav, hash);
    } else {
      setActiveNavLink(nav, sections[0].id);
    }
  }

  function initCopyProfileUrl() {
    const btn = document.getElementById("copy-profile-url");
    if (!btn) return;

    const label = btn.querySelector(".copy-profile-text");
    const original = label ? label.textContent : "";

    const showDone = () => {
      if (label) label.textContent = "¡Enlace copiado!";
      btn.classList.add("is-copied");
      window.setTimeout(() => {
        if (label) label.textContent = original;
        btn.classList.remove("is-copied");
      }, 2200);
    };

    btn.addEventListener("click", async () => {
      const url = window.location.href.split("#")[0];
      try {
        await navigator.clipboard.writeText(url);
        showDone();
      } catch {
        try {
          const ta = document.createElement("textarea");
          ta.value = url;
          ta.setAttribute("readonly", "");
          ta.style.position = "fixed";
          ta.style.left = "-9999px";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          showDone();
        } catch {
          if (label) label.textContent = "No se pudo copiar";
          window.setTimeout(() => {
            if (label) label.textContent = original;
          }, 2000);
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initScrollSpy();
    initCopyProfileUrl();
  });
})();

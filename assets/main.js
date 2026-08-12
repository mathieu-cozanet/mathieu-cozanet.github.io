/* Thème, apparition au défilement, année courante. Aucune dépendance.
   Le thème mémorisé est déjà appliqué par le script en <head> pour éviter
   un flash ; on ne gère ici que le basculement manuel. */

(function () {
  "use strict";

  var root = document.documentElement;
  var STORE = "theme";

  /* ---- thème ---- */

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function currentTheme() {
    var explicit = root.getAttribute("data-theme");
    if (explicit === "dark" || explicit === "light") { return explicit; }
    return systemPrefersDark() ? "dark" : "light";
  }

  try {
    var saved = localStorage.getItem(STORE);
    if (saved === "dark" || saved === "light") { root.setAttribute("data-theme", saved); }
  } catch (e) { /* stockage indisponible : on garde la préférence système */ }

  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(STORE, next); } catch (e) {}
      toggle.setAttribute("aria-label",
        next === "dark" ? "Basculer vers le thème clair" : "Basculer vers le thème sombre");
    });
  }

  /* ---- apparition au défilement ---- */

  var items = document.querySelectorAll(".reveal");
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || reduced) {
    for (var i = 0; i < items.length; i++) { items[i].classList.add("in"); }
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });

    items.forEach(function (el, index) {
      el.style.transitionDelay = Math.min(index % 6, 5) * 55 + "ms";
      io.observe(el);
    });
  }

  /* ---- année ---- */

  var year = document.getElementById("year");
  if (year) { year.textContent = String(new Date().getFullYear()); }
})();

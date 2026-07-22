// PIZZA SNACK LES ÉCARTS — scripts partagés

document.addEventListener('DOMContentLoaded', function () {
  // --- Menu mobile (hamburger) ---
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Onglets de la carte (menu.html) ---
  var tabs = document.querySelectorAll('.menu-tab');
  var panels = document.querySelectorAll('.menu-panel');

  function activateTab(target) {
    tabs.forEach(function (t) {
      t.classList.toggle('is-active', t.dataset.target === target);
    });
    panels.forEach(function (p) {
      p.classList.toggle('is-active', p.id === target);
    });
  }

  if (tabs.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activateTab(tab.dataset.target);
        history.replaceState(null, '', '#' + tab.dataset.target);
      });
    });

    var initial = window.location.hash ? window.location.hash.substring(1) : tabs[0].dataset.target;
    var validTargets = Array.prototype.map.call(tabs, function (t) { return t.dataset.target; });
    if (validTargets.indexOf(initial) === -1) initial = tabs[0].dataset.target;
    activateTab(initial);
  }
});

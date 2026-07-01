document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.lang-btn');
  var blocks = document.querySelectorAll('.lang-block');
  var storageKey = 'portfolio-lang';

  function applyLanguage(lang) {
    blocks.forEach(function (block) {
      block.hidden = block.getAttribute('data-lang') !== lang;
    });
    buttons.forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    document.documentElement.setAttribute('lang', lang);
  }

  function getSavedLanguage() {
    try {
      return localStorage.getItem(storageKey);
    } catch (e) {
      return null;
    }
  }

  function saveLanguage(lang) {
    try {
      localStorage.setItem(storageKey, lang);
    } catch (e) {
      /* localStorage unavailable, ignore */
    }
  }

  var initialLang = getSavedLanguage() === 'en' ? 'en' : 'ja';
  applyLanguage(initialLang);

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      applyLanguage(lang);
      saveLanguage(lang);
    });
  });
});

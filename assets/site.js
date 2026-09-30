(() => {
  const key = 'sc900-site-language';
  const initial = localStorage.getItem(key) || (navigator.language.startsWith('vi') ? 'vi' : 'en');
  function setLanguage(language) {
    if (!['vi', 'en'].includes(language)) return;
    document.documentElement.lang = language;
    document.body.dataset.language = language;
    localStorage.setItem(key, language);
    document.querySelectorAll('[data-language-button]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.languageButton === language));
    });
    document.title = document.querySelector('title').dataset[language];
  }
  document.querySelectorAll('[data-language-button]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.languageButton));
  });
  setLanguage(initial);
})();

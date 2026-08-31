function applyLanguage(dict, key) {
  const current = dict[key] || dict.en;

  if (current.meta_title) document.title = current.meta_title;
  const description = document.querySelector('meta[name="description"]');
  if (description && current.meta_description) description.content = current.meta_description;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = current[element.dataset.i18n];
    if (value != null) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = current[element.dataset.i18nAriaLabel];
    if (value != null) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-src]").forEach((element) => {
    const value = current[element.dataset.i18nSrc];
    if (value != null) element.src = value;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = current[element.dataset.i18nAlt];
    if (value != null) element.alt = value;
  });
}

function applyI18n(dict) {
  window.MeowsLanguage.initialize({
    languages: Object.keys(dict),
    apply: (key) => applyLanguage(dict, key),
    labels: (key) => {
      const current = dict[key] || dict.en;
      return {
        languageLabel: current.language_label,
        automaticLabel: current.language_auto
      };
    }
  });
}

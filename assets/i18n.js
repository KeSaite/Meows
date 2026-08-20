/* Shared localization for document-style pages. The home page owns the manual picker;
   this file follows that saved choice when a visitor opens the privacy policy. */
function browserLanguage() {
  const language = (navigator.language || "en").toLowerCase();
  if (language.startsWith("zh")) {
    return language.includes("tw") || language.includes("hk") || language.includes("mo") || language.includes("hant") ? "zhTW" : "zhCN";
  }
  if (language.startsWith("ja")) return "ja";
  if (language.startsWith("ko")) return "ko";
  return "en";
}

function pickLang() {
  try {
    const saved = localStorage.getItem("meows-site-language");
    if (["en", "zhCN", "zhTW", "ja", "ko"].includes(saved)) return saved;
  } catch (_) {}
  return browserLanguage();
}

function applyI18n(dict) {
  const key = pickLang();
  const current = dict[key] || dict.en;
  document.documentElement.lang = { zhCN: "zh-Hans", zhTW: "zh-Hant", ja: "ja", ko: "ko", en: "en" }[key];

  if (current.meta_title) document.title = current.meta_title;
  const description = document.querySelector('meta[name="description"]');
  if (description && current.meta_description) description.content = current.meta_description;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = current[element.dataset.i18n];
    if (value != null) element.textContent = value;
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

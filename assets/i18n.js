const LANG_ATTR = Object.freeze({ en: "en", zhCN: "zh-Hans", zhTW: "zh-Hant", ja: "ja", ko: "ko" });
const LANGUAGE_NAMES = Object.freeze({
  en: { label: "English", code: "EN" },
  zhCN: { label: "简体中文", code: "简" },
  zhTW: { label: "繁體中文", code: "繁" },
  ja: { label: "日本語", code: "日" },
  ko: { label: "한국어", code: "한" }
});

function browserLanguage() {
  const language = (navigator.language || "en").toLowerCase();
  if (language.startsWith("zh")) {
    return language.includes("tw") || language.includes("hk") || language.includes("mo") || language.includes("hant") ? "zhTW" : "zhCN";
  }
  if (language.startsWith("ja")) return "ja";
  if (language.startsWith("ko")) return "ko";
  return "en";
}

function applyLanguage(dict, choice) {
  const key = choice === "auto" ? browserLanguage() : (dict[choice] ? choice : "en");
  const current = dict[key] || dict.en;
  document.documentElement.lang = LANG_ATTR[key];
  document.documentElement.dataset.language = key;

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

  return key;
}

function applyI18n(dict) {
  const switcher = document.querySelector("[data-language-switcher]");
  const validChoices = new Set(["auto", ...Object.keys(dict)]);
  let saved = "auto";
  try { saved = localStorage.getItem("meows-site-language") || "auto"; } catch (_) {}
  let selectedChoice = validChoices.has(saved) ? saved : "auto";

  if (!switcher) {
    applyLanguage(dict, selectedChoice);
    return;
  }

  const trigger = switcher.querySelector("[data-language-trigger]");
  const menu = switcher.querySelector("[data-language-menu]");
  const currentLabel = switcher.querySelector("[data-language-current-label]");
  const currentCode = switcher.querySelector("[data-language-current-code]");
  const options = [...menu.querySelectorAll("[data-language-choice]")];

  function updateSwitcher(appliedKey) {
    const name = LANGUAGE_NAMES[appliedKey] || LANGUAGE_NAMES.en;
    const current = dict[appliedKey] || dict.en;
    currentLabel.textContent = name.label;
    currentCode.textContent = name.code;
    trigger.setAttribute("aria-label", `${current.language_label}: ${name.label}${selectedChoice === "auto" ? ` · ${current.language_auto}` : ""}`);
    options.forEach((option) => {
      option.setAttribute("aria-selected", String(option.dataset.languageChoice === selectedChoice));
    });
  }

  function closeMenu(returnFocus = false) {
    menu.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    if (returnFocus) trigger.focus();
  }

  function openMenu(focusSelected = false) {
    menu.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    if (focusSelected) {
      const selected = options.find((option) => option.dataset.languageChoice === selectedChoice) || options[0];
      selected.focus();
    }
  }

  function chooseLanguage(choice) {
    selectedChoice = validChoices.has(choice) ? choice : "auto";
    try { localStorage.setItem("meows-site-language", selectedChoice); } catch (_) {}
    const activeLanguage = applyLanguage(dict, selectedChoice);
    updateSwitcher(activeLanguage);
    closeMenu(true);
  }

  const activeLanguage = applyLanguage(dict, selectedChoice);
  updateSwitcher(activeLanguage);

  trigger.addEventListener("click", () => {
    if (menu.hidden) openMenu(false);
    else closeMenu(false);
  });

  trigger.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      openMenu(true);
    }
  });

  options.forEach((option) => {
    option.addEventListener("click", () => chooseLanguage(option.dataset.languageChoice));
  });

  menu.addEventListener("keydown", (event) => {
    const focusedIndex = options.indexOf(document.activeElement);
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex = focusedIndex < 0 ? 0 : (focusedIndex + direction + options.length) % options.length;
      options[nextIndex].focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      options[0].focus();
    } else if (event.key === "End") {
      event.preventDefault();
      options[options.length - 1].focus();
    } else if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(true);
    } else if (event.key === "Tab") {
      closeMenu(false);
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (!menu.hidden && !switcher.contains(event.target)) closeMenu(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) closeMenu(true);
  });
}

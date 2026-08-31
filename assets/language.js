(() => {
  "use strict";

  const STORAGE_KEY = "meows-site-language";
  const LANGUAGE_INFO = Object.freeze({
    en: Object.freeze({ html: "en", label: "English", code: "EN" }),
    zhCN: Object.freeze({ html: "zh-Hans", label: "简体中文", code: "简" }),
    zhTW: Object.freeze({ html: "zh-Hant", label: "繁體中文", code: "繁" }),
    ja: Object.freeze({ html: "ja", label: "日本語", code: "日" }),
    ko: Object.freeze({ html: "ko", label: "한국어", code: "한" })
  });

  function languageKeyFromTag(value) {
    if (typeof value !== "string") return null;
    const tag = value.trim().toLowerCase();
    if (!/^[a-z]{2,3}(?:-[a-z0-9]{1,8})*$/.test(tag)) return null;

    const parts = tag.split("-");
    if (parts[0] === "en") return "en";
    if (parts[0] === "ja") return "ja";
    if (parts[0] === "ko") return "ko";
    if (parts[0] !== "zh") return null;

    if (parts.includes("hant") || parts.includes("tw") || parts.includes("hk") || parts.includes("mo")) {
      return "zhTW";
    }
    return "zhCN";
  }

  function browserLanguage(available) {
    const candidates = Array.isArray(navigator.languages) && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language || "en"];

    for (const candidate of candidates) {
      const key = languageKeyFromTag(candidate);
      if (key && available.has(key)) return key;
    }
    return available.has("en") ? "en" : available.values().next().value;
  }

  function readStoredChoice(validChoices) {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) || "auto";
      return validChoices.has(saved) ? saved : "auto";
    } catch (_) {
      return "auto";
    }
  }

  function storeChoice(choice) {
    try { localStorage.setItem(STORAGE_KEY, choice); } catch (_) {}
  }

  function readUrlChoice(available) {
    let url;
    try { url = new URL(window.location.href); } catch (_) { return null; }
    if (!url.searchParams.has("lang")) return null;

    const choice = languageKeyFromTag(url.searchParams.get("lang"));
    if (!choice || !available.has(choice)) return null;

    storeChoice(choice);
    url.searchParams.delete("lang");
    try { history.replaceState(history.state, "", url.href); } catch (_) {}
    return choice;
  }

  function initialize({ languages, apply, labels }) {
    const available = new Set((languages || []).filter((key) => LANGUAGE_INFO[key]));
    if (available.size === 0 || typeof apply !== "function") {
      throw new TypeError("MeowsLanguage requires supported languages and an apply function");
    }

    const validChoices = new Set(["auto", ...available]);
    let selectedChoice = readUrlChoice(available) || readStoredChoice(validChoices);
    let activeLanguage = available.has("en") ? "en" : available.values().next().value;

    const switcher = document.querySelector("[data-language-switcher]");
    const trigger = switcher?.querySelector("[data-language-trigger]");
    const menu = switcher?.querySelector("[data-language-menu]");
    const currentLabel = switcher?.querySelector("[data-language-current-label]");
    const currentCode = switcher?.querySelector("[data-language-current-code]");
    const options = menu ? [...menu.querySelectorAll("[data-language-choice]")] : [];
    const hasCompleteSwitcher = Boolean(switcher && trigger && menu && currentLabel && currentCode && options.length > 0);

    function updateSwitcher() {
      if (!hasCompleteSwitcher) return;

      const info = LANGUAGE_INFO[activeLanguage] || LANGUAGE_INFO.en;
      const translated = typeof labels === "function" ? (labels(activeLanguage) || {}) : {};
      const languageLabel = translated.languageLabel || "Language";
      const automaticLabel = translated.automaticLabel || "Browser language";

      currentLabel.textContent = info.label;
      currentCode.textContent = info.code;
      trigger.setAttribute(
        "aria-label",
        `${languageLabel}: ${info.label}${selectedChoice === "auto" ? ` · ${automaticLabel}` : ""}`
      );
      options.forEach((option) => {
        option.setAttribute("aria-selected", String(option.dataset.languageChoice === selectedChoice));
      });
    }

    function render() {
      activeLanguage = selectedChoice === "auto"
        ? browserLanguage(available)
        : (available.has(selectedChoice) ? selectedChoice : browserLanguage(available));

      const info = LANGUAGE_INFO[activeLanguage] || LANGUAGE_INFO.en;
      document.documentElement.lang = info.html;
      document.documentElement.dataset.language = activeLanguage;
      apply(activeLanguage);
      updateSwitcher();
    }

    function closeMenu(returnFocus = false) {
      if (!hasCompleteSwitcher) return;
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      if (returnFocus) trigger.focus();
    }

    function openMenu(focusSelected = false) {
      if (!hasCompleteSwitcher) return;
      menu.hidden = false;
      trigger.setAttribute("aria-expanded", "true");
      if (focusSelected) {
        const selected = options.find((option) => option.dataset.languageChoice === selectedChoice) || options[0];
        selected.focus();
      }
    }

    function choose(choice) {
      selectedChoice = validChoices.has(choice) ? choice : "auto";
      storeChoice(selectedChoice);
      render();
      closeMenu(true);
    }

    render();

    if (hasCompleteSwitcher) {
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
        option.addEventListener("click", () => choose(option.dataset.languageChoice));
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

    window.addEventListener("languagechange", () => {
      if (selectedChoice === "auto") render();
    });

    return Object.freeze({
      get selectedChoice() { return selectedChoice; },
      get activeLanguage() { return activeLanguage; },
      choose
    });
  }

  window.MeowsLanguage = Object.freeze({ initialize });
})();

/* Meows 站点共享 i18n：按 navigator.language 自动选语言（无按钮），填充 [data-i18n] 文本
   各页自带 I18N 字典，调用 applyI18n(I18N) 即可 */
function pickLang() {
  const l = (navigator.language || "en").toLowerCase();
  if (l.startsWith("zh")) {
    return (l.includes("tw") || l.includes("hk") || l.includes("mo") || l.includes("hant")) ? "zhTW" : "zhCN";
  }
  if (l.startsWith("ja")) return "ja";
  if (l.startsWith("ko")) return "ko";
  return "en";
}

function applyI18n(dict) {
  const key = pickLang();
  const d = dict[key] || dict.en;
  document.documentElement.lang = { zhCN: "zh-Hans", zhTW: "zh-Hant", ja: "ja", ko: "ko", en: "en" }[key];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = d[el.dataset.i18n];
    if (v != null) el.textContent = v;
  });
}

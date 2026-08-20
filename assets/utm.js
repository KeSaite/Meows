(() => {
  "use strict";

  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.meows.android";
  const SESSION_KEY = "meows-site-campaign";
  const MAX_VALUE_LENGTH = 96;
  const DEFAULT_CAMPAIGN = Object.freeze({
    source: "official_website",
    medium: "website",
    campaign: "meows_1_0_154",
    incomingContent: ""
  });

  function cleanValue(value, fallback = "") {
    const cleaned = String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9._~-]+/g, "_")
      .replace(/^_+|_+$/g, "")
      .slice(0, MAX_VALUE_LENGTH);
    return cleaned || fallback;
  }

  function normalizeCampaign(candidate) {
    return {
      source: cleanValue(candidate && candidate.source, DEFAULT_CAMPAIGN.source),
      medium: cleanValue(candidate && candidate.medium, DEFAULT_CAMPAIGN.medium),
      campaign: cleanValue(candidate && candidate.campaign, DEFAULT_CAMPAIGN.campaign),
      incomingContent: cleanValue(candidate && candidate.incomingContent)
    };
  }

  function campaignFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const source = cleanValue(params.get("utm_source"));
    if (!source) return null;

    return normalizeCampaign({
      source,
      medium: params.get("utm_medium"),
      campaign: params.get("utm_campaign"),
      incomingContent: params.get("utm_content")
    });
  }

  function campaignFromSession() {
    try {
      const raw = sessionStorage.getItem(SESSION_KEY);
      return raw ? normalizeCampaign(JSON.parse(raw)) : null;
    } catch (_) {
      return null;
    }
  }

  function saveCampaign(campaign) {
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(campaign));
    } catch (_) {}
  }

  function resolveCampaign() {
    const incoming = campaignFromUrl();
    if (incoming) {
      saveCampaign(incoming);
      return incoming;
    }

    return campaignFromSession() || { ...DEFAULT_CAMPAIGN };
  }

  function contentForPlacement(incomingContent, placement) {
    const clickPlacement = cleanValue(placement, "unknown");
    if (!incomingContent) return clickPlacement;

    // Keep the click location intact even when an incoming value is unusually long.
    const prefixLimit = Math.max(0, MAX_VALUE_LENGTH - clickPlacement.length - 2);
    const prefix = cleanValue(incomingContent).slice(0, prefixLimit);
    return prefix ? `${prefix}__${clickPlacement}` : clickPlacement;
  }

  function buildPlayStoreUrl(placement, campaign) {
    const referrer = new URLSearchParams({
      utm_source: campaign.source,
      utm_medium: campaign.medium,
      utm_campaign: campaign.campaign,
      utm_content: contentForPlacement(campaign.incomingContent, placement)
    }).toString();

    const url = new URL(PLAY_STORE_URL);
    url.searchParams.set("referrer", referrer);
    return url.toString();
  }

  function updatePlayStoreLinks() {
    const campaign = resolveCampaign();
    document.querySelectorAll("[data-play-link]").forEach((link) => {
      link.href = buildPlayStoreUrl(link.dataset.playContent, campaign);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updatePlayStoreLinks, { once: true });
  } else {
    updatePlayStoreLinks();
  }
})();

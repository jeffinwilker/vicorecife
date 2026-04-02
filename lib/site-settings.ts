import { promises as fs } from "node:fs";
import path from "node:path";

export type SiteSettings = {
  ctaLabel: string;
  ctaHref: string;
  metaPixelId: string;
  googleAdsId: string;
  googleTagManagerId: string;
  copyrightYear: number;
};

const settingsPath = path.join(process.cwd(), "data", "site-settings.json");

const defaultSettings: SiteSettings = {
  ctaLabel: "Falar agora",
  ctaHref: "#contato",
  metaPixelId: "",
  googleAdsId: "",
  googleTagManagerId: "",
  copyrightYear: new Date().getFullYear(),
};

function normalizeText(value: unknown, fallback: string) {
  if (typeof value !== "string") {
    return fallback;
  }

  const trimmed = value.trim();
  return trimmed || fallback;
}

function normalizeOptionalText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeYear(value: unknown) {
  const year = Number(value);
  if (!Number.isInteger(year) || year < 2020 || year > 2100) {
    return defaultSettings.copyrightYear;
  }

  return year;
}

function normalizeSettings(value: unknown): SiteSettings {
  const raw = value as Partial<SiteSettings> | null;

  return {
    ctaLabel: normalizeText(raw?.ctaLabel, defaultSettings.ctaLabel),
    ctaHref: normalizeText(raw?.ctaHref, defaultSettings.ctaHref),
    metaPixelId: normalizeOptionalText(raw?.metaPixelId),
    googleAdsId: normalizeOptionalText(raw?.googleAdsId),
    googleTagManagerId: normalizeOptionalText(raw?.googleTagManagerId),
    copyrightYear: normalizeYear(raw?.copyrightYear),
  };
}

export async function getSiteSettings() {
  try {
    const file = await fs.readFile(settingsPath, "utf8");
    return normalizeSettings(JSON.parse(file.replace(/^\uFEFF/, "")));
  } catch {
    return defaultSettings;
  }
}

export async function saveSiteSettings(input: SiteSettings) {
  const nextSettings = normalizeSettings(input);
  await fs.mkdir(path.dirname(settingsPath), { recursive: true });
  await fs.writeFile(
    settingsPath,
    `${JSON.stringify(nextSettings, null, 2)}\n`,
    "utf8",
  );

  return nextSettings;
}

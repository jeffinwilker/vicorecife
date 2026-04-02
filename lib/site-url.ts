const FALLBACK_SITE_URL = "http://localhost:3000";

export function getSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    FALLBACK_SITE_URL;

  const normalized = raw.startsWith("http") ? raw : `https://${raw}`;

  try {
    const url = new URL(normalized);
    url.pathname = "/";
    url.search = "";
    url.hash = "";
    return url.toString().replace(/\/$/, "");
  } catch {
    return FALLBACK_SITE_URL;
  }
}

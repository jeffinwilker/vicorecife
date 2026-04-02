import { cookies } from "next/headers";

const ADMIN_COOKIE = "vicorecife_admin_session";

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD?.trim() || "admin123";
}

function isProduction() {
  return process.env.NODE_ENV === "production";
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE)?.value;
  return session === getAdminPassword();
}

export async function requireAdminSession() {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    throw new Error("Unauthorized");
  }
}

export async function createAdminSession(password: string) {
  const expectedPassword = getAdminPassword();

  if (password !== expectedPassword) {
    return false;
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, expectedPassword, {
    httpOnly: true,
    sameSite: "lax",
    secure: isProduction(),
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return true;
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE);
}

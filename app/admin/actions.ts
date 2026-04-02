"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  clearAdminSession,
  createAdminSession,
  requireAdminSession,
} from "@/lib/admin-auth";
import { saveSiteSettings } from "@/lib/site-settings";

type ActionState = {
  error?: string;
};

export async function loginAction(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const password = String(formData.get("password") ?? "");
  const success = await createAdminSession(password);

  if (!success) {
    return { error: "Senha invalida." };
  }

  redirect("/admin");
}

export async function logoutAction() {
  await clearAdminSession();
  redirect("/admin");
}

export async function updateSiteSettingsAction(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdminSession();

  await saveSiteSettings({
    ctaLabel: String(formData.get("ctaLabel") ?? ""),
    ctaHref: String(formData.get("ctaHref") ?? ""),
    metaPixelId: String(formData.get("metaPixelId") ?? ""),
    googleAdsId: String(formData.get("googleAdsId") ?? ""),
    googleTagManagerId: String(formData.get("googleTagManagerId") ?? ""),
    copyrightYear: Number(formData.get("copyrightYear") ?? ""),
  });

  revalidatePath("/");
  revalidatePath("/admin");

  return {};
}

import type { Metadata } from "next";
import { AdminLoginForm, AdminSettingsForm } from "./admin-forms";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getSiteSettings } from "@/lib/site-settings";

export const metadata: Metadata = {
  title: "Painal Administrativo",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default async function AdminPage() {
  const [authenticated, settings] = await Promise.all([
    isAdminAuthenticated(),
    getSiteSettings(),
  ]);

  return (
    <main className="min-h-screen px-6 py-10 sm:px-10">
      <div className="mx-auto grid w-full max-w-4xl gap-8">
        <section className="rounded-[2rem] border border-white/60 bg-white/78 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-accent)]">
            Admin
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
            Painal Administrativo
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            Edite o CTA principal, os IDs de Meta Pixel, Google Ads e GTM, além
            do ano exibido no rodapé do site.
          </p>
        </section>

        <section className="rounded-[2rem] border border-white/60 bg-[var(--color-panel)] p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
          {authenticated ? (
            <AdminSettingsForm settings={settings} />
          ) : (
            <AdminLoginForm />
          )}
        </section>
      </div>
    </main>
  );
}

"use client";

import { useActionState } from "react";
import {
  loginAction,
  logoutAction,
  updateSiteSettingsAction,
} from "./actions";
import type { SiteSettings } from "@/lib/site-settings";

type ActionState = {
  error?: string;
};

const initialState: ActionState = {};

export function AdminLoginForm() {
  const [state, action, pending] = useActionState(loginAction, initialState);

  return (
    <form action={action} className="grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="password" className="text-sm font-medium text-[var(--color-ink)]">
          Senha do admin
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 outline-none transition focus:border-[var(--color-accent)]"
          placeholder="Digite a senha"
          required
        />
      </div>

      {state.error ? (
        <p className="text-sm text-[var(--color-accent)]">{state.error}</p>
      ) : null}

      <button
        type="submit"
        className="rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)] disabled:opacity-70"
        disabled={pending}
      >
        {pending ? "Entrando..." : "Entrar no painel"}
      </button>
    </form>
  );
}

export function AdminSettingsForm({ settings }: { settings: SiteSettings }) {
  const [state, action, pending] = useActionState(
    updateSiteSettingsAction,
    initialState,
  );

  return (
    <form action={action} className="grid gap-6">
      <div className="grid gap-5 lg:grid-cols-2">
        <Field
          id="ctaLabel"
          label="Texto do botão CTA"
          defaultValue={settings.ctaLabel}
          placeholder="Ex.: Agendar visita"
        />
        <Field
          id="ctaHref"
          label="Link do CTA"
          defaultValue={settings.ctaHref}
          placeholder="Ex.: #contato ou https://wa.me/..."
        />
        <Field
          id="metaPixelId"
          label="Meta Pixel ID"
          defaultValue={settings.metaPixelId}
          placeholder="Ex.: 123456789012345"
        />
        <Field
          id="googleAdsId"
          label="Google Ads ID"
          defaultValue={settings.googleAdsId}
          placeholder="Ex.: AW-123456789"
        />
        <Field
          id="googleTagManagerId"
          label="Google Tag Manager ID"
          defaultValue={settings.googleTagManagerId}
          placeholder="Ex.: GTM-ABC1234"
        />
        <Field
          id="copyrightYear"
          label="Ano do copyright"
          defaultValue={String(settings.copyrightYear)}
          placeholder="Ex.: 2026"
          inputMode="numeric"
        />
      </div>

      {state.error ? (
        <p className="text-sm text-[var(--color-accent)]">{state.error}</p>
      ) : (
        <p className="text-sm text-[var(--color-muted)]">
          IDs vazios deixam o script correspondente desativado no site.
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-92 disabled:opacity-70"
          disabled={pending}
        >
          {pending ? "Salvando..." : "Salvar alterações"}
        </button>

        <button
          type="submit"
          formAction={logoutAction}
          className="rounded-full border border-[var(--color-line)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)]"
        >
          Sair
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  defaultValue: string;
  placeholder: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
};

function Field({
  id,
  label,
  defaultValue,
  placeholder,
  inputMode,
}: FieldProps) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium text-[var(--color-ink)]">
        {label}
      </label>
      <input
        id={id}
        name={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        inputMode={inputMode}
        className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 outline-none transition focus:border-[var(--color-accent)]"
      />
    </div>
  );
}

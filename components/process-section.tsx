"use client";

import { useEffect, useRef, useState } from "react";

type ProcessStep = {
  number: string;
  title: string;
  icon: "chat" | "headset" | "check" | "package";
  active: boolean;
};

type ProcessSectionProps = {
  ctaHref: string;
  steps: ProcessStep[];
};

function StepIcon({ type, active }: { type: ProcessStep["icon"]; active: boolean }) {
  const toneClass = active ? "text-[var(--color-brand)]" : "text-[#b8bec5]";

  if (type === "chat") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={`h-5 w-5 ${toneClass}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 7.5h11a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-6l-3.5 2v-2h-1.5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Z" />
        <path d="M9 11h.01" />
        <path d="M12 11h.01" />
        <path d="M15 11h.01" />
      </svg>
    );
  }

  if (type === "headset") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={`h-5 w-5 ${toneClass}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.5 12a6.5 6.5 0 1 1 13 0" />
        <path d="M6.5 12.5h2v4h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z" />
        <path d="M15.5 12.5h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2z" />
      </svg>
    );
  }

  if (type === "check") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={`h-5 w-5 ${toneClass}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6.5" y="6.5" width="11" height="11" rx="2.2" />
        <path d="m9.8 12.2 1.7 1.7 3.1-3.4" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`h-5 w-5 ${toneClass}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 7.5h8l2 3v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-6z" />
      <path d="M6 10.5h12" />
      <path d="M10 13.5h4" />
    </svg>
  );
}

export function ProcessSection({ ctaHref, steps }: ProcessSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = viewport * 0.88;
      const end = rect.height + viewport * 0.18;
      const raw = (start - rect.top) / end;
      const next = Math.max(0, Math.min(1, raw));
      setProgress(next);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={sectionRef} id="como-funciona" className="mx-auto grid w-full max-w-[1120px] gap-16 py-10 lg:grid-cols-[0.82fr_0.95fr] lg:items-center lg:gap-24">
      <div className="max-w-[26rem] space-y-6">
        <h2 className="font-brand text-[2.2rem] font-bold uppercase leading-[0.93] tracking-[-0.045em] text-[var(--color-ink)] sm:text-[2.95rem]">
          Comece a melhorar sua qualidade de vida ainda hoje:
        </h2>
        <a href={ctaHref} className="cta-button font-brand inline-flex px-6 py-3 text-sm font-semibold tracking-[-0.01em]">
          <span className="text-white">Quero entrar em contato</span>
        </a>
      </div>

      <div className="mx-auto flex w-full max-w-[500px] justify-center lg:justify-end">
        <div className="relative pl-16">
          <div className="absolute left-[19px] top-5 bottom-5 w-px bg-[rgba(24,35,45,0.12)]" />
          <div className="absolute left-[19px] top-5 w-px bg-[var(--color-brand)] transition-[height] duration-150 ease-out" style={{ height: `calc((100% - 2.5rem) * ${progress})` }} />

          <div className="space-y-24">
            {steps.map((step, stepIndex) => {
              const isActive = progress >= stepIndex / Math.max(steps.length - 1, 1);

              return (
                <div key={step.number} className="relative flex items-start gap-6">
                  <div className={`relative z-[1] inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] border bg-white shadow-[0_10px_22px_rgba(18,39,27,0.05)] ${isActive ? "border-[rgba(24,118,69,0.55)]" : "border-[rgba(24,35,45,0.16)]"}`}>
                    <StepIcon type={step.icon} active={isActive} />
                  </div>

                  <div className="min-w-0 pt-0.5">
                    <div className="flex items-baseline gap-4">
                      <span className={`font-brand text-[2.35rem] font-bold leading-none tracking-[-0.05em] ${isActive ? "text-[var(--color-brand)]" : "text-[#b8bec5]"}`}>
                        {step.number}
                      </span>
                      <p className="max-w-[15rem] text-[1.05rem] leading-7 text-[var(--color-ink)]">
                        {step.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

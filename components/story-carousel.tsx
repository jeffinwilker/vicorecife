"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type StoryItem = {
  image: string;
  alt: string;
};

type StoryCarouselProps = {
  items: StoryItem[];
};

export function StoryCarousel({ items }: StoryCarouselProps) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const orderedItems = useMemo(() => {
    return items.map((_, offset) => items[(index + offset) % items.length]);
  }, [index, items]);

  const prev = () => setIndex((current) => (current - 1 + items.length) % items.length);
  const next = () => setIndex((current) => (current + 1) % items.length);

  useEffect(() => {
    setProgress(0);

    const total = 4800;
    const startedAt = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = now - startedAt;
      const nextProgress = Math.min(elapsed / total, 1);
      setProgress(nextProgress);

      if (nextProgress < 1) {
        frame = window.requestAnimationFrame(tick);
        return;
      }

      setIndex((current) => (current + 1) % items.length);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [index, items.length]);

  return (
    <div className="relative mx-auto max-w-[1120px]">
      <div className="relative overflow-hidden rounded-[2.35rem] border border-[rgba(24,35,45,0.06)] bg-[linear-gradient(180deg,rgba(252,251,248,0.98),rgba(255,255,255,0.92))] px-5 py-7 shadow-[0_24px_52px_rgba(18,39,27,0.05)] sm:px-8 sm:py-8">
        <div className="pointer-events-none absolute inset-x-[10%] top-0 h-24 rounded-full bg-[rgba(24,118,69,0.05)] blur-3xl" />

        <div className="relative mb-7 flex justify-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(24,35,45,0.07)] bg-white/78 px-3 py-2 shadow-[0_10px_22px_rgba(18,39,27,0.04)] backdrop-blur">
            {items.map((item, barIndex) => (
              <div
                key={item.image}
                className="relative h-[4px] w-10 overflow-hidden rounded-full bg-[rgba(24,35,45,0.12)] sm:w-14"
              >
                <div
                  className={`absolute inset-y-0 left-0 rounded-full bg-[var(--color-brand)] transition-[width] duration-150 ${
                    barIndex < index ? "w-full" : barIndex > index ? "w-0" : ""
                  }`}
                  style={barIndex === index ? { width: `${progress * 100}%` } : undefined}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Story anterior"
          className="absolute left-3 top-1/2 z-[2] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[1.2rem] border border-[rgba(24,35,45,0.08)] bg-white/82 text-[var(--color-ink)] shadow-[0_14px_32px_rgba(18,39,27,0.07)] backdrop-blur transition hover:border-[rgba(24,118,69,0.22)] hover:text-[var(--color-brand)] sm:left-4"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path
              d="M14.5 6.5 9 12l5.5 5.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="grid gap-5 px-12 md:grid-cols-2 xl:grid-cols-4 xl:px-14">
          {orderedItems.map((item, itemIndex) => {
            const isLead = itemIndex === 0;

            return (
              <article
                key={item.image}
                className={`mx-auto w-full max-w-[232px] ${itemIndex === 0 ? "" : "hidden md:block"}`}
              >
                <div
                  className={`relative overflow-hidden rounded-[2.2rem] border border-[rgba(24,35,45,0.08)] bg-[linear-gradient(180deg,rgba(253,253,251,0.98)_0%,rgba(245,245,241,0.96)_100%)] p-[0.42rem] shadow-[0_22px_48px_rgba(24,35,45,0.09)] transition duration-300 ${
                    isLead ? "-translate-y-1" : "opacity-[0.98]"
                  }`}
                >
                  <div className="pointer-events-none absolute inset-[1px] rounded-[calc(2.2rem-1px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.75),inset_0_-1px_0_rgba(24,35,45,0.04)]" />
                  <div className="pointer-events-none absolute left-1/2 top-2.5 z-[2] h-[0.34rem] w-14 -translate-x-1/2 rounded-full bg-[rgba(24,35,45,0.16)]" />
                  <div className="relative aspect-[0.62/1] overflow-hidden rounded-[1.8rem] bg-[#f3f0ea]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Próximo story"
          className="absolute right-3 top-1/2 z-[2] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[1.2rem] border border-[rgba(24,35,45,0.08)] bg-white/82 text-[var(--color-ink)] shadow-[0_14px_32px_rgba(18,39,27,0.07)] backdrop-blur transition hover:border-[rgba(24,118,69,0.22)] hover:text-[var(--color-brand)] sm:right-4"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path
              d="M9.5 6.5 15 12l-5.5 5.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        {items.map((item, dotIndex) => (
          <button
            key={item.image}
            type="button"
            aria-label={`Ir para story ${dotIndex + 1}`}
            onClick={() => setIndex(dotIndex)}
            className={`h-2.5 w-2.5 rounded-full transition ${dotIndex === index ? "bg-[var(--color-ink)]" : "bg-[rgba(24,35,45,0.18)]"}`}
          />
        ))}
      </div>
    </div>
  );
}





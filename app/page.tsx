import Image from "next/image";
import { Clock3, MapPin, Phone } from "lucide-react";
import { ProcessSection } from "@/components/process-section";
import { Reveal } from "@/components/reveal";
import { StoryCarousel } from "@/components/story-carousel";
import { getSiteSettings } from "@/lib/site-settings";
import { getSiteUrl } from "@/lib/site-url";

const services = [
  {
    title: "Entrega rápida",
    description:
      "Fórmulas personalizadas entregues rapidamente para atender sua rotina.",
    icon: "delivery",
  },
  {
    title: "Atendimento 5 estrelas",
    description:
      "Valorizamos a escuta, o cuidado com o paciente e uma orientação clara.",
    icon: "care",
  },
  {
    title: "Qualidade em primeiro lugar",
    description:
      "Equipe técnica qualificada e processos pensados para segurança e eficiência.",
    icon: "shield",
  },
];

const qualityAreas = [
  {
    title: "Vitalidade",
    description: "Mais equilíbrio para a rotina.",
    tone: "solid" as const,
    color: "green" as const,
  },
  {
    title: "Imunidade",
    description: "Cuidado diário para o corpo responder melhor.",
    image: "/vicofarma/images/area-imunidade-hq.webp",
  },
  {
    title: "Hipertrofia",
    description: "Performance e recuperação alinhadas ao seu objetivo.",
    image: "/vicofarma/images/area-hipertrofia-hq.webp",
  },
  {
    title: "Sono & descanso",
    description: "Mais qualidade para desacelerar e recuperar energia.",
    image: "/vicofarma/images/area-sono-hq.webp",
  },
  {
    title: "Descanso",
    description: "Mais consistência para dormir e recuperar.",
    image: "/vicofarma/images/area-descanso-hq.webp",
  },
  {
    title: "Bem-estar",
    description: "Apoio diário para uma rotina mais leve.",
    image: "/vicofarma/images/area-equilibrio-hq.webp",
  },
  {
    title: "Pele & beleza",
    description: "Fórmulas pensadas para autocuidado e confiança.",
    image: "/vicofarma/images/area-beleza-hq.webp",
  },
  {
    title: "Equilíbrio",
    description: "Cuidado integrado em diferentes fases.",
    tone: "solid" as const,
    color: "earth" as const,
  },
];

const bestSellerStories = [
  {
    image: "/vicofarma/images/story-01.webp",
    alt: "Story de cliente falando sobre produto da Vicofarma",
  },
  {
    image: "/vicofarma/images/story-02.webp",
    alt: "Story de cliente mostrando embalagem da Vicofarma",
  },
  {
    image: "/vicofarma/images/story-03.webp",
    alt: "Story com sugestão de rotina e suplementação",
  },
  {
    image: "/vicofarma/images/story-04.webp",
    alt: "Story com clientes e embalagem da Vicofarma",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Entre em contato",
    icon: "chat" as const,
    active: true,
  },
  {
    number: "2",
    title: "Entendemos suas necessidades",
    icon: "headset" as const,
    active: true,
  },
  {
    number: "3",
    title: "Você aprova a fórmula",
    icon: "check" as const,
    active: true,
  },
  {
    number: "4",
    title: "Receba sua fórmula",
    icon: "package" as const,
    active: false,
  },
];

function ServiceIcon({ type }: { type: string }) {
  if (type === "delivery") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 8h8v6.5h-8z" className="text-[var(--color-ink)]" />
        <path d="M12.5 10.2h2.6l1.8 2.2v2.1h-4.4z" className="text-[var(--color-ink)]" />
        <circle cx="7.2" cy="16.6" r="1.35" className="text-[var(--color-ink)]" />
        <circle cx="15.9" cy="16.6" r="1.35" className="text-[var(--color-brand)]" />
      </svg>
    );
  }

  if (type === "care") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 17.9s-5.2-3.3-5.2-7.3A3.1 3.1 0 0 1 12 8.6a3.1 3.1 0 0 1 5.2 2c0 4-5.2 7.3-5.2 7.3Z" className="text-[var(--color-ink)]" />
        <path d="M12 10.1v3.2" className="text-[var(--color-brand)]" />
        <path d="M10.4 11.7h3.2" className="text-[var(--color-brand)]" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4.8 6.8 6.9v4.7c0 3.3 2.1 6.2 5.2 7.3 3.1-1.1 5.2-4 5.2-7.3V6.9z" className="text-[var(--color-ink)]" />
      <path d="m9.7 11.9 1.5 1.5 3.1-3.4" className="text-[var(--color-brand)]" />
    </svg>
  );
}

export default async function Home() {
  const settings = await getSiteSettings();
  const siteUrl = getSiteUrl();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Vicofarma Recife",
        url: siteUrl,
      },
      {
        "@type": "Pharmacy",
        name: "Vicofarma Recife",
        image: `${siteUrl}/vicofarma/images/logovicofarma.png`,
        telephone: "+55-81-7333-3800",
        url: siteUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Conselheiro Aguiar, 1472 - Loja 17",
          addressLocality: "Recife",
          addressRegion: "PE",
          postalCode: "51020-020",
          addressCountry: "BR",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="mx-auto flex w-full max-w-[1320px] flex-col gap-12 px-4 pb-5 pt-28 sm:px-6 sm:pt-30 lg:px-8 xl:px-10">
        <Reveal
          className="fixed left-1/2 top-3 z-50 flex w-[calc(100%-1.25rem)] max-w-[1240px] -translate-x-1/2 items-center justify-between rounded-[1.4rem] border border-white/80 bg-white/92 px-4 py-3 shadow-[0_18px_36px_rgba(18,39,27,0.08)] backdrop-blur sm:top-5 sm:w-[calc(100%-2rem)] sm:rounded-[1.7rem] sm:px-7 sm:py-4"
          distance={18}
          duration={760}
          scale={0.992}
        >
          <Image
            src="/vicofarma/images/logovicofarma.png"
            alt="Logo da Vicofarma"
            width={108}
            height={64}
            priority
            className="h-auto w-[72px] sm:w-[92px]"
          />

          <a
            href={settings.ctaHref}
            className="cta-button font-brand px-4 py-2.5 text-[0.78rem] font-semibold tracking-[-0.01em] sm:px-6 sm:py-3 sm:text-sm"
          >
            <span className="text-white">{settings.ctaLabel}</span>
          </a>
        </Reveal>

        <section className="relative rounded-[2rem]">
          <div className="pointer-events-none absolute left-[-8%] top-[6%] h-56 w-56 rounded-full bg-[rgba(24,118,69,0.07)] blur-3xl" />
          <div className="pointer-events-none absolute right-[-6%] top-[14%] h-64 w-64 rounded-full bg-[rgba(138,91,66,0.08)] blur-3xl" />
          <div className="pointer-events-none absolute bottom-[2%] left-[40%] h-40 w-40 rounded-full bg-[rgba(24,118,69,0.05)] blur-3xl" />

          <div className="space-y-8 md:hidden">
            <div className="absolute inset-x-0 top-[20.5rem] bottom-[13rem] rounded-[2rem] bg-[linear-gradient(180deg,rgba(249,248,244,0.98),rgba(243,242,237,0.96))]" />
            <div className="space-y-4 pt-2">
              <Reveal delay={90} distance={16}>
                <p className="font-brand block pl-1 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-brand)]">
                  VICOFARMA
                </p>
              </Reveal>

              <Reveal delay={170} distance={20}>
                <h1 className="font-brand text-[2.72rem] font-extrabold uppercase leading-[0.92] tracking-[-0.055em] text-[var(--color-ink)]">
                  Cuidados
                  <br />
                  Que Combinam
                  <br />
                  Com Você
                </h1>
              </Reveal>

              <Reveal delay={260} distance={22}>
                <p className="max-w-[32rem] text-[0.98rem] leading-[1.72] text-[color:rgba(61,81,97,0.92)]">
                  Na Vicofarma, cada fórmula é criada sob medida para suas
                  necessidades. Combinamos décadas de experiência com atendimento
                  humanizado e qualidade garantida para entregar soluções naturais
                  que acompanham seu dia a dia.
                </p>
              </Reveal>
            </div>

            <Reveal className="flex" delay={340} distance={18}>
              <a
                href={settings.ctaHref}
                className="cta-button font-brand px-6 py-3 text-center text-sm font-semibold tracking-[-0.01em]"
              >
                <span className="text-white">{settings.ctaLabel}</span>
              </a>
            </Reveal>

            <div className="relative grid grid-cols-2 gap-4">
              <div className="grid gap-4">
                <Reveal delay={220} distance={24} scale={0.986}>
                  <div className="hero-tile hero-tile-hover relative h-[236px] overflow-hidden rounded-[1.35rem]">
                    <Image
                      src="/vicofarma/images/hero-pessoa-03-hq.webp"
                      alt="Mulher em momento de autocuidado"
                      fill
                      sizes="50vw"
                      className="object-cover contrast-[1.03] saturate-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(17,28,36,0.12))]" />
                  </div>
                </Reveal>

                <Reveal delay={470} distance={22} scale={0.988}>
                  <div className="hero-tile hero-tile-hover relative h-[104px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(145deg,#1d874f,#177343)]" />
                </Reveal>
              </div>

              <div className="grid gap-4">
                <Reveal delay={300} distance={22} scale={0.988}>
                  <div className="hero-tile hero-tile-hover relative h-[160px] overflow-hidden rounded-[1.35rem]">
                    <Image
                      src="/vicofarma/images/hero-pessoa-01-hq.webp"
                      alt="Pessoa correndo na praia"
                      fill
                      sizes="50vw"
                      className="object-cover contrast-[1.03] saturate-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(17,28,36,0.14))]" />
                  </div>
                </Reveal>

                <Reveal delay={540} distance={24} scale={0.986}>
                  <div className="hero-tile hero-tile-hover relative h-[180px] overflow-hidden rounded-[1.35rem]">
                    <Image
                      src="/vicofarma/images/hero-pessoa-02-hq.webp"
                      alt="Mulher em momento de bem-estar"
                      fill
                      sizes="50vw"
                      className="object-cover contrast-[1.03] saturate-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(17,28,36,0.22))]" />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          <div className="hidden gap-8 md:grid md:min-h-[62vh] lg:grid-cols-[minmax(0,1fr)_610px] lg:items-center lg:gap-10">
            <div className="space-y-8 pt-2">
              <div className="space-y-4">
                <Reveal delay={90} distance={16}>
                  <p className="font-brand block pl-1.5 text-xs font-semibold uppercase tracking-[0.36em] text-[var(--color-brand)] sm:pl-2">
                    VICOFARMA
                  </p>
                </Reveal>

                <Reveal delay={170} distance={20}>
                  <h1 className="font-brand text-[3rem] font-extrabold uppercase leading-[0.92] tracking-[-0.05em] text-[var(--color-ink)] lg:text-[3.45rem] xl:text-[3.45rem]">
                    Cuidados
                    <br />
                    Que Combinam
                    <br />
                  Com Você
                  </h1>
                </Reveal>

                <Reveal delay={260} distance={22}>
                  <p className="max-w-[34rem] text-[1rem] leading-[1.72] text-[color:rgba(61,81,97,0.92)] xl:text-[1.12rem]">
                    Na Vicofarma, cada fórmula é criada sob medida para suas
                    necessidades. Combinamos décadas de experiência com atendimento
                    humanizado e qualidade garantida para entregar soluções naturais
                    que acompanham seu dia a dia.
                  </p>
                </Reveal>
              </div>

              <Reveal className="flex" delay={340} distance={18}>
                <a
                  href={settings.ctaHref}
                  className="cta-button font-brand px-6 py-3 text-center text-sm font-semibold tracking-[-0.01em] sm:px-7 sm:py-3.5"
                >
                  <span className="text-white">{settings.ctaLabel}</span>
                </a>
              </Reveal>
            </div>

            <div className="grid h-[560px] w-[610px] shrink-0 grid-cols-3 gap-5">
              <div className="flex flex-col gap-5">
                <Reveal delay={220} distance={24} scale={0.986}>
                  <div className="hero-tile hero-tile-hover relative h-[340px] overflow-hidden rounded-[1.55rem]">
                    <Image
                      src="/vicofarma/images/hero-pessoa-03-hq.webp"
                      alt="Mulher em momento de autocuidado"
                      fill
                      sizes="190px"
                      className="object-cover contrast-[1.03] saturate-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(17,28,36,0.12))]" />
                  </div>
                </Reveal>

                <Reveal delay={470} distance={22} scale={0.988}>
                  <div className="hero-tile hero-tile-hover relative h-[200px] overflow-hidden rounded-[1.55rem] bg-[linear-gradient(145deg,#1d874f,#177343)]" />
                </Reveal>
              </div>

              <div className="flex flex-col gap-5">
                <Reveal delay={300} distance={22} scale={0.988}>
                  <div className="hero-tile hero-tile-hover relative h-[205px] overflow-hidden rounded-[1.55rem]">
                    <Image
                      src="/vicofarma/images/hero-pessoa-01-hq.webp"
                      alt="Pessoa correndo na praia"
                      fill
                      sizes="190px"
                      className="object-cover contrast-[1.03] saturate-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(17,28,36,0.14))]" />
                  </div>
                </Reveal>

                <Reveal delay={540} distance={24} scale={0.986}>
                  <div className="hero-tile hero-tile-hover relative h-[335px] overflow-hidden rounded-[1.55rem]">
                    <Image
                      src="/vicofarma/images/hero-pessoa-02-hq.webp"
                      alt="Mulher em momento de bem-estar"
                      fill
                      sizes="190px"
                      className="object-cover contrast-[1.03] saturate-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(17,28,36,0.22))]" />
                  </div>
                </Reveal>
              </div>

              <div className="hidden flex-col gap-5 lg:flex">
                <Reveal delay={380} distance={18} scale={0.99}>
                  <div className="hero-tile hero-tile-hover relative h-[105px] overflow-hidden rounded-[1.55rem] bg-[linear-gradient(145deg,#9e694d,#8a5b42)]" />
                </Reveal>

                <Reveal delay={610} distance={24} scale={0.985}>
                  <div className="hero-tile hero-tile-hover relative h-[435px] overflow-hidden rounded-[1.55rem] bg-[rgba(255,255,255,0.18)]">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                      aria-label="Video de pessoas correndo ao ar livre"
                    >
                      <source src="/vicofarma/videos/hero-run.mp4" type="video/mp4" />
                    </video>
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,14,18,0.18),rgba(8,14,18,0.34))]" />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <Reveal
          delay={700}
          distance={22}
          scale={0.992}
          className="relative z-[1] mx-auto mt-8 grid w-full max-w-[980px] gap-3 rounded-[2rem] border border-[rgba(24,35,45,0.09)] bg-[linear-gradient(180deg,rgba(244,243,239,0.98),rgba(238,237,232,0.98))] px-4 py-4 shadow-[0_16px_34px_rgba(18,39,27,0.08)] lg:grid-cols-3 sm:gap-0 sm:px-5"
        >
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[1.1rem] px-4 py-3 sm:px-5 lg:first:border-r lg:first:border-[var(--color-line)] lg:last:border-l lg:last:border-[var(--color-line)]"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-11 items-center justify-center rounded-[0.8rem] border border-[rgba(24,118,69,0.24)] bg-transparent">
                  <ServiceIcon type={service.icon} />
                </span>
              </div>
              <h2 className="font-brand mt-2.5 text-[1rem] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)] sm:text-[1.14rem]">
                {service.title}
              </h2>
              <p className="mt-2.5 max-w-[15rem] text-[0.86rem] leading-[1.58] text-[var(--color-muted)]">
                {service.description}
              </p>
            </article>
          ))}
        </Reveal>

        <section id="areas" className="pt-6 sm:pt-10">
          <Reveal delay={120} distance={18}>
            <div className="mx-auto max-w-[760px] text-center">
              <h2 className="font-brand text-[1.85rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--color-ink)] sm:text-[2.45rem]">
                <span className="block">Melhore a sua qualidade de vida</span>
                <span className="block">em diferentes áreas:</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4">
            {qualityAreas.map((area, index) => (
              <Reveal
                key={area.title}
                delay={220 + index * 90}
                distance={24}
                scale={0.988}
              >
                {area.tone === "solid" ? (
                  <article
                    className={`hero-tile hero-tile-hover flex h-[290px] flex-col justify-between rounded-[1.4rem] p-4 text-white sm:h-[420px] sm:rounded-[1.8rem] sm:p-6 ${
                      area.color === "earth"
                        ? "bg-[linear-gradient(160deg,#9d6a4e_0%,#885a43_100%)]"
                        : "bg-[linear-gradient(160deg,#1f874f_0%,#177343_100%)]"
                    }`}
                  >
                    <div className="flex items-center justify-end">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-[1rem] border border-white/18 bg-white/8">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 5v14" />
                          <path d="M5 12h14" className="text-white/70" />
                        </svg>
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-brand text-[1.2rem] font-extrabold leading-[0.94] tracking-[-0.03em] sm:text-[1.55rem] sm:tracking-[-0.04em]">
                        {area.title}
                      </h3>
                      <p className="max-w-[14rem] text-[0.86rem] leading-6 text-white/84 sm:text-[0.98rem] sm:leading-7">
                        {area.description}
                      </p>
                    </div>
                  </article>
                ) : (
                  <article className="hero-tile hero-tile-hover group relative h-[290px] overflow-hidden rounded-[1.4rem] sm:h-[420px] sm:rounded-[1.8rem]">
                    <Image
                      src={area.image!}
                      alt={area.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover contrast-[1.05] saturate-[1.04] brightness-[1.01] transition duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(12,18,22,0.08)_38%,rgba(12,18,22,0.5)_100%)]" />
                    <div className="pointer-events-none absolute inset-[1px] rounded-[calc(1.4rem-1px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-18px_30px_rgba(0,0,0,0.06)] sm:rounded-[calc(1.8rem-1px)]" />
                    <div className="absolute inset-x-0 bottom-0 space-y-2 p-4 text-white sm:p-5">
                      <h3 className="font-brand text-[1.2rem] font-extrabold leading-[0.94] tracking-[-0.03em] sm:text-[1.55rem] sm:tracking-[-0.04em]">
                        {area.title}
                      </h3>
                      <p className="max-w-[15rem] text-[0.8rem] leading-5 text-white/82 sm:text-[0.93rem] sm:leading-6">
                        {area.description}
                      </p>
                    </div>
                  </article>
                )}
              </Reveal>
            ))}
          </div>
        </section>

        <ProcessSection ctaHref={settings.ctaHref} steps={processSteps} />

        <section id="mais-vendidas" className="pt-8 sm:pt-12">
          <Reveal delay={120} distance={18}>
            <div className="mx-auto max-w-[760px] text-center">
              <h2 className="font-brand text-[2.2rem] font-bold leading-[1.04] tracking-[-0.04em] text-[var(--color-ink)] sm:text-[3.1rem]">
                As mais vendidas
              </h2>
            </div>
          </Reveal>

          <div className="mt-10">
            <Reveal delay={220} distance={20} scale={0.992}>
              <StoryCarousel items={bestSellerStories} />
            </Reveal>
          </div>
        </section>

        <section id="contato" className="pt-10 sm:pt-14">
          <div className="mx-auto max-w-[980px] space-y-6">
            <Reveal delay={120} distance={18}>
              <div className="grid gap-4 md:grid-cols-3">
                <article className="rounded-[1.75rem] bg-[rgba(236,236,242,0.88)] px-7 py-8 text-[var(--color-ink)] shadow-[0_10px_24px_rgba(18,39,27,0.04)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-[1rem] border border-[rgba(24,118,69,0.16)] bg-white/72 text-[var(--color-brand)] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                    <MapPin aria-hidden="true" strokeWidth={2} className="h-[1.35rem] w-[1.35rem]" />
                  </span>
                  <p className="mt-14 text-[1.02rem] leading-[1.35] text-[var(--color-muted)]">
                    Av. Conselheiro Aguiar,<br />
                    nº 1472 – Loja 17, Recife/PE
                  </p>
                </article>

                <article className="rounded-[1.75rem] bg-[rgba(236,236,242,0.88)] px-7 py-8 text-[var(--color-ink)] shadow-[0_10px_24px_rgba(18,39,27,0.04)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-[1rem] border border-[rgba(24,118,69,0.16)] bg-white/72 text-[var(--color-brand)] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                    <Phone aria-hidden="true" strokeWidth={2} className="h-[1.35rem] w-[1.35rem]" />
                  </span>
                  <p className="mt-14 text-[1.02rem] leading-[1.35] text-[var(--color-muted)]">
                    (81) 7333-3800<br />
                    (81) 3326-7988
                  </p>
                </article>

                <article className="rounded-[1.75rem] bg-[rgba(236,236,242,0.88)] px-7 py-8 text-[var(--color-ink)] shadow-[0_10px_24px_rgba(18,39,27,0.04)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-[1rem] border border-[rgba(24,118,69,0.16)] bg-white/72 text-[var(--color-brand)] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                    <Clock3 aria-hidden="true" strokeWidth={2} className="h-[1.35rem] w-[1.35rem]" />
                  </span>
                  <p className="mt-14 text-[1.02rem] leading-[1.35] text-[var(--color-muted)]">
                    Segunda a sexta,<br />
                    das 08h às 18h
                  </p>
                </article>
              </div>
            </Reveal>

            <Reveal delay={220} distance={18}>
              <div className="overflow-hidden rounded-[1.75rem] border border-[rgba(24,35,45,0.08)] bg-white shadow-[0_16px_38px_rgba(18,39,27,0.05)]">
                <div className="flex items-center justify-between border-b border-[rgba(24,35,45,0.06)] px-4 py-3">
                  <p className="text-sm font-medium text-[var(--color-muted)]">
                    Localização
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Av.+Conselheiro+Aguiar,+1472,+Recife+-+PE"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-[rgba(24,118,69,0.16)] px-3 py-1.5 text-xs font-semibold text-[var(--color-brand)] transition hover:border-[rgba(24,118,69,0.32)]"
                  >
                    Abra no Maps
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 5h5v5" />
                      <path d="M10 14 19 5" />
                      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
                    </svg>
                  </a>
                </div>
                <div className="h-[360px] w-full">
                  <iframe
                    title="Mapa da Vicofarma"
                    src="https://www.google.com/maps?q=Av.+Conselheiro+Aguiar,+1472,+Recife+-+PE&z=16&output=embed"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
        <footer className="pb-8 text-center text-sm text-[var(--color-muted)]">
          © {settings.copyrightYear} Vico Recife. Todos os direitos reservados.
        </footer>
      </section>
    </main>
  );
}
















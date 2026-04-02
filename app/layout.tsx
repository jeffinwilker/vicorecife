import type { Metadata } from "next";
import localFont from "next/font/local";
import { TrackingScripts } from "@/components/tracking-scripts";
import { getSiteSettings } from "@/lib/site-settings";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const nunito = localFont({
  src: [
    {
      path: "../public/vicofarma/fonts/Nunito-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/vicofarma/fonts/Nunito-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/vicofarma/fonts/Nunito-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-nunito",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vicofarma Recife | Fórmulas Personalizadas",
    template: "%s | Vicofarma Recife",
  },
  description:
    "Farmácia de manipulação no Recife com fórmulas personalizadas, atendimento especializado e entrega rápida.",
  applicationName: "Vicofarma Recife",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "farmácia de manipulação recife",
    "fórmulas personalizadas",
    "suplementação",
    "bem-estar",
    "vicofarma",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Vicofarma Recife",
    title: "Vicofarma Recife | Fórmulas Personalizadas",
    description:
      "Atendimento humanizado e fórmulas sob medida para saúde, desempenho e bem-estar.",
    images: [
      {
        url: "/vicofarma/images/hero-pessoa-03-hq.webp",
        alt: "Vicofarma Recife",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vicofarma Recife | Fórmulas Personalizadas",
    description:
      "Farmácia de manipulação com atendimento especializado e soluções naturais sob medida.",
    images: ["/vicofarma/images/hero-pessoa-03-hq.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html lang="pt-BR" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <TrackingScripts
          metaPixelId={settings.metaPixelId}
          googleAdsId={settings.googleAdsId}
          googleTagManagerId={settings.googleTagManagerId}
        />
        {children}
      </body>
    </html>
  );
}

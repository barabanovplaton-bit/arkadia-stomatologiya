import type { Metadata } from "next";
import { Onest, Golos_Text } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Деми Дети — детская стоматология · Санкт-Петербург · с 1989",
  description:
    "Стоматологическая клиника «Деми Дети» в Санкт-Петербурге с 1989 года. 6 филиалов, рейтинг 4.9, 2713 отзывов на Яндекс.Картах, 2ГИС и Google. Имплантация, ортодонтия, детская стоматология.",
  keywords: [
    "Деми Дети",
    "стоматология Санкт-Петербург",
    "имплантация",
    "ортодонтия",
    "детская стоматология",
    "рейтинг 4.9",
  ],
  authors: [{ name: "Клиника «Деми Дети»" }],
  openGraph: {
    title: "Деми Дети — детская стоматология в Петербурге с 1989 года",
    description: "6 филиалов · рейтинг 4.9 · 2713 отзывов на 3 платформах.",
    siteName: "Деми Дети",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${onest.variable} ${golos.variable} antialiased bg-arkadia-mist text-arkadia-graphite`}
      >
        {children}
        <Toaster />
        <SonnerToaster
          position="top-center"
          theme="light"
          toastOptions={{
            style: {
              background: "#FFFFFF",
              color: "#1F2937",
              border: "1px solid #0000fa",
              borderRadius: "14px",
              fontFamily: "var(--font-golos)",
            },
          }}
        />
      </body>
    </html>
  );
}

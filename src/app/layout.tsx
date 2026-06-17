import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Аркадия — стоматологическая клиника · Санкт-Петербург · с 1989",
  description:
    "Аркадия — страна счастливых людей. Стоматологическая клиника в Санкт-Петербурге с 1989 года. Шесть филиалов в историческом центре города.",
  keywords: [
    "Аркадия",
    "стоматология Санкт-Петербург",
    "стоматологическая клиника",
    "имплантация",
    "лечебный центр",
    "Невский",
    "Васильевский",
  ],
  authors: [{ name: "Клиника «Аркадия»" }],
  openGraph: {
    title: "Аркадия — страна счастливых людей",
    description:
      "Стоматологическая клиника в Санкт-Петербурге. С 1989 года. Шесть филиалов.",
    siteName: "Аркадия",
    type: "website",
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
        className={`${playfair.variable} ${inter.variable} antialiased bg-arkadia-ink text-arkadia-ivory`}
      >
        {children}
        <Toaster />
        <SonnerToaster
          position="top-center"
          theme="dark"
          toastOptions={{
            style: {
              background: "#1a1a18",
              color: "#f5f0e6",
              border: "1px solid rgba(201, 169, 97, 0.3)",
              fontFamily: "var(--font-inter)",
            },
          }}
        />
      </body>
    </html>
  );
}

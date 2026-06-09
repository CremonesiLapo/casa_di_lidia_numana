import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "A Casa di Lidia | B&B e Appartamenti sul lungomare di Numana",
  description:
    "B&B sul lungomare di Numana. Soggiorna in camere ed appartamenti fronte mare, a pochi passi dalle spiagge più belle di Numana e della Riviera del Conero.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${quicksand.className} scroll-smooth`}>
      <body className="text-mare bg-white">{children}</body>
    </html>
  );
}

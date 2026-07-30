import type { Metadata } from "next";
import { League_Spartan, Poppins } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muriel Gravouil — Révèle ta Zone de Génie",
  description:
    "Découvre ton fonctionnement naturel et révèle pleinement ta Zone de Génie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${leagueSpartan.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Fira_Sans_Condensed, Signika_Negative } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/store/context";
import Footer from "@/components/layout/Footer";

const signika = Signika_Negative({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-signika",
});
const fira = Fira_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-fira",
});

export const metadata: Metadata = {
  title: "Chinyere Unamba",
  description: "Personal Portfolio",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en" className={`${fira.variable} ${signika.variable}`}>
        <body>
          {children}
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}

import type { Metadata } from "next";
import { Fira_Sans_Condensed, Signika_Negative } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/store/context";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const signika = Signika_Negative({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display:'swap',
  variable: "--font-signika",
});
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Portfolio",
  url: "https://chinyereunamba.vercel.com/",
  name: "Chinyere Unamba",
  description:
    "Hi, I am Chinyere Unamba. I am a full stack developer. I work with Next.js, Python, Typescript, Javascript and a lot more",
};

export const metadata: Metadata = {
  title: "Chinyere Unamba",
  description: "Personal Portfolio",
  keywords: "chinyere, unamba, nextjs developer, chinyere_un, web developer,",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en" className={signika.className}>
        <Script
          id="portfolio-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <body>
          {children}
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}

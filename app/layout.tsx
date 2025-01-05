import type { Metadata } from "next";
import { Fira_Sans_Condensed, Signika_Negative } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import SplashCursor from '@/components/utils/Splash'

const signika = Signika_Negative({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
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
    <html lang="en" className={signika.className}>
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PS33P3NKKZ', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />
      <body className={signika.className}>
        <SplashCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}

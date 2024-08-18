import type { Metadata } from "next";
import { Inter, Signika_Negative } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/store/context";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const signika = Signika_Negative({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
      <html lang="en">
        <body className={signika.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}

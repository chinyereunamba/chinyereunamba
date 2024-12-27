import "./globals.css";

export const metadata = {
  title: "Chinyere Unamba",
  description: "Personal Portfolio",
};

import { SessionProvider } from "../store/context";

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
          />
        </head>
        <body>{children}</body>
      </html>
    </SessionProvider>
  );
}

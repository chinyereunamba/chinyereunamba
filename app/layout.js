import "./globals.css"
// import { Signika_Negative } from "next/font/google"

// const signika = Signika_Negative({ subsets: ["latin"] })

export const metadata = {
    title: "Chinyere Unamba",
    description: "Personal Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        ></link>
      </head>
      <body>{children}</body>
    </html>
  )
}

// app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://chinyereunamba.vercel.com/sitemap.xml",
  };
}

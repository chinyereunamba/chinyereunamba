// app/sitemap.js
export default function Sitemap() {
  return [
    {
      url: "https://chinyereunamba.vercel.com",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: "https://chinyereunamba.vercel/#about",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chinyereunamba.vercel/#blog",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}

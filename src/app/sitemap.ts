import type { MetadataRoute } from "next";

const SITE_URL = "https://www.miguelgilurbina.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL,                        lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/servicios`,         lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/direccion-creativa`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/claude-impact-lab`, lastModified, changeFrequency: "yearly",  priority: 0.8 },
    { url: `${SITE_URL}/cargo-electric`,    lastModified, changeFrequency: "yearly",  priority: 0.7 },
  ];
}

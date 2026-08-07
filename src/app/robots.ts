import type { MetadataRoute } from "next";

const SITE_URL = "https://miguelgilurbina.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Las propuestas comerciales llevan montos y datos de clientes.
      disallow: ["/propuesta-", "/sst-crm"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

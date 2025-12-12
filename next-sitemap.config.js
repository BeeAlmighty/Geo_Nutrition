/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.geonutrition.com.ng", // change to your live domain
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false, // you can set true for very large sites
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://www.geonutrition.com.ng/sitemap.xml",
    ],
  },
}

export default config

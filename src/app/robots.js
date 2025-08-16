export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: [
            '/'
        ],
        disallow: [
            '/api/',
            '/_next/',
        ],
        crawlDelay: 1
      },
      // Provide a sitemap URL on the new domain so crawlers index the
      // site correctly.
      sitemap: 'https://x.neutemu.com/sitemap.xml',
    }
  }
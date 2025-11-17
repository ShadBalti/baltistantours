export const sitemapConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://baltistantours.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 0,
      },
    ],
  },
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.miraencomentarios.com', // ← cambia esto por tu dominio real
  generateRobotsTxt: true,        // Genera también el robots.txt automáticamente
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404', '/admin', '/success'],    // Rutas que no quieras indexar
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/legal'],
      },
    ],
  },
};

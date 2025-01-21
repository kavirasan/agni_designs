import fs from "fs";
import path from "path";
import { SitemapStream } from "sitemap"; // Correct import for ES module

// Define your site's URL
const baseUrl = 'https://agnidesign.netlify.app';

// List your static routes here
const pages = [
  '/',
  '/about',
  '/getintouch',
  '/contact',
];

// Create a write stream for the sitemap
const sitemapStream = new SitemapStream({ hostname: baseUrl });

// Add each URL to the sitemap
pages.forEach(page => {
  sitemapStream.write({ url: page, changefreq: 'monthly', priority: 0.7 });
});

// End the stream and generate the sitemap
sitemapStream.end();

// Convert the stream to a promise and write it to the build folder
import { streamToPromise } from "sitemap"; // Import the streamToPromise

streamToPromise(sitemapStream).then(data => {
  const buildDir = path.resolve('build');
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
  }

  fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), data);
  console.log('Sitemap generated!');
});

import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

const links = [{ url: "/", changefreq: "monthly", priority: 1.0 } ];

const sitemapStream = new SitemapStream({
  hostname: "https://walidara-dev.onrender.com/",
});

streamToPromise(sitemapStream)
  .then((sitemap) => {
    const filePath = resolve(process.cwd(), "public", "sitemap.xml");
    sitemapStream.pipe(createWriteStream(filePath));
    console.log(`Sitemap written to $generate-sitemap.js`);
  })
  .catch(console.error);

links.forEach((link) => sitemapStream.write(link));
sitemapStream.end();
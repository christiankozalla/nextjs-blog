const fs = require('fs');
const path = require('path');

const postsDirectory = path.join(process.cwd().replace('scripts', ''), 'posts');

(async () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const cleanNames = fileNames.map((fileName) => {
    const cleanName = fileName.replace('.md', '');
    return cleanName;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${cleanNames
      .map((file) => {
        return `
      <url>
        <loc>https://devdiary.me/posts/${file}</loc>
      </url>
        `;
      })
      .join('')}
    </urlset>
  `;

  fs.writeFileSync(
    process.cwd().replace('scripts', 'public/sitemap.xml'),
    sitemap
  );
})();

const fs = require("fs"),
  path = require("path");
const root = path.join(__dirname, "../build");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const pages = {
  modern: "Modern Kitchens",
  classic: "Classic Kitchens",
  european: "European Kitchens",
  unique: "Unique Kitchens",
  about: "About Dller",
  services: "Our Services",
  "why-dller": "The Dller Difference",
  contact: "Contact Dller",
  "privacy-policy": "Privacy Policy",
  "configuracion-cookies": "Cookie Policy",
};
for (const [route, title] of Object.entries(pages)) {
  const dir = path.join(root, route);
  fs.mkdirSync(dir, { recursive: true });
  let page = html
    .replace(/<title>.*?<\/title>/, `<title>${title} | Dller</title>`)
    .replace(/(<meta property="og:title" content=")[^"]+/, `$1${title} | Dller`)
    .replace(
      /(<link rel="canonical" href=")[^"]+/,
      `$1https://www.dller.com/${route}`,
    )
    .replace(
      /(<meta property="og:url" content=")[^"]+/,
      `$1https://www.dller.com/${route}`,
    );
  fs.writeFileSync(path.join(dir, "index.html"), page);
}
fs.writeFileSync(
  path.join(root, "404.html"),
  html
    .replace(/<title>.*?<\/title>/, "<title>Page not found | Dller</title>")
    .replace("</head>", '<meta name="robots" content="noindex"/></head>'),
);
fs.writeFileSync(
  path.join(root, "sitemap.xml"),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    ["", ...Object.keys(pages)]
      .map((p) => `  <url><loc>https://www.dller.com/${p}</loc></url>`)
      .join("\n") +
    "\n</urlset>\n",
);
console.log(
  "Generated direct-entry pages, sitemap and 404 page for GitHub Pages.",
);

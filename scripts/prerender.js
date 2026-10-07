import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");

// Import data safely on Windows
const booksPath = pathToFileURL(path.resolve(rootDir, "src/data/books.ts")).href;
const authorPath = pathToFileURL(path.resolve(rootDir, "src/data/author.ts")).href;

const booksModule = await import(booksPath);
const authorModule = await import(authorPath);

const books = booksModule.books;
const sortedBooks = booksModule.sortedBooks;
const author = authorModule.author;

const templateHtml = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function updateMetaTags(html, title, description, canonicalUrl, schemaObj, noindex = false) {
  let updated = html;

  // Replace <title>
  updated = updated.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(title)}</title>`);
  updated = updated.replace(/<meta name="title" content=".*?" \/>/s, `<meta name="title" content="${escapeHtml(title)}" />`);
  updated = updated.replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${escapeHtml(description)}" />`);
  
  // Robots
  const robotsVal = noindex ? "noindex, nofollow" : "index, follow";
  updated = updated.replace(/<meta name="robots" content=".*?" \/>/s, `<meta name="robots" content="${robotsVal}" />`);

  // Canonical
  if (canonicalUrl) {
    updated = updated.replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${canonicalUrl}" />`);
  } else {
    updated = updated.replace(/<link rel="canonical" href=".*?" \/>/s, "");
  }

  // OG & Twitter
  updated = updated.replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${escapeHtml(title)}" />`);
  updated = updated.replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${escapeHtml(description)}" />`);
  if (canonicalUrl) {
    updated = updated.replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${canonicalUrl}" />`);
    updated = updated.replace(/<meta property="twitter:url" content=".*?" \/>/s, `<meta property="twitter:url" content="${canonicalUrl}" />`);
  }
  updated = updated.replace(/<meta property="twitter:title" content=".*?" \/>/s, `<meta property="twitter:title" content="${escapeHtml(title)}" />`);
  updated = updated.replace(/<meta property="twitter:description" content=".*?" \/>/s, `<meta property="twitter:description" content="${escapeHtml(description)}" />`);

  // Schema
  if (schemaObj) {
    const jsonLdScript = `<script type="application/ld+json">\n${JSON.stringify(schemaObj, null, 2)}\n</script>`;
    updated = updated.replace(/<script type="application\/ld\+json">.*?<\/script>/s, jsonLdScript);
  }

  return updated;
}

function writeRouteHtml(routePath, htmlContent) {
  let targetFile;
  if (routePath === "/" || routePath === "/index.html") {
    targetFile = path.resolve(distDir, "index.html");
  } else if (routePath === "/404" || routePath === "/404.html") {
    targetFile = path.resolve(distDir, "404.html");
  } else {
    const cleanRoute = routePath.replace(/^\//, "");
    const routeDir = path.resolve(distDir, cleanRoute);
    fs.mkdirSync(routeDir, { recursive: true });
    targetFile = path.resolve(routeDir, "index.html");
  }

  fs.writeFileSync(targetFile, htmlContent, "utf-8");
  console.log(`Prerendered: ${routePath} -> ${path.relative(rootDir, targetFile)}`);
}

// 1. Home Page Prerender
const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.revfrdrjosephraj.org/#author",
      "name": "Rev. Fr. Dr. Joseph Raj",
      "givenName": "Joseph",
      "familyName": "Raj",
      "honorificPrefix": "Rev. Fr. Dr.",
      "jobTitle": "Priest, Theologian, Canonist and Author",
      "description": "Catholic Priest of the Archdiocese of Castries, Doctor in Moral Theology (Accademia Alfonsiana), Licentiate in Canon Law (Angelicum, Rome), and Author.",
      "image": "https://www.revfrdrjosephraj.org/images/author/author.jpg",
      "url": "https://www.revfrdrjosephraj.org/",
      "email": "mailto:josephraj13@hotmail.com",
      "workLocation": { "@type": "Place", "name": "Saint Lucia, West Indies" },
      "memberOf": { "@type": "Organization", "name": "Archdiocese of Castries" }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.revfrdrjosephraj.org/#website",
      "url": "https://www.revfrdrjosephraj.org/",
      "name": "Rev. Fr. Dr. Joseph Raj",
      "description": "Official website and 15-volume theological, canonical, and spiritual collection of Rev. Fr. Dr. Joseph Raj.",
      "publisher": { "@id": "https://www.revfrdrjosephraj.org/#author" },
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.revfrdrjosephraj.org/#breadcrumb",
      "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.revfrdrjosephraj.org/" }]
    }
  ]
};

const homeHtml = updateMetaTags(
  templateHtml,
  "Rev. Fr. Dr. Joseph Raj | Priest, Theologian, Canonist & Author",
  "Explore the life, ministry, writings, and 15-volume scholarly and pastoral collection of Rev. Fr. Dr. Joseph Raj, priest, theologian, canonist, preacher, and author.",
  "https://www.revfrdrjosephraj.org/",
  homeSchema
);
writeRouteHtml("/", homeHtml);

// 2. About Page Prerender
const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://www.revfrdrjosephraj.org/about#profile",
      "url": "https://www.revfrdrjosephraj.org/about",
      "name": "About Rev. Fr. Dr. Joseph Raj | Priest, Theologian & Author",
      "mainEntity": {
        "@type": "Person",
        "@id": "https://www.revfrdrjosephraj.org/#author",
        "name": "Rev. Fr. Dr. Joseph Raj",
        "jobTitle": "Priest, Theologian, Canonist and Author",
        "email": "mailto:josephraj13@hotmail.com",
        "url": "https://www.revfrdrjosephraj.org/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.revfrdrjosephraj.org/about#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.revfrdrjosephraj.org/" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.revfrdrjosephraj.org/about" }
      ]
    }
  ]
};

const aboutHtml = updateMetaTags(
  templateHtml,
  "About Rev. Fr. Dr. Joseph Raj | Priest, Theologian & Author",
  "Learn about Rev. Fr. Dr. Joseph Raj, Catholic priest of the Archdiocese of Castries, Doctor in Moral Theology, Canonist, and author of 15 theological and pastoral works.",
  "https://www.revfrdrjosephraj.org/about",
  aboutSchema
);
writeRouteHtml("/about", aboutHtml);

// 3. Books Catalogue Prerender
const booksCollectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.revfrdrjosephraj.org/books#collection",
      "url": "https://www.revfrdrjosephraj.org/books",
      "name": "Books by Rev. Fr. Dr. Joseph Raj | 15-Volume Collection",
      "description": "The complete 15-volume scholarly and pastoral collection of Rev. Fr. Dr. Joseph Raj.",
      "publisher": { "@type": "Person", "@id": "https://www.revfrdrjosephraj.org/#author", "name": "Rev. Fr. Dr. Joseph Raj" },
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": sortedBooks.length,
        "itemListElement": sortedBooks.map((b, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "url": `https://www.revfrdrjosephraj.org/books/${b.slug}`,
          "item": {
            "@type": "Book",
            "@id": `https://www.revfrdrjosephraj.org/books/${b.slug}#book`,
            "name": b.title,
            "url": `https://www.revfrdrjosephraj.org/books/${b.slug}`,
            "author": { "@id": "https://www.revfrdrjosephraj.org/#author" }
          }
        }))
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.revfrdrjosephraj.org/books#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.revfrdrjosephraj.org/" },
        { "@type": "ListItem", "position": 2, "name": "Books", "item": "https://www.revfrdrjosephraj.org/books" }
      ]
    }
  ]
};

const booksHtml = updateMetaTags(
  templateHtml,
  "Books by Rev. Fr. Dr. Joseph Raj | 15-Volume Collection",
  "Explore the 15-volume scholarly and pastoral collection of Rev. Fr. Dr. Joseph Raj covering faith, Scripture, family life, marriage, spirituality, theology, canon law, and Christian mission.",
  "https://www.revfrdrjosephraj.org/books",
  booksCollectionSchema
);
writeRouteHtml("/books", booksHtml);

// 4. Contact Page Prerender
const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.revfrdrjosephraj.org/contact#contactpage",
      "url": "https://www.revfrdrjosephraj.org/contact",
      "name": "Contact Rev. Fr. Dr. Joseph Raj",
      "description": "Get in touch with Rev. Fr. Dr. Joseph Raj for pastoral inquiries, publication updates, and correspondence.",
      "mainEntity": { "@type": "Person", "@id": "https://www.revfrdrjosephraj.org/#author", "name": "Rev. Fr. Dr. Joseph Raj", "email": "mailto:josephraj13@hotmail.com" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.revfrdrjosephraj.org/contact#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.revfrdrjosephraj.org/" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.revfrdrjosephraj.org/contact" }
      ]
    }
  ]
};

const contactHtml = updateMetaTags(
  templateHtml,
  "Contact Rev. Fr. Dr. Joseph Raj",
  "Get in touch with Rev. Fr. Dr. Joseph Raj for pastoral enquiries, theological research discussions, publication updates, and correspondence.",
  "https://www.revfrdrjosephraj.org/contact",
  contactSchema
);
writeRouteHtml("/contact", contactHtml);

// 5. Privacy Page Prerender
const privacyHtml = updateMetaTags(
  templateHtml,
  "Privacy Policy | Rev. Fr. Dr. Joseph Raj",
  "Privacy policy regarding pastoral communications, publication notification requests, and personal data handling for Rev. Fr. Dr. Joseph Raj.",
  "https://www.revfrdrjosephraj.org/privacy",
  null
);
writeRouteHtml("/privacy", privacyHtml);

// 6. Terms Page Prerender
const termsHtml = updateMetaTags(
  templateHtml,
  "Terms of Use | Rev. Fr. Dr. Joseph Raj",
  "Terms of use and intellectual property guidelines for the theological writings, publications, and online ministry of Rev. Fr. Dr. Joseph Raj.",
  "https://www.revfrdrjosephraj.org/terms",
  null
);
writeRouteHtml("/terms", termsHtml);

// 7. 404 Page Prerender
const notFoundHtml = updateMetaTags(
  templateHtml,
  "Page Not Found | Rev. Fr. Dr. Joseph Raj",
  "The requested page could not be found. Return to the catalogue or home page of Rev. Fr. Dr. Joseph Raj.",
  null,
  null,
  true
);
writeRouteHtml("/404", notFoundHtml);

// 8. All 15 Book Detail Pages Prerender
books.forEach((book) => {
  const bookUrl = `https://www.revfrdrjosephraj.org/books/${book.slug}`;
  const coverUrl = `https://www.revfrdrjosephraj.org${book.coverImage}`;
  const title = `${book.title} | Rev. Fr. Dr. Joseph Raj`;
  const description = book.seo?.description || book.description;

  const bookSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Book",
        "@id": `${bookUrl}#book`,
        "name": book.title,
        "description": book.description,
        "image": coverUrl,
        "url": bookUrl,
        "inLanguage": "en",
        "genre": book.category,
        "mainEntityOfPage": bookUrl,
        "author": {
          "@type": "Person",
          "@id": "https://www.revfrdrjosephraj.org/#author",
          "name": "Rev. Fr. Dr. Joseph Raj",
          "url": "https://www.revfrdrjosephraj.org/about"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${bookUrl}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.revfrdrjosephraj.org/" },
          { "@type": "ListItem", "position": 2, "name": "Books", "item": "https://www.revfrdrjosephraj.org/books" },
          { "@type": "ListItem", "position": 3, "name": book.title, "item": bookUrl }
        ]
      }
    ]
  };

  const bHtml = updateMetaTags(templateHtml, title, description, bookUrl, bookSchema);
  writeRouteHtml(`/books/${book.slug}`, bHtml);
});

console.log("Pre-rendering finished successfully for all public routes!");

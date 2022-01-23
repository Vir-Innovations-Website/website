import fs from "fs";

const Sitemap = () => { };


export async function getServerSideProps({ res }) {
    const baseUrl = {
        development: "http://localhost:4000",
        production: "https://www.virinnovations.in",
    }[process.env.NODE_ENV];

    let staticPages = fs
        .readdirSync("pages")
        .filter((staticPage) => {
            return ![
                "_app.js",
                "_document.js",
                "_error.js",
                "sitemap.xml.js",
            ].includes(staticPage);
        })
        .map((staticPagePath) => {
            return `${baseUrl}/${staticPagePath.replace(".js", "")}`;
        });

    staticPages = ['https://www.virinnovations.in'];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPages
            .map((url) => {
                return `
              <url>
                <loc>${url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
            })
            .join("")}
      </urlset>
    `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;




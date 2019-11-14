/**
 * CREATE SITEMAP
 var links = []; document.querySelectorAll('a').forEach(l=>links.push({loc: l.href, lastmod: new Date().toISOString()}));JSON.stringify(links);
 */

/**
  * XML TEMPLATE:
	<urlset 
		xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
		xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
			<url>
				<loc>https://learntransactsql.now.sh/</loc>
				<lastmod>2019-11-14T11:01:06+00:00</lastmod>
				<priority>0.2</priority>
			</url>
	</urlset>
  */
process.argv
console.log('process.argv: ', process.argv);
const priority = 0.2
const xml = require('jsontoxml').json_to_xml;
console.log('xml: ', xml);
const links = require('./site-map-links.json').map(({ loc, lastmod }) => {
    const url = { loc, lastmod, priority }
    return { url };
});
console.log('links: ', links);
console.log(xml(links));

const siteMapXmlString = `
<urlset 
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${xml(links)}
</urlset>
`
console.log('siteMapXmlString: ', siteMapXmlString);

require('fs').writeFileSync('./sitemap.xml', siteMapXmlString, 'utf8');
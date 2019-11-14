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
process.argv[2];
const verbose = process.argv[3] === 'verbose';
const priority = 0.2
const xml = require('jsontoxml').json_to_xml;
let links;
try {
    links = require(require('path').resolve(process.argv[2].split('.')[0] + '.json'))
        .map(({ loc, lastmod }) => {
            const url = { loc, lastmod, priority }
            return { url };
        });
    verbose && console.log('links: ', links);
    if (links.length === 0) throw new Error('The file is empty');
    createSiteMap(links, () => console.log('sitemap file created in project root'));;
} catch (err) {
    console.error('ERROR', err.message);
    verbose && console.error(err);
}

function createSiteMap(linksArray, cb) {
    const siteMapXmlString = `
	<urlset 
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
	xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
	${xml(linksArray)}
	</urlset>`;
    verbose && console.log('siteMapXmlString: ', siteMapXmlString);
    require('fs').writeFileSync('./sitemap.xml', siteMapXmlString, 'utf8');
    cb()
}
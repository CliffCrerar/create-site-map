# Create site map

Crude but quick and effective site map generator.

copy this into the browser console command line:

```js
 var links = []; document.querySelectorAll('a').forEach(l=>links.push({loc: l.href, lastmod: new Date().toISOString()}));JSON.stringify(links);

```
copy the output of the console into a `foo.json` file.

run the command `node app foo.json`
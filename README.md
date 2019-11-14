# Create site map

Crude but quick and effective site map generator.

copy this into the browser console command line:

```js
 var links = []; document.querySelectorAll('a').forEach(l=>links.push({loc: l.href, lastmod: new Date().toISOString()}));JSON.stringify(links);
```
copy the output of the console into a `foo.json` file.

run the command: 

```bash 
node app [path to json file]/foo.jso
```

NOTE: Easiest to create the file in the `root` directory of this project and simply run:

```bash
node app foo.json
```
### VERBOSELY

To see the process console logs add `verbose` to the end of the command.


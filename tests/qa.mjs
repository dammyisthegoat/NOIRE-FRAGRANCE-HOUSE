import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const root=new URL('../',import.meta.url).pathname;
const files=['index.html','shop.html','product.html','story.html','bag.html','404.html','styles.css','app.js'];
for(const f of files){assert.ok(fs.existsSync(root+f),`missing ${f}`)}
const js=fs.readFileSync(root+'app.js','utf8');new vm.Script(js);assert.match(js,/const PRODUCTS = \[/);assert.equal((js.match(/\{id:'/g)||[]).length,8,'expected eight product definitions');
for(const page of files.filter(f=>f.endsWith('.html'))){const html=fs.readFileSync(root+page,'utf8');if(page!=='404.html'){assert.match(html,/href="styles\.css"/,`${page} stylesheet must be relative`);assert.match(html,/src="app\.js"/,`${page} script must be relative`)}assert.ok(!html.includes('href="/styles.css"'),`${page} has root-relative CSS path`)}
assert.match(js,/localStorage\.setItem\('noire-cart'/);assert.match(js,/data-cart-qty/);assert.match(js,/price-low/);assert.match(js,/checkValidity/);assert.match(js,/prefers-reduced-motion/);
console.log(`PASS: ${files.length} required files exist; JavaScript parses; 8 product definitions; relative asset paths; cart persistence, quantity, sorting, validation and reduced-motion hooks present.`);

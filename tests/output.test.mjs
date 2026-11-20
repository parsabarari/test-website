import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {load} from 'cheerio';
const locales=['fa','en','zh-hans','de','es'];
const paths=['','about','contact',...['pushal','sargol','negin','super-negin'].map(x=>`products/${x}`)];
test('35 complete static pages, reciprocal language routes and local links',()=>{
 let count=0;
 for(const l of locales)for(const p of paths){
 const path=`/${l}/${p?p+'/':''}`,html=fs.readFileSync(`dist${path}index.html`,'utf8'),$=load(html);count++;
 assert.equal($('h1').length,1,path);assert.equal($('html').attr('dir'),l==='fa'?'rtl':'ltr');
 assert.equal($('link[rel=canonical]').attr('href'),`https://example.com${path}`);
 assert.equal($('link[rel=alternate]').length,6);assert.equal($('meta[name=robots]').attr('content'),'noindex, follow');
 assert.ok($('title').text().length);assert.ok($('meta[name=description]').attr('content'));
 assert.equal($('a[href^="mailto:"]').length,p==='contact'?2:0);
 for(const a of $('a[href^="/"]').toArray()){const target=$(a).attr('href').split(/[?#]/)[0];assert.ok(fs.existsSync(`dist${target}index.html`),target);}
 assert.doesNotMatch(html,/priceCurrency|"offers"|checkout|undefined/);
 }
 assert.equal(count,35);
 const sitemap=load(fs.readFileSync('dist/sitemap.xml','utf8'),{xml:true});assert.equal(sitemap('loc').length,35);
 assert.equal(fs.readFileSync('public/_redirects','utf8').trim(),'/ /en/ 301');
});

test('catalogue indexes removed and editorial assets available',()=>{for(const l of locales){assert.equal(fs.existsSync('dist/'+l+'/products/index.html'),false);const $=load(fs.readFileSync('dist/'+l+'/index.html','utf8'));assert.equal($('#products').length,1);for(const img of $('img').toArray())assert.ok(fs.existsSync('dist'+$(img).attr('src')));}});

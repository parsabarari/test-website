import fs from 'node:fs';
const source=fs.readFileSync('Docs/03-copy.md','utf8');
const locales=['fa','en','zh-hans','de','es'];
const chunks=source.split(/^## /m).slice(1,6);
const out={};
chunks.forEach((chunk,i)=>{const data={};for(const line of chunk.split('\n')) {if(!line.startsWith('|'))continue;const cells=line.split('|').map(x=>x.trim());if(!cells[1]||cells[1].startsWith('-')||['کلید','Key'].includes(cells[1]))continue;const keys=cells[1].split(' / '),values=cells[2].split(' / ');keys.forEach((k,j)=>data[k]=values[j]);}out[locales[i]]=data;});
fs.writeFileSync('src/data/copy.json',JSON.stringify(out,null,2));

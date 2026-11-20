import {site} from '../lib/content';
export const GET=()=>new Response(`User-agent: *\nAllow: /\nSitemap: ${site.domain}/sitemap.xml\n`);

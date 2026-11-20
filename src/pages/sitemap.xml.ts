import {locales,pages,route,site} from '../lib/content';
export const GET=()=>new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${locales.flatMap(l=>pages.map(p=>`<url><loc>${new URL(route(l,p),site.domain).href}</loc></url>`)).join('')}</urlset>`,{headers:{'Content-Type':'application/xml'}});

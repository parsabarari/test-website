# قرارداد معماری و سئوی بین‌المللی

## خروجی مرورگر

Astro، TypeScript strict، CSS عادی و تصاویر پردازش‌شده در build. `output: 'static'`، `trailingSlash: 'always'` و `build.format: 'directory'` را صریح نگه دار. `site` از دامنهٔ محیط گرفته شود. داده به‌صورت محلی import می‌شود. سرور برنامه، دیتابیس، headless CMS، SSR، service worker، hydration سراسری و API کاتالوگ در مسیر بازدید لازم نیست. SSR و SSG هر دو می‌توانند HTML قابل ایندکس تولید کنند؛ دلیل SSG در این پروژه، محتوای ثابت و یکسان برای همهٔ بازدیدکنندگان است. [Astro rendering](https://docs.astro.build/en/guides/on-demand-rendering/)

## ساختار مخزن پیشنهادی

```text
src/config/site.ts                       # domain, brand, sales email, release mode
src/data/products.ts                     # shared product ids, slugs, approved facts, media
src/data/locales/{en,fa,de,es,zh-hans}/   # ui, pages, products dictionaries
src/lib/routes.ts                        # one route constructor and locale registry
src/lib/content.ts                       # schema checks and published product selection
src/assets/catalog/                      # local approved source photography
src/layouts/Page.astro
src/components/                          # Header, LanguageMenu, ProductCard, Specs, Footer
src/pages/[locale]/index.astro
src/pages/[locale]/products/index.astro
src/pages/[locale]/products/[slug].astro
src/pages/[locale]/about.astro
src/pages/[locale]/contact.astro
src/pages/404.astro
public/_redirects
public/_headers
tests/
```

استفاده از یک registry مسیر کافی است. پنج درخت قالب درست نکن. `getStaticPaths()` برای صفحات عمومی از فهرست زبان‌ها و برای جزئیات از حاصل‌ضرب زبان‌ها در محصولات قابل نمایش ساخته شود. شناسهٔ صفحه یا محصول مبنای language switcher، hreflang، breadcrumb و sitemap باشد. نتیجه برای product=negin در آلمانی همیشه `/de/products/negin/` است. برای تولید sitemap از همین registry یا integration معادل استفاده کن. فقط URLهای واقعی و canonical. در صفحات زبان‌دار به تزریق رشته‌های ترجمه به‌شکل HTML خام نیازی نیست.

| موجودیت | فیلدهای ضروری | کنترل |
|---|---|---|
| Locale | key، htmlLang، dir، nativeName | zh-hans با htmlLang برابر zh-Hans، fa با rtl، بقیه ltr |
| Product | id، slug، order، publicationStatus، imageRef | id و slug یکتا و پایدار؛ ترتیب یکسان در همهٔ زبان‌ها |
| ProductCopy | name، cardSummary، detail، appearance، imageAlt | پوشش کامل برای هر محصول و زبان؛ هیچ fallback خاموش به انگلیسی |
| Business | label، domain، salesEmail، optional verified origin/packaging | برای دمو fixture مشخص، برای انتشار دادهٔ کسب‌وکار |
| Asset | path، dimensions، purpose، approval، rights note | تصویر نمایشی و تصویر تأییدشده از هم قابل تشخیص باشند |

دو حالت `preview` و `production` صریح باشند. در preview از `example.com` برای نمونهٔ ایمیل و برچسب محلی «نسخهٔ نمایشی» استفاده کن. لینک نمونه را غیرفعال کن و آدرس را صرفاً نمایشی نشان بده. در production اگر دامنه یا ایمیل نمونه، برند موقت، عکس اصلی تأییدنشده یا ترجمهٔ ضروری ناقص بود، build با مسیر و فیلد خطا متوقف شود. انتخاب وضعیت انتشار مستقل از NODE_ENV باشد تا build محلی دمو قابل آزمون باشد.

## HTML و SEO

- هر صفحهٔ محتوایی 200، یک H1، title محلی یکتا، meta description، HTML lang و dir و لینک canonical مطلق HTTPS به URL تمیز خودش داشته باشد. متن، لینک، مشخصات و انتخاب زبان در View Source دیده شوند.
- در head هر صفحه هر پنج alternate مطلق با hreflang شامل خود صفحه و لینک برگشت معادل‌ها قرار دهند. برای x-default از نسخهٔ انگلیسی همان محتوا استفاده کن. در صفحهٔ تماس query هیچ اثری بر canonical نداشته باشد. انتخاب زبان دستی است. [Google localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions)
- HTML ریشه با ریدایرکت ثابت میزبان 301 به /en/؛ از تغییر مسیر براساس IP یا زبان مرورگر پرهیز کن. فقط یک hostname اصلی داشته باش. لینک‌های داخلی، sitemap و OG از همان آدرس استفاده کنند.
- `robots.txt` تولید با لینک مطلق sitemap؛ محیط preview با X-Robots-Tag یا meta noindex. برای پیش‌نمایش عمومی که باید noindex دیده شود، مسیر را در robots مسدود نکن. فایل 404 ریشه واقعی تولید کن.
- Open Graph محلی با همان URL و عکس اختصاصی محصول. دادهٔ ساختاریافتهٔ اختیاری Organization روی خانه با اطلاعات واقعی، BreadcrumbList روی جزئیات با مسیر قابل مشاهده؛ هیچ price، Offer، امتیاز یا review نمونه‌ای در HTML، JSON-LD یا payload خروجی قرار نگیرد.
- فونت، عکس، CSS و JS روی دامنهٔ خود سایت باشند. picture/srcset/sizes و ابعاد صریح؛ فایل‌های تصویری AVIF یا WebP به‌اندازهٔ viewport و fallback سازگار. برای عکس اصلی LCP از lazy-loading استفاده نکن؛ عکس پایین صفحه lazy و محصول مرتبط با سایز کارت. srcset پیشنهادی 360/640/960/1440 با رعایت اندازهٔ منبع. فونت زبان‌های دیگر در همین بازدید دانلود نشود.
- برای کنترل‌های اصلی از HTML بومی بهره بگیر؛ ناوبری با JS خاموش قابل استفاده باشد. تعامل ریز مثل prefill موضوع ایمیل اختیاری است. برای mailto فقط ایمیل تنظیمات استفاده شود و موضوع با encodeURIComponent از نام محصول معتبر ساخته شود.

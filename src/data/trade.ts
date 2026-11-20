import type { Locale } from '../lib/content';

interface TradeCopy {
  headline: string;
  introduction: string;
  audience: string;
  enquiry: string;
  details: string;
  comparison: string;
  reviewTitle: string;
  checks: { title: string; body: string }[];
  aboutTitle: string;
  aboutLead: string;
  aboutBody: string;
  threadAlt: string;
  flowerAlt: string;
  enquiryTitle: string;
  enquiryLead: string;
  enquiryChecklist: string;
  fields: string[];
  chatTitle: string;
  unavailable: string;
}

export const trade: Record<Locale, TradeCopy> = {
  fa: {
    headline: 'زعفران رشته‌ای برای خرید عمده',
    introduction: 'برش‌های پوشال، سرگل، نگین و سوپر نگین را مقایسه کنید و درخواست خرید را بر اساس کاربرد، مقدار و مقصد آماده کنید.',
    audience: 'برای پخش‌کنندگان ادویه، تولیدکنندگان مواد غذایی و خریداران خدمات غذایی',
    enquiry: 'استعلام خرید',
    details: 'مشاهدهٔ جزئیات',
    comparison: 'برای مقایسه، به طول رشته، یکنواختی برش و باقی‌ماندن بخش روشن توجه کنید. این ویژگی‌ها ظاهر برش را توصیف می‌کنند.',
    reviewTitle: 'پیش از خرید چه چیزهایی را بررسی کنیم؟',
    checks: [
      { title: 'عکس و نمونهٔ محموله', body: 'برای ارزیابی ظاهر، عکس محمولهٔ موردنظر را در نور یکنواخت بخواهید. اگر نمونه در دسترس است، شمارهٔ محمولهٔ آن را با پیشنهاد فروش تطبیق دهید.' },
      { title: 'مشخصات و مدارک', body: 'مبدأ، وزن خالص و مدارک لازم برای تأیید داخلی را مشخص کنید. اگر گزارش آزمون یا گواهی آنالیز لازم دارید، به محمولهٔ مورد استعلام اشاره کنید.' },
      { title: 'بسته‌بندی و تحویل', body: 'مقدار تقریبی، وزن بسته، مقصد و زمان موردنیاز را بنویسید تا شرایط عرضه در پاسخ استعلام روشن شود.' },
    ],
    aboutTitle: 'دربارهٔ کاتالوگ زعفران',
    aboutLead: 'این کاتالوگ به خریداران عمده کمک می‌کند ظاهر چهار برش را مقایسه و مشخصات لازم برای خرید را آماده کنند.',
    aboutBody: 'نیاز یک پخش‌کننده به وزن بسته و برچسب با نیاز یک واحد تولیدی به مشخصات محموله فرق دارد. کاربرد و شرایط خرید را در پیام خود بنویسید تا گفت‌وگو از جزئیات مرتبط با کسب‌وکار شما شروع شود.',
    threadAlt: 'رشته‌های قرمز زعفران روی زمینهٔ روشن',
    flowerAlt: 'گل‌های بنفش زعفران',
    enquiryTitle: 'درخواست خرید عمده',
    enquiryLead: 'نام شرکت، نوع زعفران، مقدار تقریبی و مقصد را در پیام بنویسید. اگر هنوز نوع مناسب را انتخاب نکرده‌اید، کاربرد مدنظر را توضیح دهید.',
    enquiryChecklist: 'اطلاعات لازم برای استعلام',
    fields: ['نام شرکت و کاربرد محصول', 'نوع برش و مقدار تقریبی', 'وزن و نوع بسته‌بندی', 'کشور، شهر مقصد و زمان خرید', 'مدارک یا مشخصات موردنیاز'],
    chatTitle: 'ارتباط در پیام‌رسان',
    unavailable: 'نمایشی؛ حساب فروش هنوز تنظیم نشده است.',
  },
  en: {
    headline: 'Saffron threads for wholesale buyers',
    introduction: 'Compare Pushal, Sargol, Negin and Super Negin. Prepare a wholesale enquiry around your application, quantity and destination.',
    audience: 'For spice distributors, food manufacturers and foodservice buyers',
    enquiry: 'Wholesale enquiry',
    details: 'View cut details',
    comparison: 'Compare thread length, the evenness of the cut and how much pale style remains. These features describe the appearance of the cut.',
    reviewTitle: 'What to check before buying',
    checks: [
      { title: 'Batch photos and samples', body: 'Ask for evenly lit photos of the batch you are considering. If a sample is available, check that its lot number matches the offer.' },
      { title: 'Specifications and documents', body: 'Identify the declared origin, net weight and paperwork your team needs. If you require a test report or certificate of analysis, ask for the one that covers the batch.' },
      { title: 'Packaging and delivery', body: 'Share your approximate volume, pack weight, destination and timing so these terms can be addressed in the reply.' },
    ],
    aboutTitle: 'About the saffron catalogue',
    aboutLead: 'This catalogue helps trade buyers compare four saffron cuts and prepare the specifications for a wholesale enquiry.',
    aboutBody: 'Distributors may need particular pack sizes and labelling, while food manufacturers may place more emphasis on batch specifications. Share your application and purchasing requirements so the conversation starts with the details that matter to your business.',
    threadAlt: 'Red saffron threads on a pale background',
    flowerAlt: 'Purple saffron crocus flowers',
    enquiryTitle: 'Request a wholesale quotation',
    enquiryLead: 'Include your company name, preferred cut, approximate quantity and destination. If you are still choosing a cut, describe what you plan to use it for.',
    enquiryChecklist: 'What to include',
    fields: ['Company and intended use', 'Cut and approximate volume', 'Pack size and format', 'Destination city, country and timing', 'Required specifications or documents'],
    chatTitle: 'Messaging options',
    unavailable: 'Preview channel. A sales account hasn’t been configured.',
  },
  de: {
    headline: 'Safranfäden für den Großhandel',
    introduction: 'Vergleichen Sie Pushal, Sargol, Negin und Super Negin. Bereiten Sie Ihre Anfrage anhand von Anwendung, Menge und Lieferziel vor.',
    audience: 'Für Gewürzhändler, Lebensmittelhersteller und den Gastronomiebedarf',
    enquiry: 'Großhandelsanfrage',
    details: 'Details ansehen',
    comparison: 'Vergleichen Sie die Fadenlänge, die Gleichmäßigkeit des Schnitts und den hellen Griffelanteil. Diese Merkmale beschreiben das Aussehen.',
    reviewTitle: 'Was Sie vor dem Kauf prüfen können',
    checks: [
      { title: 'Chargenfotos und Muster', body: 'Bitten Sie um gleichmäßig beleuchtete Fotos der betreffenden Charge. Falls ein Muster verfügbar ist, gleichen Sie seine Chargennummer mit dem Angebot ab.' },
      { title: 'Spezifikationen und Unterlagen', body: 'Klären Sie die angegebene Herkunft, das Nettogewicht und die benötigten Unterlagen. Fragen Sie bei Bedarf nach dem Prüfbericht oder Analysezertifikat der Charge.' },
      { title: 'Verpackung und Lieferung', body: 'Nennen Sie ungefähre Menge, Packungsgewicht, Lieferort und Zeitrahmen, damit diese Angaben in der Antwort berücksichtigt werden.' },
    ],
    aboutTitle: 'Über den Safrankatalog',
    aboutLead: 'Der Katalog hilft gewerblichen Einkäufern, vier Schnittformen zu vergleichen und die Anforderungen für eine Anfrage zusammenzustellen.',
    aboutBody: 'Für Händler sind Packungsgrößen und Etiketten oft entscheidend. Hersteller achten besonders auf Chargenspezifikationen. Beschreiben Sie Ihre Anwendung und Anforderungen, damit das Gespräch bei den gewünschten Details beginnt.',
    threadAlt: 'Rote Safranfäden auf hellem Grund',
    flowerAlt: 'Violette Safranblüten',
    enquiryTitle: 'Ein Großhandelsangebot anfragen',
    enquiryLead: 'Nennen Sie Firma, Schnittform, ungefähre Menge und Lieferziel. Falls Sie noch keine Schnittform gewählt haben, beschreiben Sie den Verwendungszweck.',
    enquiryChecklist: 'Angaben für die Anfrage',
    fields: ['Unternehmen und Verwendungszweck', 'Schnittform und ungefähre Menge', 'Packungsgewicht und Verpackung', 'Lieferort, Land und Zeitrahmen', 'Benötigte Spezifikationen oder Unterlagen'],
    chatTitle: 'Kontakt per Messenger',
    unavailable: 'Vorschau. Ein Vertriebskonto ist noch nicht eingerichtet.',
  },
  es: {
    headline: 'Azafrán en hebras para mayoristas',
    introduction: 'Compare Pushal, Sargol, Negin y Super Negin. Prepare su consulta según el uso, la cantidad y el destino.',
    audience: 'Para distribuidores de especias, fabricantes de alimentos y hostelería',
    enquiry: 'Consulta mayorista',
    details: 'Ver detalles del corte',
    comparison: 'Compare la longitud de las hebras, la uniformidad del corte y la parte clara que se conserva. Estos rasgos describen su aspecto.',
    reviewTitle: 'Qué comprobar antes de comprar',
    checks: [
      { title: 'Fotos y muestras del lote', body: 'Solicite fotos con luz uniforme del lote que está valorando. Si hay una muestra, compruebe que su número de lote coincide con la oferta.' },
      { title: 'Especificaciones y documentación', body: 'Aclare el origen declarado, el peso neto y los documentos que necesita su equipo. Si requiere un informe de ensayo o un certificado de análisis, solicite el del lote.' },
      { title: 'Envase y entrega', body: 'Indique la cantidad aproximada, el peso por envase, el destino y el plazo para que la respuesta pueda abordar estas condiciones.' },
    ],
    aboutTitle: 'Sobre el catálogo de azafrán',
    aboutLead: 'Este catálogo ayuda a los compradores profesionales a comparar cuatro cortes y preparar los requisitos de una consulta mayorista.',
    aboutBody: 'Los distribuidores pueden necesitar formatos y etiquetas específicos, mientras que los fabricantes suelen dar más peso a las especificaciones del lote. Describa el uso y sus requisitos para empezar por los detalles relevantes.',
    threadAlt: 'Hebras rojas de azafrán sobre un fondo claro',
    flowerAlt: 'Flores moradas de azafrán',
    enquiryTitle: 'Solicitar un presupuesto mayorista',
    enquiryLead: 'Incluya la empresa, el corte, la cantidad aproximada y el destino. Si aún no ha elegido un corte, describa el uso previsto.',
    enquiryChecklist: 'Qué incluir en la consulta',
    fields: ['Empresa y uso previsto', 'Corte y cantidad aproximada', 'Peso y formato del envase', 'Ciudad, país de destino y plazo', 'Especificaciones o documentos requeridos'],
    chatTitle: 'Opciones de mensajería',
    unavailable: 'Canal de muestra. La cuenta de ventas está pendiente de configurar.',
  },
  'zh-hans': {
    headline: '面向批发采购的藏红花花丝',
    introduction: '比较 Pushal、Sargol、Negin 和 Super Negin 四种规格，根据用途、数量和目的地准备采购咨询。',
    audience: '适合香料经销商、食品制造商和餐饮采购团队',
    enquiry: '批发询价',
    details: '查看规格详情',
    comparison: '比较花丝长度、切分均匀度及保留的浅色花柱。这些特征用于描述规格的外观。',
    reviewTitle: '采购前需要确认什么？',
    checks: [
      { title: '批次照片与样品', body: '请索取光照均匀的实际批次照片。如可提供样品，请核对样品批号与报价对应的批次。' },
      { title: '规格与文件', body: '确认标示产地、净重和团队所需文件。如需检测报告或分析证书，请索取对应批次的文件。' },
      { title: '包装与交付', body: '提供大致数量、单包重量、目的地和期望交付时间，便于在回复中确认这些条件。' },
    ],
    aboutTitle: '关于藏红花目录',
    aboutLead: '本目录帮助批发采购商比较四种花丝规格，整理询价时需要说明的要求。',
    aboutBody: '经销商可能更关注包装规格和标签，食品制造商则更关注批次参数。请说明用途和采购要求，便于沟通与业务相关的细节。',
    threadAlt: '浅色背景上的红色藏红花花丝',
    flowerAlt: '紫色藏红花花朵',
    enquiryTitle: '申请批发报价',
    enquiryLead: '请注明公司名称、所需规格、大致数量和目的地。如果尚未确定规格，请描述计划用途。',
    enquiryChecklist: '询价所需信息',
    fields: ['公司名称与用途', '花丝规格和大致数量', '单包重量与包装形式', '目的地城市、国家与时间要求', '所需规格或文件'],
    chatTitle: '即时通讯渠道',
    unavailable: '演示渠道，尚未配置销售账号。',
  },
};



import copy from '../data/copy.json';
export const locales=['fa','en','zh-hans','de','es'] as const;
export type Locale=typeof locales[number];
export const names={fa:'فارسی',en:'English','zh-hans':'简体中文',de:'Deutsch',es:'Español'};
export const ids=['pushal','sargol','negin','super-negin'];
export const pages=['','about','contact',...ids.map(id=>`products/${id}`)];
export const route=(locale:string,page='')=>`/${locale}/${page?`${page}/`:''}`;
export const site={mode:import.meta.env.RELEASE_MODE||'preview',domain:import.meta.env.PUBLIC_SITE_URL||'https://example.com',brand:import.meta.env.PUBLIC_BRAND||'Saffron',email:import.meta.env.PUBLIC_SALES_EMAIL||'sales@example.com'};
export function validate(config=site,data=copy){
 if(!['preview','production'].includes(config.mode))throw Error('RELEASE_MODE: invalid mode');
 for(const l of locales)for(const key of Object.keys(copy.en))if(!(data[l] as Record<string,string>)[key]?.trim())throw Error(`${l}.${key}: missing translation`);
 if(config.mode==='production'){
 if(!/^https:\/\//.test(config.domain)||/example\.|localhost/.test(config.domain))throw Error('PUBLIC_SITE_URL: real HTTPS domain required');
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)||/example\./.test(config.email))throw Error('PUBLIC_SALES_EMAIL: real email required');
 if(config.brand==='Saffron')throw Error('PUBLIC_BRAND: approved brand required');
 throw Error('products.imageRef: approved product photography and rights records required');
 }
}
validate();
export const dictionary=(l:Locale)=>copy[l] as Record<string,string>;
export const ui:Record<Locale,string[]>={
 fa:['نسخهٔ نمایشی','خانه','منو','زبان','تصویر نمونه','ویژگی ظاهری','رفتن به محتوا','صفحه پیدا نشد','کاتالوگ عمده','ایمیل نمونه؛ ارسال غیرفعال است'],
 en:['Preview edition','Home','Menu','Language','Sample image','Appearance','Skip to content','Page not found','Wholesale catalogue','Sample email; sending is disabled'],
 de:['Vorschau','Startseite','Menü','Sprache','Beispielbild','Erscheinungsbild','Zum Inhalt','Seite nicht gefunden','Großhandelskatalog','Beispieladresse; Versand deaktiviert'],
 es:['Versión de muestra','Inicio','Menú','Idioma','Imagen de muestra','Aspecto','Saltar al contenido','Página no encontrada','Catálogo mayorista','Correo de muestra; envío desactivado'],
 'zh-hans':['预览版本','首页','菜单','语言','示例图片','外观','跳至内容','页面未找到','批发目录','示例邮箱，无法发送']};
export function product(l:Locale,id:string){const [name,cardSummary]=dictionary(l)[id].split(' — ');return {id,name,cardSummary};}


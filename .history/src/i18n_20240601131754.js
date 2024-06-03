import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async () => {
  const locale = 'ru';
  localStorage.setItem('localLang' , locale)
  return {
    locale,
    messages: (await import(`./langs/${locale}.json`)).default
  };
});
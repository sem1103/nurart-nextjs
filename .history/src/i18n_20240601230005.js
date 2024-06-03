import {getRequestConfig} from 'next-intl/server';
 
export default  getRequestConfig(async (req) => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = 'ru';
  return {
    locale,
    messages: (await import(`../lang/${locale}.json`)).default
  };
});
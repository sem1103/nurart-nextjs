import {getRequestConfig} from 'next-intl/server';
const locale = 'az';
 


export default  getRequestConfig(async (req) => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  
  return {
    locale,
    messages: (await import(`../lang/${locale}.json`)).default
  };
});
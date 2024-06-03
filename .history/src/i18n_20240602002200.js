import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['az', 'ru'];
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
 
  return {
    messages: (await import(`../lang/${locale}.json`)).default
  };
});
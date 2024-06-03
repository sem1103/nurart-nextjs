 
import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix, defaultLocale} from './navigation';
 
export default createMiddleware({
  defaultLocale: 'az',
  localePrefix,
  locales
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(az|ru)/:path*']
};
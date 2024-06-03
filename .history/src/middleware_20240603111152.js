 
import createMiddleware from 'next-intl/middleware';
import {defaultLocale, locales, localePrefix} from './navigation';
 
export default createMiddleware({
  defaultLocale: 'az',
  localePrefix,
  locales
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(tr|ru)/:path*']
};
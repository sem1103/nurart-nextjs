import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['az', 'ru'],
 
  // Used when no locale matches
  defaultLocale: 'az',
  localePrefix : 'always'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(az|ru)/:path*']
};
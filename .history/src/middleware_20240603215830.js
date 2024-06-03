import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['az', 'ru'],
  // Used when no locale matches
  defaultLocale: 'az',
  pathnames : {
    '/prod/polygraphy': {
      az: '/poliqrafiyalar',
      ru: '/prod/polygraphy'
    }
  }
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(az|ru)/:path*']
};
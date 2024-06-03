import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['az', 'ru'],
  // Used when no locale matches
  defaultLocale: 'az',
  pathnames : {
    '/' : '/',
    '/prod/polygraphy': {
      az: '/poliqrafiyalar',
      ru: '/poliqrafii'
    }
  }
});
 
export const config = {
  matcher: [
    '/',
    '/(az|ru)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
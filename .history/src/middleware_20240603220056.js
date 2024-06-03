import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['az', 'ru'],
  // Used when no locale matches
  defaultLocale: 'az',
  pathnames : {
    '/prod/polygraphy': {
      az: '/poliqrafiyalar',
      ru: '/producti/poliqrafii'
    }
  }
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // However, match all pathnames within `/users`, optionally with a locale prefix
    '/([\\w-]+)?/users/(.+)'
  ]
};
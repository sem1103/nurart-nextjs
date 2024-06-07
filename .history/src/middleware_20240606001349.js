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
    },
    "/designservice" : {
      az: '/dizayn-xidmetleri',
      ru: '/usluqi-dizayna'
    },
    "/digitprint" : {
      az: '/reqemsal-cap',
      ru: '/cifrovaya-pechat'
    },
    "/ofsetprint" : {
      az: '/ofset-cap',
      ru: '/ofsetnaya-pechat'
    }
  }
});
 
export const config = {
  matcher: [
    '/',
    '/(az|ru)/:path*',
    '/((?!api|_next|_vercel|phpmyadmin|.*\\..*).*)'
  ]
};
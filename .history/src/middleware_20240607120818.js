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
    '/prod/shtamp': {
      az: '/mohurler',
      ru: '/pechati'
    },
    '/prod/plasticCards': {
      az: '/plastik-kartlar',
      ru: '/plastikovie-karti'
    },
    '/prod/promoProd': {
      az: '/promo-mehsullar',
      ru: '/promo-produkti'
    },
    '/prod/promoProd': {
      az: '/promo-mehsullar',
      ru: '/promo-produkti'
    },
    "/prod/vinilProducts" : {
      az: '/viniller',
      ru: '/vinili'
    },
    "/promotions" : {
      az: '/kampaniyalar',
      ru: '/kampanii'
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
    },
    "/aboutUs" : {
      az: '/shirkət-haqqında',
      ru: '/o-kompanii'
    },
    "/contactUs" : {
      az: '/bizimle-elaqe',
      ru: '/svyazatsya-s-nami'
    },
    "/favoritesPage" : {
      az: '/secilmish-mehsullar',
      ru: '/izbranniye-produkti'
    },
    "/cartPage" : {
      az: '/sebet',
      ru: '/korzina'
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
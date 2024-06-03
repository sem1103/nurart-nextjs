const defaultLocale = 'az';
const locales = ['az', 'ru'];

const pathnames = {
  '/': '/',
  '/prod/polygraphy': {
    az: '/poliqrafiyalar',
    ru: '/poliqrafii'
  }
};

// Use the default: `always`
const localePrefix = undefined;

export default {
  port,
  host,
  defaultLocale,
  locales,
  pathnames,
  localePrefix
};
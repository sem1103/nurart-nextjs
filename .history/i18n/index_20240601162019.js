import az from './az.json'
import ru from './ru.json'

const i18n = {
  translations: {
    az: az.i18n,
    ru: ru.i18n
  },
  defaultLang: navigator.language,
  useBrowserDefault: true,
  languageDataStore: "query" || "localStorage",
};

module.exports = i18n;
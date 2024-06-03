import az from './langs/az.json'
import ru from './langs/ru.json'

const i18n = {
  translations: {
    ru,
    az,
  },
  defaultLang: "en",
  useBrowserDefault: true,
  languageDataStore: "query" || "localStorage",
};

module.exports = i18n;
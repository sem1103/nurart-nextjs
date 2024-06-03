import az from './az.json'
import ru from './ru.json'

const i18n = {
  translations: {
    az,
    ru,
  },
  defaultLang: "az",
  useBrowserDefault: true,
  languageDataStore: "query" || "localStorage",
};

module.exports = i18n;
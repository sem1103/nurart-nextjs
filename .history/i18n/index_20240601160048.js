import az from './az.json'
import ru from './ru.json'

const i18n = {
  translations: {
    az,
    ru,
  },
  defaultLang: "az",
  useBrowserDefault: true,
  // optional property will default to "query" if not set
  languageDataStore: "query" || "localStorage",
};

module.exports = i18n;
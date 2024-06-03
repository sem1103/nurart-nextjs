import az from './az.json'
import ru from './ru.json'

const i18n = {
  translations: {
    az,
    ru,
  },
  defaultLang: "az",
  languageDataStore: "localStorage",
  useBrowserDefault: true,
};

module.exports = i18n;

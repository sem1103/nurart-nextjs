import az from './../langs/az.json'
import ru from './../langs/ru.json'

const i18n = {
  translations: {
    ru,
    az,
  },
  defaultLang: navigator.language,
  useBrowserDefault: true,
  languageDataStore: "localStorage",
};

module.exports = i18n;
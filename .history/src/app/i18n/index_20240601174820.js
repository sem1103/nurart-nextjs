import az from './az.json'
import ru from './ru.json'

const i18n = {
  translations: {
    az,
    ru,
  },
  defaultLang: localStorage.i18nextLng,
  languageDataStore: "localStorage",
  useBrowserDefault: true,
};

module.exports = i18n;

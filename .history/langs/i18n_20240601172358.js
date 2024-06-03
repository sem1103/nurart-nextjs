import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import az from './az.json'
import ru from './ru.json'


i18n.use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      az: {
        translation: az
      }, 
      ru: {
        translation: ru
      }
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng', // Если язык не определен, используйте localStorage
    },
  });

export default i18n;
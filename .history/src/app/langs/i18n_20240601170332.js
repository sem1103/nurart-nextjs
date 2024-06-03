import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import az from './az.json'
import ru from './ru.json'

i18n.use(LanguageDetector).use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'auto',
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
    }
  });

export default i18n;
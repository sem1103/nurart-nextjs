import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import az from './az.json';
import ru from './ru.json';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    interpolation: {
      escapeValue: false,
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

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import az from './az.json';
import ru from './ru.json';

let defaultLang = localStorage.i18nextLng;


i18n.use(initReactI18next).init({
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
    }
  });

export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import az from './az.json';
import ru from './ru.json';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: localStorage.i18nextLng,
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

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import az from './az.json';
import ru from './ru.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'az',
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
    },
    lng: localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') : 'az' // Устанавливаем язык по умолчанию
  });

export default i18n;

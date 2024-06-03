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
    interpolation: {
      escapeValue: false, // не нужно для React, так как он по умолчанию экранирует
    },
    resources: {
      az: {
        translation: az,
      },
      ru: {
        translation: ru,
      },
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng', // Если язык не определен, используйте localStorage
    },
  });

export default i18n;

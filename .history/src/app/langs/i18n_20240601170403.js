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
    fallbackLng: 'auto', // Установка языка по умолчанию в соответствии с языком браузера
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
  });

export default i18n;

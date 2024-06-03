import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import az from './az.json';
import ru from './ru.json';

const userLanguage = localStorage.getItem('i18nextLng'); // Получаем сохраненный язык пользователя

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'ru', // Используем сохраненный язык или русский язык по умолчанию
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

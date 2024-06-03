import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import az from '@/public/langs/az.json';
import ru from '@/public/langs/ru.json';

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
    }
  });

export default i18n;
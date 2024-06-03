// components/LanguageSwitcher.js
'use client'
import { useState } from 'react';

const LanguageSwitcher = () => {
  const [locale, setLocale] = useState('ru');
  const { formatMessage } = useIntl();

  const changeLanguage = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>{formatMessage({ id: 'language.english' })}</button>
      <button onClick={() => changeLanguage('ru')}>{formatMessage({ id: 'language.russian' })}</button>
      {/* Добавьте кнопки для других языков, если необходимо */}
    </div>
  );
};

export default LanguageSwitcher;

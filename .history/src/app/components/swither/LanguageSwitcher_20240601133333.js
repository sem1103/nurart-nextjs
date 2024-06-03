// components/LanguageSwitcher.js
'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (lang) => {
    console.log(router);

   
  };

  useEffect(() => {
    // Проверяем, что маршрутизатор инициализирован
    if (!router) {
      console.error('NextRouter was not mounted');
    }
  }, [router]);

  return (
    <div>
      <button onClick={() => changeLanguage('az')}>English</button>
      <button onClick={() => changeLanguage('ru')}>Français</button>
      {/* Добавьте кнопки для других языков, если необходимо */}
    </div>
  );
};

export default LanguageSwitcher;

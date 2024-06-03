// components/LanguageSwitcher.js
'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (lang) => {
    if (!router) {
      console.error('NextRouter was not mounted');
      return;
    }

    const currentPath = router.asPath;
    const basePath = router.basePath;
    const newPath = currentPath.replace(basePath, `/${lang}`);
    router.push(newPath);
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

// components/LanguageSwitcher.js
'use client'
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const basePath = usePathname();


  const changeLanguage = (lang) => {

    const currentPath = router.asPath;
    const newPath = currentPath.replace(basePath, `/${lang}`);
    router.push(newPath);

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

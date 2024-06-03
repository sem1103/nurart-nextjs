import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (lang) => {
    const currentPath = router.asPath;
    const basePath = router.basePath;
    const newPath = currentPath.replace(basePath, `/${lang}`);
    router.push(newPath);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
      {/* Добавьте кнопки для других языков, если необходимо */}
    </div>
  );
};

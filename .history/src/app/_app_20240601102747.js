import { appWithTranslation } from 'next-i18next';

import nextI18nextConfig from '../../next.config.mjs';  // Импортируем конфигурацию

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }
  
  export default appWithTranslation(MyApp, nextI18nextConfig);
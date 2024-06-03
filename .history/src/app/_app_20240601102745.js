import { appWithTranslation } from 'next-i18next';

import nextI18nextConfig from '../../next.config.mjs';  // Импортируем конфигурацию

function RootLayout({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }
  
  export default appWithTranslation(RootLayout, nextI18nextConfig);
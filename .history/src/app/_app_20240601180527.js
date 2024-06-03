import App from 'next/app';
import { I18nProvider } from 'next-export-i18n';
import i18n from '../i18n';
import RootLayout from '../layout';

const MyApp = ({ Component, pageProps, locale }) => {
  return (
    <I18nProvider lang={locale}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </I18nProvider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  // Получите язык из заголовков запроса
  const language = appContext.ctx.req
    ? appContext.ctx.req.headers['accept-language']?.split(',')[0]
    : i18n.defaultLocale;

  // Установите язык в зависимости от заголовков или используйте язык по умолчанию
  const locale = i18n.locales.includes(language) ? language : i18n.defaultLocale;

  return { ...appProps, locale };
};

export default MyApp;

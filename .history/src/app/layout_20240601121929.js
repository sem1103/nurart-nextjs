import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next "
};


export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (

    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>


  );
}
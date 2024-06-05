import { NextIntlClientProvider } from "next-intl";
import {getMessages} from 'next-intl/server';
import "./globals.css";
import Header from "@/components/header/Header";







export default async  function RootLayout({ children, params: { locale } }) {

  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <body>
      <NextIntlClientProvider  messages={messages}>

          <Header  />
     
          <main>
            {children}
          </main>
          </NextIntlClientProvider>
      </body>
    </html>
  );
}

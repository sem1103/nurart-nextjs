import { NextIntlClientProvider } from "next-intl";
import {getMessages} from 'next-intl/server';
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";


export const metadata = {
  authors : {name: 'asdas'},
  title: "Nur Art Dizayn və Poliqrafiya şirkəti",
  description: "NurArt Azərbaycanın ən böyük Poliqrafiya şirkətləri arasındadı və Bütün növ çap və dizayn xidmətlərini təklif etməkdədir.",

};




export default async  function RootLayout({ children, params: { locale } }) {

  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <body>
      <NextIntlClientProvider locale={locale}  messages={messages}>
          <Header  />
          <main>
            {children}
          </main>
          <Footer />
          </NextIntlClientProvider>
      </body>
    </html>
  );
}

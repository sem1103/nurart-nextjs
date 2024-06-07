import { NextIntlClientProvider } from "next-intl";
import {getMessages} from 'next-intl/server';
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";


export function generateMetadata({ params }) {

  const metadata = {
    ru: {
      authors : {name: 'NurArt'},
      title: "NurArt-полиграфия: Профессиональный дизайн и печать",
      description: "Узнайте больше о NurArt-полиграфии. Мы предлагаем высококачественные печатные услуги для вашего бизнеса, включая визитки, буклеты, брошюры, плакаты и каталоги. Наши эксперты обеспечат профессиональный дизайн и печать. Свяжитесь с нами сегодня!",
      openGraph: {
        title: 'NurArt-полиграфия: Профессиональный дизайн и печать ',
        description: 'Узнайте больше о NurArt-полиграфии. Мы предлагаем высококачественные печатные услуги для вашего бизнеса, включая визитки, буклеты, брошюры, плакаты и каталоги. Наши эксперты обеспечат профессиональный дизайн и печать. Свяжитесь с нами сегодня!',
        url: 'https://nurart.az/az/shirkət-haqqında',
        siteName: 'NurArt',
        images: [
          {
            url: '/assets/img/logo.png',
            width: 400,
            height: 200,
          }
        ],
        locale: 'ru',
        type: 'website'
      },
      
    },
    az: {
      authors : {name: 'NurArt'},
      title: 'NurArt Dizayn və Poliqrafiya şirkəti',
      description: "NurArt Azərbaycanın ən böyük Poliqrafiya şirkətləri arasındadı və Bütün növ çap və dizayn xidmətlərini təklif etməkdədir.",
      openGraph: {
        title: 'NurArt Dizayn və Poliqrafiya şirkəti',
        description: 'NurArt Azərbaycanın ən böyük Poliqrafiya şirkətləri arasındadı və Bütün növ çap və dizayn xidmətlərini təklif etməkdədir.',
        url: 'https://nurart.az/az/shirkət-haqqında',
        siteName: 'NurArt',
        images: [
          {
            url: '/assets/img/logo.png',
            width: 400,
            height: 200,
          }
        ],
        locale: 'az',
        type: 'website'
      }
    }
  };

  return metadata[params.locale ]; 
}

export const metadata = {
  title: "",
  description: "",
  authors : {name: 'NurArt'}

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

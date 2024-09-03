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
      description: "Добро пожаловать на наш сайт полиграфии! Мы специализируемся на производстве высококачественной полиграфической продукции, включая брошюры, флаеры, визитные карточки, каталоги, буклеты, наклейки, открытки и многое другое. Наша команда профессионалов готова помочь вам воплотить ваши идеи в жизнь с индивидуальным подходом и высоким качеством исполнения. Обращайтесь к нам для всех ваших полиграфических нужд уже сегодня!",
      openGraph: {
        title: 'NurArt-полиграфия: Профессиональный дизайн и печать ',
        description: 'Добро пожаловать на наш сайт полиграфии! Мы специализируемся на производстве высококачественной полиграфической продукции, включая брошюры, флаеры, визитные карточки, каталоги, буклеты, наклейки, открытки и многое другое. Наша команда профессионалов готова помочь вам воплотить ваши идеи в жизнь с индивидуальным подходом и высоким качеством исполнения. Обращайтесь к нам для всех ваших полиграфических нужд уже сегодня!',
        url: 'https://nurart.az/ru',
        siteName: 'NurArt',
        images: [
          {
            url: '/assets/img/logo.png',
          }
        ],
        locale: 'ru',
        type: 'website'
      },
      alternates: {
        canonical: '/',
        languages: {
          'az-AZ': '/az',
          'ru-RU': '/ru',
        },
      },
      verification: {
        google: "L7E7wPmN4wK7PpRQ85gwRVqyHfTNs9YrFbGYi1tm6zY",
      }
    },
    az: {
      authors : {name: 'NurArt'},
      title: 'NurArt Dizayn və Poliqrafiya şirkəti',
      description: "NurArt saytımıza xoş gəlmisiniz! Broşuralar, broşuralar, vizit kartları, kataloqlar, bukletlər, stikerlər, kartpostallar və daha çox daxil olmaqla yüksək keyfiyyətli çap məhsulları istehsalında ixtisaslaşmışıq. Peşəkar komandamız fikirlərinizi fərdi yanaşma və yüksək performans keyfiyyəti ilə həyata keçirməyinizə kömək etməyə hazırdır. Bu gün bütün çap ehtiyaclarınız üçün bizə müraciət edin!",
      openGraph: {
        title: 'NurArt Dizayn və Poliqrafiya şirkəti',
        description: 'NurArt saytımıza xoş gəlmisiniz! Broşuralar, broşuralar, vizit kartları, kataloqlar, bukletlər, stikerlər, kartpostallar və daha çox daxil olmaqla yüksək keyfiyyətli çap məhsulları istehsalında ixtisaslaşmışıq. Peşəkar komandamız fikirlərinizi fərdi yanaşma və yüksək performans keyfiyyəti ilə həyata keçirməyinizə kömək etməyə hazırdır. Bu gün bütün çap ehtiyaclarınız üçün bizə müraciət edin!',
        url: 'https://nurart.az/az',
        siteName: 'NurArt',
        images: [
          {
            url: '/assets/img/logo.png'
          }
        ],
        locale: 'az',
        type: 'website'
      },
      alternates: {
        canonical: '/',
        languages: {
          'az-AZ': '/az',
          'ru-RU': '/ru',
        },
      },
      verification: {
        google: "L7E7wPmN4wK7PpRQ85gwRVqyHfTNs9YrFbGYi1tm6zY",
      }
    }
  };

  return metadata[params.locale ]; 
}






export default async  function RootLayout({ children, params: { locale } }) {

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

      </head>
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

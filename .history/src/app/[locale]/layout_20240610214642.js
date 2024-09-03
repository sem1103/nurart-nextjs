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
      }
    }
  };

  return metadata[params.locale ]; 
}






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

import About from "./About";


export function generateMetadata({ params }) {
  console.log(params);
  const metadata = {
    ru: {
      title: "О нас - NurArt-полиграфия: Профессиональный дизайн и печать",
      description: "Узнайте больше о NurArt-полиграфии. Мы предлагаем высококачественные печатные услуги для вашего бизнеса, включая визитки, буклеты, брошюры, плакаты и каталоги. Наши эксперты обеспечат профессиональный дизайн и печать. Свяжитесь с нами сегодня!",
      openGraph: {
        title: 'О нас - NurArt-полиграфия: Профессиональный дизайн и печать ',
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
      alternates: {
        canonical: '/ru/o-kompanii',
        languages: {
          'az-AZ': '/az/shirkət-haqqında',
          'ru-RU': '/ru/o-kompanii',
        },
      }
    },
    az: {
      title: 'Haqqımızda - NurArt-çap: professional dizayn və çap ',
      description: "NurArt çapı haqqında daha çox oxuyun. Vizit kartları, bukletlər, broşuralar, afişalar və kataloqlar daxil olmaqla işiniz üçün yüksək keyfiyyətli çap xidmətləri təklif edirik. Mütəxəssislərimiz peşəkar dizayn və çap təmin edəcəklər. Bu gün Bizimlə əlaqə saxlayın!",
      openGraph: {
        title: 'Haqqımızda - NurArt-çap: professional dizayn və çap ',
        description: 'NurArt çapı haqqında daha çox oxuyun. Vizit kartları, bukletlər, broşuralar, afişalar və kataloqlar daxil olmaqla işiniz üçün yüksək keyfiyyətli çap xidmətləri təklif edirik. Mütəxəssislərimiz peşəkar dizayn və çap təmin edəcəklər. Bu gün Bizimlə əlaqə saxlayın!',
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
      },
      alternates: {
        canonical: '/az/shirkət-haqqında',
        languages: {
          'az-AZ': '/az/shirkət-haqqında',
          'ru-RU': '/ru/o-kompanii',
        },
      }
    }
  };

  return metadata[params.locale ]; 
}


export default function Page() {
    return <About />
}
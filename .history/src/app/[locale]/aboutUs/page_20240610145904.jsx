import About from "./About";


export function generateMetadata({ params }) {
  const metadata = {
    ru: {
      title: "О нас - NurArt-полиграфия: Профессиональный дизайн и печать",
      description: "Узнайте больше о NurArt-полиграфии. Визитки, буклеты, брошюры, афиши, каталоги, а также пластиковые карты, бейджики, значки, штампы и многое другое – мы предлагаем высококачественные печатные услуги для вашего бизнеса. Доверьтесь нашим профессионалам для создания и печати. Свяжитесь с нами сегодня и почувствуйте разницу!",
      openGraph: {
        title: 'О нас - NurArt-полиграфия: Профессиональный дизайн и печать ',
        description: 'Узнайте больше о NurArt-полиграфии. Визитки, буклеты, брошюры, афиши, каталоги, а также пластиковые карты, бейджики, значки, штампы и многое другое – мы предлагаем высококачественные печатные услуги для вашего бизнеса. Доверьтесь нашим профессионалам для создания и печати. Свяжитесь с нами сегодня и почувствуйте разницу!',
        url: 'https://nurart.az/az/haqqimizda',
        siteName: 'NurArt.az',
        images: [
          {
            url: '/assets/img/logo.png'
          }
        ],
        locale: 'ru',
        type: 'website'
      },
      alternates: {
        canonical: '/ru/o-kompanii',
        languages: {
          'az-AZ': '/az/haqqimizda',
          'ru-RU': '/ru/o-kompanii',
        },
      }
    },
    az: {
      title: 'Haqqımızda. NurArt - professional dizayn və çap ',
      description: "NurArt çapı haqqında daha çox oxuyun.  Vizit kartları, bukletlər, broşuralar, afişalar və kataloqlar kimi yüksək keyfiyyətli çap xidmətlərimizlə işinizi yüksəldin. Peşəkar dizayn və çap üçün mütəxəssislərimizə güvənin. Bu gün bizimlə əlaqə saxlayın və işiniz üçün fərqi görün!",
      openGraph: {
        title: 'Haqqımızda. NurArt - professional dizayn və çap ',
        description: 'NurArt çapı haqqında daha çox oxuyun.  Vizit kartları, bukletlər, broşuralar, afişalar və kataloqlar kimi yüksək keyfiyyətli çap xidmətlərimizlə işinizi yüksəldin. Peşəkar dizayn və çap üçün mütəxəssislərimizə güvənin. Bu gün bizimlə əlaqə saxlayın və işiniz üçün fərqi görün!',
        url: 'https://nurart.az/az/haqqimizda',
        siteName: 'NurArt.az',
        images: [
          {
            url: '/assets/img/logo.png'
          }
        ],
        locale: 'az',
        type: 'website'
      },
      alternates: {
        canonical: '/az/haqqimizda',
        languages: {
          'az-AZ': '/az/haqqimizda',
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
import { ContactUs } from "./ContactUs";


export function generateMetadata({ params }) {
  console.log(params);
  const metadata = {
    ru: {
      title: "Контактная информация. NurArt - Профессиональный дизайн и печать",
      description: "Визитки, буклеты, брошюры, афиши, каталоги, пластиковые карты, бейджики, значки, штампы и многое другое - для подробной информации и заказа свяжитесь с нами. Мы всегда готовы вам помочь!",
      openGraph: {
        title: 'Контактная информация. NurArt - Профессиональный дизайн и печать',
        description: 'Визитки, буклеты, брошюры, афиши, каталоги, пластиковые карты, бейджики, значки, штампы и многое другое - для подробной информации и заказа свяжитесь с нами. Мы всегда готовы вам помочь!',
        url: 'https://nurart.az/ru/svyazatsya-s-nami',
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
        canonical: '/ru/svyazatsya-s-nami',
        languages: {
          'az-AZ': '/az/bizimle-elaqe',
          'ru-RU': '/ru/svyazatsya-s-nami',
        },
      }
    },
    az: {
      title: 'Əlaqə Məlumatları. NurArt - professional dizayn və çap',
      description: "Vizit kartları, bukletlər, broşuralar, afişalar, kataloqlar, plastik kartlar, beyjilər, nışanlar, ştamplar və daha çoxu üçün ətraflı məlumat və sifariş üçün bizimlə əlaqə saxlayın. Biz hər zaman sizə kömək etməyə hazırıq!",
      openGraph: {
        title: 'Əlaqə Məlumatları. NurArt - professional dizayn və çap ',
        description: 'Vizit kartları, bukletlər, broşuralar, afişalar, kataloqlar, plastik kartlar, beyjilər, nışanlar, ştamplar və daha çoxu üçün ətraflı məlumat və sifariş üçün bizimlə əlaqə saxlayın. Biz hər zaman sizə kömək etməyə hazırıq!',
        url: 'https://nurart.az/az/bizimle-elaqe',
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
        canonical: '/az/bizimle-elaqe',
        languages: {
          'az-AZ': '/az/bizimle-elaqe',
          'ru-RU': '/ru/svyazatsya-s-nami',
        },
      }
    }
  };

  return metadata[params.locale ]; 
}



export default function Page() {
    return <ContactUs />
}
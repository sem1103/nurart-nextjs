import Promotions from "./Promotions";



export function generateMetadata({ params }) {
  const metadata = {
    ru: {
      title: "Акции и кампании. NurArt - Профессиональный дизайн и Печать",
      description: "Участвуйте в наших захватывающих акциях и кампаниях! Получите эксклюзивные предложения на широкий спектр наших полиграфических продуктов, включая брошюры, флаеры, визитные карточки, каталоги и многое другое. Не упустите возможность получить качественную полиграфию по выгодной цене. Подписывайтесь на наши обновления и следите за новыми акциями каждый день!",
      openGraph: {
        title: "Акции и кампании. NurArt - Профессиональный дизайн и Печать",
        description: 'Участвуйте в наших захватывающих акциях и кампаниях! Получите эксклюзивные предложения на широкий спектр наших полиграфических продуктов, включая брошюры, флаеры, визитные карточки, каталоги и многое другое. Не упустите возможность получить качественную полиграфию по выгодной цене. Подписывайтесь на наши обновления и следите за новыми акциями каждый день!',
        url: 'https://nurart.az/ru/kampanii',
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
        canonical: '/ru/kampanii',
        languages: {
          'az-AZ': '/az/kampaniyalar',
          'ru-RU': '/ru/kampanii',
        },
      }
    },
    az: {
      title: 'Aksiyalar və kampaniyalar. NurArt - Professional Dizayn və Çap ',
      description: "Maraqlı promosyonlarımızda və kampaniyalarımızda iştirak edin! Broşuralar, broşuralar, vizit kartları, kataloqlar və daha çox daxil olmaqla geniş çap məhsullarımız üçün eksklüziv təkliflər əldə edin. Sərfəli qiymətə keyfiyyətli çap əldə etmək fürsətini qaçırmayın. Yeniləmələrimizə abunə olun və hər gün yeni promosyonlar izləyin!",
      openGraph: {
        title: 'Aksiyalar və kampaniyalar. NurArt - Professional Dizayn və Çap',
        description: 'Maraqlı promosyonlarımızda və kampaniyalarımızda iştirak edin! Broşuralar, broşuralar, vizit kartları, kataloqlar və daha çox daxil olmaqla geniş çap məhsullarımız üçün eksklüziv təkliflər əldə edin. Sərfəli qiymətə keyfiyyətli çap əldə etmək fürsətini qaçırmayın. Yeniləmələrimizə abunə olun və hər gün yeni promosyonlar izləyin!',
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
        canonical: '/az/kampaniyalar',
        languages: {
          'az-AZ': '/az/kampaniyalar',
          'ru-RU': '/ru/kampanii',
        },
      }
    }
  };

  return metadata[params.locale ]; 
}



export default function Page() {
    return <Promotions />
}
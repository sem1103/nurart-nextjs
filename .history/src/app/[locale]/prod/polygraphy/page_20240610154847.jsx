
import Polygraphy from './Poligrafy';


export function generateMetadata({ params }) {
  const metadata = {
    ru: {
      title: "Продукты для полиграфии. Брошюры, флаеры, визитные карточки, каталоги, буклеты, наклейки, открытки и многое другое  NurArt - Профессиональный дизайн и Печать",
      description: 'Откройте бесконечные возможности для вашего бизнеса с нашим разнообразным ассортиментом полиграфических продуктов: брошюры, флаеры, визитные карточки, каталоги, буклеты, наклейки, открытки и многое другое! Каждый продукт отличается высоким качеством исполнения и инновационным дизайном, чтобы помочь вашему бренду выделиться из толпы. Откройте новые горизонты с нашей полиграфией уже сегодня!',
      openGraph: {
        title: "Продукты для полиграфии. Брошюры, флаеры, визитные карточки, каталоги, буклеты, наклейки, открытки и многое другое  NurArt - Профессиональный дизайн и Печать",
        description: 'Откройте бесконечные возможности для вашего бизнеса с нашим разнообразным ассортиментом полиграфических продуктов: брошюры, флаеры, визитные карточки, каталоги, буклеты, наклейки, открытки и многое другое! Каждый продукт отличается высоким качеством исполнения и инновационным дизайном, чтобы помочь вашему бренду выделиться из толпы. Откройте новые горизонты с нашей полиграфией уже сегодня!',
        url: 'https://nurart.az/ru/poliqrafii',
        siteName: 'NurArt.az',
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
        canonical: '/ru/poliqrafii',
        languages: {
          'az-AZ': '/az/poliqrafiyalar',
          'ru-RU': '/ru/poliqrafii',
        },
      }
    },
    az: {
      title: 'Poliqrafiya üçün məhsullar - NurArt: Professional Dizayn və Çap ',
      description: "Mövcud məhsullarımızı baxın, bu da vizit kartları, bukletlər, broşur və s. daxil olmaqla poliqrafiya üçün məhsulları təklif edir. Keyfiyyətli məhsullarımızı münasib qiymətlərlə təklif edirik. Əlavə məlumat üçün bizimlə əlaqə saxlayın!",
      openGraph: {
        title: 'Poliqrafiya üçün məhsullar - NurArt: Professional Dizayn və Çap',
        description: 'Mövcud məhsullarımızı baxın, bu da vizit kartları, bukletlər, broşur və s. daxil olmaqla poliqrafiya üçün məhsulları təklif edir. Keyfiyyətli məhsullarımızı münasib qiymətlərlə təklif edirik. Əlavə məlumat üçün bizimlə əlaqə saxlayın!',
        siteName: 'NurArt.az',
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
        canonical: '/az/poliqrafiyalar',
        languages: {
          'az-AZ': '/az/poliqrafiyalar',
          'ru-RU': '/ru/poliqrafii',
        },
      }
    }
  };

  return metadata[params.locale ]; 
}

export default function Page() {
    return <Polygraphy />
}
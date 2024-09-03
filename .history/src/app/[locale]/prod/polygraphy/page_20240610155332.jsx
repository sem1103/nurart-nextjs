
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
            url: '/assets/img/logo.png'
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
      title: 'Poliqrafiya üçün məhsullar: broşuralar, flayerler, vizit kartları, kataloqlar, bukletlər, stikerlər, kartpostallar və s. NurArt - Professional Dizayn və Çap ',
      description: "Müxtəlif çap məhsullarımızla işiniz üçün sonsuz imkanlar açın: broşuralar, flayerler, vizit kartları, kataloqlar, bukletlər, stikerlər, kartpostallar və daha çox! Hər bir məhsul, markanızın izdihamdan fərqlənməsinə kömək etmək üçün yüksək keyfiyyətli və yenilikçi bir dizayna malikdir. Bu gün poliqrafiyamızla yeni üfüqlər açın!",
      openGraph: {
        title: 'Poliqrafiya üçün məhsullar: broşuralar, flayerler, vizit kartları, kataloqlar, bukletlər, stikerlər, kartpostallar və s. NurArt - Professional Dizayn və Çap ',
        description: 'Müxtəlif çap məhsullarımızla işiniz üçün sonsuz imkanlar açın: broşuralar, flayerler, vizit kartları, kataloqlar, bukletlər, stikerlər, kartpostallar və daha çox! Hər bir məhsul, markanızın izdihamdan fərqlənməsinə kömək etmək üçün yüksək keyfiyyətli və yenilikçi bir dizayna malikdir. Bu gün poliqrafiyamızla yeni üfüqlər açın!',
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
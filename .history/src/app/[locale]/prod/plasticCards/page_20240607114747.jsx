import PlasticCards from "./PlasticCards";



export function generateMetadata({ params }) {
  const metadata = {
    ru: {
      title: "Продукты для полиграфии - NurArt: Профессиональный дизайн и Печать",
      description: "Просмотрите наш ассортимент товаров для полиграфии, включая визитки, буклеты, брошюры, плакаты и многое другое. Мы предлагаем высококачественные продукты по доступным ценам. Свяжитесь с нами для получения дополнительной информации!",
      openGraph: {
        title: 'Продукты для полиграфии - NurArt: Профессиональный дизайн и Печать',
        description: 'Просмотрите наш ассортимент товаров для полиграфии, включая визитки, буклеты, брошюры, плакаты и многое другое. Мы предлагаем высококачественные продукты по доступным ценам. Свяжитесь с нами для получения дополнительной информации!',
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
    return <PlasticCards />
}
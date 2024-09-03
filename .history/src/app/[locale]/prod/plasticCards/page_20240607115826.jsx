import PlasticCards from "./PlasticCards";



export function generateMetadata({ params }) {
  const metadata = {
    ru: {
      title: "Пластиковые карты и другие товары - NurArt: Профессиональный дизайн и Печать",
      description: "Просмотрите наш ассортимент пластиковых карт и других товаров, включая карточки, бейджи, ключевые бирки и многое другое. Мы предлагаем высококачественные продукты по доступным ценам. Свяжитесь с нами для получения дополнительной информации!",
      openGraph: {
        title: 'Пластиковые карты и другие товары - NurArt: Профессиональный дизайн и Печать',
        description: 'Просмотрите наш ассортимент товаров для полиграфии, включая визитки, буклеты, брошюры, плакаты и многое другое. Мы предлагаем высококачественные продукты по доступным ценам. Свяжитесь с нами для получения дополнительной информации!',
        url: 'https://nurart.az/ru/plastikovie-karti',
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
        canonical: '/ru/plastikovie-karti',
        languages: {
          'az-AZ': '/az/plastik-kartlar',
          'ru-RU': '/ru/plastikovie-karti',
        },
      }
    },
    az: {
      title: 'Plastik kartlar və digər məhsullar - NurArt: Professional Dizayn və Çap ',
      description: "Mövcud plastik kartlar və digər məhsullarımızın təsnifatına baxın, bu da kartochka, batch, açar işarələri və s. daxil olmaqla. Biz keyfiyyətli məhsullar təklif edirik və münasib qiymətlərə satırıq. Əlavə məlumat üçün bizimlə əlaqə saxlayın!",
      openGraph: {
        title: 'Plastik kartlar və digər məhsullar - NurArt: Professional Dizayn və Çap',
        description: 'Mövcud plastik kartlar və digər məhsullarımızın təsnifatına baxın, bu da kartochka, batch, açar işarələri və s. daxil olmaqla. Biz keyfiyyətli məhsullar təklif edirik və münasib qiymətlərə satırıq. Əlavə məlumat üçün bizimlə əlaqə saxlayın!',
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
        canonical: '/az/plastik-kartlar',
        languages: {
          'az-AZ': '/az/plastik-kartlar',
          'ru-RU': '/ru/plastikovie-karti',
        },
      }
    }
  };

  return metadata[params.locale ]; 
}


export default function Page() {
    return <PlasticCards />
}
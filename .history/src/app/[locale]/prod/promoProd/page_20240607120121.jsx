import PromoProducts from "./PromoProducts";



export function generateMetadata({ params }) {
  const metadata = {
    ru: {
      title: "Промо-продукты - NurArt: Профессиональный дизайн и Печать",
      description: "Просмотрите наш ассортимент промо-продуктов, включая календари, ручки, футболки, значки, наклейки, брелоки и многое другое. Мы предлагаем высококачественные продукты по доступным ценам. Свяжитесь с нами для получения дополнительной информации!",
      openGraph: {
        title: 'Промо-продукты - NurArt: Профессиональный дизайн и Печать',
        description: 'Просмотрите наш ассортимент промо-продуктов, включая календари, ручки, футболки, значки, наклейки, брелоки и многое другое. Мы предлагаем высококачественные продукты по доступным ценам. Свяжитесь с нами для получения дополнительной информации!',
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
      title: 'Promo məhsullar - NurArt: Professional Dizayn və Çap ',
      description: "Mövcud promo məhsullarımızın təsnifatına baxın, bu da takvimlər, qələmlər, futbolka, nişanlar, etiketlər, brelok və s. daxil olmaqla. Biz keyfiyyətli məhsullar təklif edirik və münasib qiymətlərə satırıq. Əlavə məlumat üçün bizimlə əlaqə saxlayın!",
      openGraph: {
        title: 'Promo məhsullar - NurArt: Professional Dizayn və Çap',
        description: 'Mövcud promo məhsullarımızın təsnifatına baxın, bu da takvimlər, qələmlər, futbolka, nişanlar, etiketlər, brelok və s. daxil olmaqla. Biz keyfiyyətli məhsullar təklif edirik və münasib qiymətlərə satırıq. Əlavə məlumat üçün bizimlə əlaqə saxlayın!',
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
    return <PromoProducts />
}
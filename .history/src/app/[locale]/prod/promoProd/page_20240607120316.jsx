import PromoProducts from "./PromoProducts";



export function generateMetadata({ params }) {
  const metadata = {
    ru: {
      title: "Промо-продукты - NurArt: Профессиональный дизайн и Печать",
      description: "Просмотрите наш ассортимент промо-продуктов, включая календари, ручки, футболки, значки, наклейки, брелоки и многое другое. Мы предлагаем высококачественные продукты по доступным ценам. Свяжитесь с нами для получения дополнительной информации!",
      openGraph: {
        title: 'Промо-продукты - NurArt: Профессиональный дизайн и Печать',
        description: 'Просмотрите наш ассортимент промо-продуктов, включая календари, ручки, футболки, значки, наклейки, брелоки и многое другое. Мы предлагаем высококачественные продукты по доступным ценам. Свяжитесь с нами для получения дополнительной информации!',
        url: 'https://nurart.az/ru/promo-produkti',
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
        canonical: '/ru/promo-produkti',
        languages: {
          'az-AZ': '/az/promo-mehsullar',
          'ru-RU': '/ru/promo-produkti',
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
          }
        ],
        locale: 'az',
        type: 'website'
      },
      alternates: {
        canonical: '/az/promo-mehsullar',
        languages: {
          'az-AZ': '/az/promo-mehsullar',
          'ru-RU': '/ru/promo-produkti',
        },
      }
    }
  };

  return metadata[params.locale ]; 
}


export default function Page() {
    return <PromoProducts />
}
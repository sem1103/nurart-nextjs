import PromoProducts from "./PromoProducts";



export function generateMetadata({ params }) {
  const metadata = {
    ru: {
      title: "Промо-продукты - NurArt: Профессиональный дизайн и Печать",
      description: "Подарите вашему бизнесу заметный имидж с нашим разнообразным ассортиментом промо-продукции: рекламные баннеры, наклейки, ручки с логотипом, кружки и многое другое. Наши высококачественные и креативные решения помогут вашему бренду выделиться из толпы. Повысьте узнаваемость и привлекательность вашего бренда уже сегодня!",
      openGraph: {
        title: 'Промо-продукты - NurArt: Профессиональный дизайн и Печать',
        description: 'Подарите вашему бизнесу заметный имидж с нашим разнообразным ассортиментом промо-продукции: рекламные баннеры, наклейки, ручки с логотипом, кружки и многое другое. Наши высококачественные и креативные решения помогут вашему бренду выделиться из толпы. Повысьте узнаваемость и привлекательность вашего бренда уже сегодня!',
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
      description: "Reklam bannerləri, stikerlər, loqo tutacaqları, Kupalar və s. kimi müxtəlif promo məhsullarımızla biznesinizə görkəmli imic bəxş edin. Yüksək keyfiyyətli və yaradıcı həllərimiz markanızın izdihamdan fərqlənməsinə kömək edəcəkdir. Bu gün brendinizin tanınmasını və cəlbediciliyini artırın!",
      openGraph: {
        title: 'Promo məhsullar - NurArt: Professional Dizayn və Çap',
        description: 'Reklam bannerləri, stikerlər, loqo tutacaqları, Kupalar və s. kimi müxtəlif promo məhsullarımızla biznesinizə görkəmli imic bəxş edin. Yüksək keyfiyyətli və yaradıcı həllərimiz markanızın izdihamdan fərqlənməsinə kömək edəcəkdir. Bu gün brendinizin tanınmasını və cəlbediciliyini artırın!',
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
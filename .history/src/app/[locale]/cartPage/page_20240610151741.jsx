import CartPage from "./CartPage";


export function generateMetadata({ params }) {
  console.log(params);
  const metadata = {
    ru: {
      title: "Корзина. NurArt - Профессиональный дизайн и печать",
      description: "Перед оформлением заказа, проверьте, что в корзине есть все необходимые товары: визитные карты, буклеты, брошюры, афиши и каталоги. Убедитесь, что каждый продукт в списке соответствует вашим потребностям и требованиям.",
      openGraph: {
        title: "Корзина. NurArt - Профессиональный дизайн и печать",
        description: 'Перед оформлением заказа, проверьте, что в корзине есть все необходимые товары: визитные карты, буклеты, брошюры, афиши и каталоги. Убедитесь, что каждый продукт в списке соответствует вашим потребностям и требованиям.',
        url: 'https://nurart.az/ru/korzina',
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
        canonical: '/ru/korzina',
        languages: {
          'az-AZ': '/az/sebet',
          'ru-RU': '/ru/korzina',
        },
      }
    },
    az: {
      title: 'Səbət. NurArt - professional dizayn və çap ',
      description: "Sifarişi tamamlamaqdan əvvəl, səbətində tələb olunan bütün məhsulların olduğundan əmin olun: vizit kartları, bukletlər, broşurlar, afişalar və kataloqlar. Hər bir məhsulun sizin tələblərinizə və ehtiyaclarınıza cavab verdiyindən əmin olun.",
      openGraph: {
        title: 'Səbət. NurArt - professional dizayn və çap ',
        description: 'Sifarişi tamamlamaqdan əvvəl, səbətində tələb olunan bütün məhsulların olduğundan əmin olun: vizit kartları, bukletlər, broşurlar, afişalar və kataloqlar. Hər bir məhsulun sizin tələblərinizə və ehtiyaclarınıza cavab verdiyindən əmin olun.',
        url: 'https://nurart.az/az/sebet',
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
        canonical: '/az/sebet',
        languages: {
          'az-AZ': '/az/sebet',
          'ru-RU': '/ru/korzina',
        },
      }
    }
  };

  return metadata[params.locale ]; 
}



export default function Page() {
    return <CartPage />
}
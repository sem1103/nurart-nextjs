import CartPage from "./CartPage";


export function generateMetadata({ params }) {
  console.log(params);
  const metadata = {
    ru: {
      title: "Корзина - NurArt: Ваши товары",
      description: "Просмотрите и управляйте товарами, которые вы добавили в корзину. Убедитесь, что все нужные позиции добавлены перед оформлением заказа",
      openGraph: {
        title: 'Корзина - NurArt: Ваши товары',
        description: 'Просмотрите и управляйте товарами, которые вы добавили в корзину. Убедитесь, что все нужные позиции добавлены перед оформлением заказа',
        url: 'https://nurart.az/ru/korzina',
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
        canonical: '/ru/korzina',
        languages: {
          'az-AZ': '/az/sebet',
          'ru-RU': '/ru/korzina',
        },
      }
    },
    az: {
      title: 'Səbət - NurArt: Sizin məhsullarınız ',
      description: "Səbətə əlavə etdiyiniz məhsulları nəzərdən keçirin və idarə edin. Sifariş vermədən əvvəl bütün lazımi məhsulların əlavə edildiyinə əmin olun.",
      openGraph: {
        title: 'Səbət - NurArt: Sizin məhsullarınız ',
        description: 'Səbətə əlavə etdiyiniz məhsulları nəzərdən keçirin və idarə edin. Sifariş vermədən əvvəl bütün lazımi məhsulların əlavə edildiyinə əmin olun.',
        url: 'https://nurart.az/az/sebet',
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
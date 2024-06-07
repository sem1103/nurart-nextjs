import Favorites from "./Favorites";



export function generateMetadata({ params }) {
  const metadata = {
    ru: {
      title: "Избранные продукты - NurArt: Профессиональный дизайн и Печать",
      description: "Просмотрите и управляйте избранными товарами. Ваш выбор поможет вам легко найти товары, которые вам понравились, и сделать заказ.",
      openGraph: {
        title: 'Избранные продукты - NurArt: Профессиональный дизайн и Печать',
        description: 'Просмотрите и управляйте избранными товарами. Ваш выбор поможет вам легко найти товары, которые вам понравились, и сделать заказ.',
        url: 'https://nurart.az/ru/izbranniye-produkti',
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
        canonical: '/ru/izbranniye-produkti',
        languages: {
          'az-AZ': '/az/secilmish-mehsullar',
          'ru-RU': '/ru/izbranniye-produkti',
        },
      }
    },
    az: {
      title: 'Seçilmiş məhsullar - NurArt: Professional Dizayn və Çap ',
      description: "Seçilmiş məhsullara baxın və idarə edin. Sizin seçiminiz sizə sevdiyiniz məhsulları asanlıqla tapmağa və sifariş etməyə kömək edəcək.",
      openGraph: {
        title: 'Seçilmiş məhsullar - NurArt: Professional Dizayn və Çap',
        description: 'Seçilmiş məhsullara baxın və idarə edin. Sizin seçiminiz sizə sevdiyiniz məhsulları asanlıqla tapmağa və sifariş etməyə kömək edəcək.',
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
        canonical: '/az/secilmish-mehsullar',
        languages: {
          'az-AZ': '/az/secilmish-mehsullar',
          'ru-RU': '/ru/izbranniye-produkti',
        },
      }
    }
  };

  return metadata[params.locale ]; 
}


export default function Page() {
    return <Favorites />
}
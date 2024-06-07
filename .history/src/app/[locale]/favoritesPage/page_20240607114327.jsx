import Favorites from "./Favorites";



export function generateMetadata({ params }) {
  const metadata = {
    ru: {
      title: "Избранные товары - NurArt: Профессиональный дизайн и Печать",
      description: "Просмотрите и управляйте избранными товарами. Ваш выбор поможет вам легко найти товары, которые вам понравились, и сделать заказ.",
      openGraph: {
        title: 'Избранные товары - NurArt: Профессиональный дизайн и Печать',
        description: 'Просмотрите и управляйте избранными товарами. Ваш выбор поможет вам легко найти товары, которые вам понравились, и сделать заказ.',
        url: 'https://nurart.az/ru/ofsetnaya-pechat',
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
        canonical: '/ru/ofsetnaya-pechat',
        languages: {
          'az-AZ': '/az/ofset-cap',
          'ru-RU': '/ru/ofsetnaya-pechat',
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
        canonical: '/az/ofset-cap',
        languages: {
          'az-AZ': '/az/ofset-cap',
          'ru-RU': '/ru/ofsetnaya-pechat',
        },
      }
    }
  };

  return metadata[params.locale ]; 
}


export default function Page() {
    return <Favorites />
}
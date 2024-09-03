import Favorites from "./Favorites";



export function generateMetadata({ params }) {
  const metadata = {
    ru: {
      title: "Избранные продукты - NurArt: Профессиональный дизайн и Печать",
      description: "Просмотрите и управляйте вашими избранными товарами, включая визитные карты, буклеты, брошюры, афиши, каталоги, пластиковые карты, бейджи, значки, штампы и многое другое. Этот выбор поможет вам легко находить и заказывать товары, которые вам нравятся.",
      openGraph: {
        title: 'Избранные продукты - NurArt: Профессиональный дизайн и Печать',
        description: 'Просмотрите и управляйте вашими избранными товарами, включая визитные карты, буклеты, брошюры, афиши, каталоги, пластиковые карты, бейджи, значки, штампы и многое другое. Этот выбор поможет вам легко находить и заказывать товары, которые вам нравятся.',
        url: 'https://nurart.az/ru/izbranniye-produkti',
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
        canonical: '/ru/izbranniye-produkti',
        languages: {
          'az-AZ': '/az/secilmish-mehsullar',
          'ru-RU': '/ru/izbranniye-produkti',
        },
      }
    },
    az: {
      title: 'Seçilmiş məhsullar - NurArt: Professional Dizayn və Çap ',
      description: "Seçilmiş məhsullara baxın və idarə edin. Sizin seçiminiz sizə viza kartları, bukletlər, broşurlar, afişalar, kataloqlar, plastik kartlar, beyjiklər, nışanlar, ştamplar və digər məhsulları asanlıqla tapmağa və sifariş etməyə kömək edəcək.",
      openGraph: {
        title: 'Seçilmiş məhsullar - NurArt: Professional Dizayn və Çap',
        description: 'Seçilmiş məhsullara baxın və idarə edin. Sizin seçiminiz sizə viza kartları, bukletlər, broşurlar, afişalar, kataloqlar, plastik kartlar, beyjiklər, nışanlar, ştamplar və digər məhsulları asanlıqla tapmağa və sifariş etməyə kömək edəcək.',
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
import VinilProducts from "./VinilProducts";


export function generateMetadata({ params }) {
  const metadata = {
    ru: {
      title: "Виниловые продукты - NurArt: Профессиональный дизайн и Печать",
      description: "Просмотрите наш ассортимент виниловых продуктов на заказ, включая наклейки, наклейки для автомобилей, окон, баннеры и многое другое. Мы предлагаем высококачественные продукты по доступным ценам. Свяжитесь с нами для получения дополнительной информации!",
      openGraph: {
        title: 'Виниловые продукты - NurArt: Профессиональный дизайн и Печать',
        description: 'Просмотрите наш ассортимент виниловых продуктов на заказ, включая наклейки, наклейки для автомобилей, окон, баннеры и многое другое. Мы предлагаем высококачественные продукты по доступным ценам. Свяжитесь с нами для получения дополнительной информации!',
        url: 'https://nurart.az/ru/vinili',
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
        canonical: '/ru/vinili',
        languages: {
          'az-AZ': '/az/viniller',
          'ru-RU': '/ru/vinili',
        },
      }
    },
    az: {
      title: 'Vinil məhsulları - NurArt: Professional Dizayn və Çap ',
      description: "Mövcud sifarişə görə vinil məhsullarımızın təsnifatına baxın, bu da stikerlər, avtomobil stikerləri, pəncərə stikerləri, banerlər və s. daxil olmaqla. Biz keyfiyyətli məhsullar təklif edirik və münasib qiymətlərə satırıq. Əlavə məlumat üçün bizimlə əlaqə saxlayın!",
      openGraph: {
        title: 'Vinil məhsulları - NurArt: Professional Dizayn və Çap',
        description: 'Mövcud sifarişə görə vinil məhsullarımızın təsnifatına baxın, bu da stikerlər, avtomobil stikerləri, pəncərə stikerləri, banerlər və s. daxil olmaqla. Biz keyfiyyətli məhsullar təklif edirik və münasib qiymətlərə satırıq. Əlavə məlumat üçün bizimlə əlaqə saxlayın!',
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
        canonical: '/az/viniller',
        languages: {
          'az-AZ': '/az/viniller',
          'ru-RU': '/ru/vinili',
        },
      }
    }
  };

  return metadata[params.locale ]; 
}



export default function Page() {
    return <VinilProducts />
}
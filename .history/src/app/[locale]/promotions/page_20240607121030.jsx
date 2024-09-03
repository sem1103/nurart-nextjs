import Promotions from "./Promotions";



export function generateMetadata({ params }) {
  const metadata = {
    ru: {
      title: "Акции и кампании - NurArt: Профессиональный дизайн и Печать",
      description: "Посмотрите наши текущие акции и кампании, чтобы получить специальные предложения и скидки на печатные и дизайнерские услуги. Мы постоянно обновляем наши специальные предложения, чтобы вы могли получить максимальную выгоду. Свяжитесь с нами для получения дополнительной информации!",
      openGraph: {
        title: 'Акции и кампании - NurArt: Профессиональный дизайн и Печать',
        description: 'Посмотрите наши текущие акции и кампании, чтобы получить специальные предложения и скидки на печатные и дизайнерские услуги. Мы постоянно обновляем наши специальные предложения, чтобы вы могли получить максимальную выгоду. Свяжитесь с нами для получения дополнительной информации!',
        url: 'https://nurart.az/ru/kampanii',
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
        canonical: '/ru/kampanii',
        languages: {
          'az-AZ': '/az/kampaniyalar',
          'ru-RU': '/ru/kampanii',
        },
      }
    },
    az: {
      title: 'Aksiyalar və kampaniyalar - NurArt: Professional Dizayn və Çap ',
      description: "Mövcud Aksiyalar və kampaniyalarımızın təsnifatına baxın, bu da kartochka, batch, açar işarələri və s. daxil olmaqla. Biz keyfiyyətli məhsullar təklif edirik və münasib qiymətlərə satırıq. Əlavə məlumat üçün bizimlə əlaqə saxlayın!",
      openGraph: {
        title: 'Aksiyalar və kampaniyalar - NurArt: Professional Dizayn və Çap',
        description: 'Cari aksiyalarımızı və kampaniyalarımızı görüntüləyin, peçet və dizayn xidmətlərində xüsusi təkliflər və endirimlər əldə etmək üçün. Biz xüsusi təkliflərimizi daim yeniləyirik, beləliklə siz maksimum mənfəət əldə edə bilərsiniz. Əlavə məlumat üçün bizimlə əlaqə saxlayın!',
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
        canonical: '/az/kampaniyalar',
        languages: {
          'az-AZ': '/az/kampaniyalar',
          'ru-RU': '/ru/kampanii',
        },
      }
    }
  };

  return metadata[params.locale ]; 
}



export default function Page() {
    return <Promotions />
}
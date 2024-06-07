import Stamp from "./Stamp";


export function generateMetadata({ params }) {
  const metadata = {
    ru: {
      title: "Печати, штампы и краски для штемпелей - NurArt: Профессиональный дизайн и Печать",
      description: "Просмотрите наш ассортимент печатей, штампов и красок для штемпелей. Мы предлагаем высококачественные товары по доступным ценам. Свяжитесь с нами для получения дополнительной информации!",
      openGraph: {
        title: 'Печати, штампы и краски для штемпелей - NurArt: Профессиональный дизайн и Печать',
        description: 'Просмотрите наш ассортимент печатей, штампов и красок для штемпелей. Мы предлагаем высококачественные товары по доступным ценам. Свяжитесь с нами для получения дополнительной информации!',
        url: 'https://nurart.az/ru/pechati',
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
        canonical: '/ru/pechati',
        languages: {
          'az-AZ': '/az/mohurler',
          'ru-RU': '/ru/pechati',
        },
      }
    },
    az: {
      title: 'Möhür və möhür boyaları - NurArt: Professional Dizayn və Çap ',
      description: "Mövcud peçatlar, möhür və mühür boyalarının təsnifatına baxın. Biz keyfiyyətli məhsullar təklif edirik və münasib qiymətlərə satırıq. Əlavə məlumat üçün bizimlə əlaqə saxlayın!",
      openGraph: {
        title: 'Möhür və möhür boyaları - NurArt: Professional Dizayn və Çap',
        description: 'Mövcud peçatlar, möhür və mühür boyalarının təsnifatına baxın. Biz keyfiyyətli məhsullar təklif edirik və münasib qiymətlərə satırıq. Əlavə məlumat üçün bizimlə əlaqə saxlayın!',
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
        canonical: '/az/mohurler',
        languages: {
          'az-AZ': '/az/mohurler',
          'ru-RU': '/ru/pechati',
        },
      }
    }
  };

  return metadata[params.locale ]; 
}


export default function Page() {
    return <Stamp />
}
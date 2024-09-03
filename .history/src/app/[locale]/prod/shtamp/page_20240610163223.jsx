import Stamp from "./Stamp";


export function generateMetadata({ params }) {
  const metadata = {
    ru: {
      title: "Печати, штампы и краски для штемпелей - NurArt: Профессиональный дизайн и Печать",
      description: "Уникальные печати, штемпели и краски для штемпелей - ваше идеальное решение для персонализации документов и подчеркивания профессионализма. Разнообразие дизайнов и оттенков позволят вам выразить свою индивидуальность в каждом оттиске. Погрузитесь в мир творчества и возможностей с нашими продуктами уже сегодня!",
      openGraph: {
        title: 'Печати, штампы и краски для штемпелей - NurArt: Профессиональный дизайн и Печать',
        description: 'Уникальные печати, штемпели и краски для штемпелей - ваше идеальное решение для персонализации документов и подчеркивания профессионализма. Разнообразие дизайнов и оттенков позволят вам выразить свою индивидуальность в каждом оттиске. Погрузитесь в мир творчества и возможностей с нашими продуктами уже сегодня!',
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
      description: "Unikal möhürlər, ştamplar və ştamp boyaları sənədləri fərdiləşdirmək və peşəkarlığı vurğulamaq üçün ideal həllinizdir. Dizayn və çalarların müxtəlifliyi hər təəssüratda şəxsiyyətinizi ifadə etməyə imkan verəcəkdir. Bu gün məhsullarımızla yaradıcılıq və fürsət dünyasına qərq olun!",
      openGraph: {
        title: 'Möhür və möhür boyaları - NurArt: Professional Dizayn və Çap',
        description: 'Unikal möhürlər, ştamplar və ştamp boyaları sənədləri fərdiləşdirmək və peşəkarlığı vurğulamaq üçün ideal həllinizdir. Dizayn və çalarların müxtəlifliyi hər təəssüratda şəxsiyyətinizi ifadə etməyə imkan verəcəkdir. Bu gün məhsullarımızla yaradıcılıq və fürsət dünyasına qərq olun!',
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
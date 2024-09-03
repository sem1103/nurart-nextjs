import VinilProducts from "./VinilProducts";


export function generateMetadata({ params }) {
  const metadata = {
    ru: {
      title: "Виниловые продукты. NurArt - Профессиональный дизайн и Печать",
      description: "Исследуйте наш широкий ассортимент виниловых продуктов, включая наклейки для стен, наклейки ноутбуков, наклейки бутылок, наклейки автомобилей, наклейки окон и многое другое! Наши креативные дизайны и высококачественные материалы помогут вам добавить уникальный штрих к вашему пространству или предметам уже сегодня.",
      openGraph: {
        title: 'Виниловые продукты. NurArt - Профессиональный дизайн и Печать',
        description: 'Исследуйте наш широкий ассортимент виниловых продуктов, включая наклейки для стен, наклейки ноутбуков, наклейки бутылок, наклейки автомобилей, наклейки окон и многое другое! Наши креативные дизайны и высококачественные материалы помогут вам добавить уникальный штрих к вашему пространству или предметам уже сегодня.',
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
      title: 'Vinil məhsulları: Divar stikerləri, noutbuk vinilleri, şüşə vinilleri, avtomobil vinilleri, pəncərə vinilleri və s. NurArt - Professional Dizayn və Çap',
      description: "Divar stikerləri, noutbuk vinilleri, şüşə vinilleri, avtomobil vinilleri, pəncərə vinilleri və s. daxil olmaqla geniş çeşidli vinil məhsullarımızı araşdırın! Yaradıcı dizaynlarımız və yüksək keyfiyyətli materiallarımız bu gün məkanınıza və ya əşyalarınıza unikal toxunuş əlavə etməyə kömək edəcək.",
      openGraph: {
        title: 'Vinil məhsulları: Divar stikerləri, noutbuk vinilleri, şüşə vinilleri, avtomobil vinilleri, pəncərə vinilleri və s. NurArt - Professional Dizayn və Çap',
        description: 'Divar stikerləri, noutbuk vinilleri, şüşə vinilleri, avtomobil vinilleri, pəncərə vinilleri və s. daxil olmaqla geniş çeşidli vinil məhsullarımızı araşdırın! Yaradıcı dizaynlarımız və yüksək keyfiyyətli materiallarımız bu gün məkanınıza və ya əşyalarınıza unikal toxunuş əlavə etməyə kömək edəcək.',
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
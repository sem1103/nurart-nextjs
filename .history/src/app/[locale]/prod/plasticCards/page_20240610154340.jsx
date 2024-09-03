import PlasticCards from "./PlasticCards";



export function generateMetadata({ params }) {
  const metadata = {
    ru: {
      title: "Пластиковые карты и другие товары. NurArt - Профессиональный дизайн и Печать",
      description: "Откройте для своего бизнеса новые возможности с нашими пластиковыми картами: программы лояльности, идентификационные карты, абонементы, скидочные карты, карты доступа, карты членства и многое другое. Высокое качество, разнообразие дизайнов и возможности персонализации доступны. Создайте уникальный образ бренда с нами! Свяжитесь с нами для получения дополнительной информации.",
      openGraph: {
        title: "Пластиковые карты и другие товары. NurArt - Профессиональный дизайн и Печать",
        description: 'Откройте для своего бизнеса новые возможности с нашими пластиковыми картами: программы лояльности, идентификационные карты, абонементы, скидочные карты, карты доступа, карты членства и многое другое. Высокое качество, разнообразие дизайнов и возможности персонализации доступны. Создайте уникальный образ бренда с нами! Свяжитесь с нами для получения дополнительной информации.',
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
        canonical: '/ru/plastikovie-karti',
        languages: {
          'az-AZ': '/az/plastik-kartlar',
          'ru-RU': '/ru/plastikovie-karti',
        },
      }
    },
    az: {
      title: 'Plastik kartlar və digər məhsullar. NurArt - Professional Dizayn və Çap',
      description: "Bizim plastik kartlarımızla işiniz üçün yeni imkanlara baxın: loyallıq proqramları, identifikasiya kartları, abonement kartları, endirim kartları, giriş kartları, üzvlük kartları və daha çoxu. Yüksək keyfiyyət, dizaynın müxtəlifliyi və şəxsiyyətləşdirmə imkanları mövcuddur. Bizimlə brendinizə unikal bir şəkil verin! Əlavə məlumat almaq üçün bizimlə əlaqə saxlayın.",
      openGraph: {
        title: 'Plastik kartlar və digər məhsullar. NurArt - Professional Dizayn və Çap',
        description: 'Bizim plastik kartlarımızla işiniz üçün yeni imkanlara baxın: loyallıq proqramları, identifikasiya kartları, abonement kartları, endirim kartları, giriş kartları, üzvlük kartları və daha çoxu. Yüksək keyfiyyət, dizaynın müxtəlifliyi və şəxsiyyətləşdirmə imkanları mövcuddur. Bizimlə brendinizə unikal bir şəkil verin! Əlavə məlumat almaq üçün bizimlə əlaqə saxlayın.',
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
        canonical: '/az/plastik-kartlar',
        languages: {
          'az-AZ': '/az/plastik-kartlar',
          'ru-RU': '/ru/plastikovie-karti',
        },
      }
    }
  };

  return metadata[params.locale ]; 
}


export default function Page() {
    return <PlasticCards />
}
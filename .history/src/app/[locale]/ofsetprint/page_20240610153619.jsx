import OfsetPrint from "./OfsetPrint";


export function generateMetadata({ params }) {
    const metadata = {
      ru: {
        title: "Офсетная печать. NurArt - Профессиональный дизайн и Печать",
        description: "Ознакомьтесь с нашими услугами офсетной печати, включая печать буклетов, брошюр, каталогов, журналов, листовок, афиш, открыток и многое другое. Мы гарантируем высокое качество и быстрое выполнение заказов. Свяжитесь с нами для получения дополнительной информации!",
        openGraph: {
          title: 'Офсетная печать. NurArt - Профессиональный дизайн и Печать',
          description: 'Ознакомьтесь с нашими услугами офсетной печати, включая печать буклетов, брошюр, каталогов, журналов, листовок, афиш, открыток и многое другое. Мы гарантируем высокое качество и быстрое выполнение заказов. Свяжитесь с нами для получения дополнительной информации!',
          url: 'https://nurart.az/ru/ofsetnaya-pechat',
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
          canonical: '/ru/ofsetnaya-pechat',
          languages: {
            'az-AZ': '/az/ofset-cap',
            'ru-RU': '/ru/ofsetnaya-pechat',
          },
        }
      },
      az: {
        title: 'Ofset Çap. NurArt - Professional Dizayn və Çap ',
        description: "Tanış olun bizim ofset çap xidmətlərimizlə. Bukletlər, broşur, kataloq, elanlar, afişalar və digər məhsullarımız ilə sürətli və keyfiyyətli sifarişləri təmin edirik. İstədiyiniz hər hansısa material üçün bizimlə əlaqə saxlayın və ətraflı məlumat alın!",
        openGraph: {
          title: 'Ofset Çap. NurArt - Professional Dizayn və Çap ',
          description: 'Tanış olun bizim ofset çap xidmətlərimizlə. Bukletlər, broşur, kataloq, elanlar, afişalar və digər məhsullarımız ilə sürətli və keyfiyyətli sifarişləri təmin edirik. İstədiyiniz hər hansısa material üçün bizimlə əlaqə saxlayın və ətraflı məlumat alın!',
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

export default function Page(){
   return <OfsetPrint />
}
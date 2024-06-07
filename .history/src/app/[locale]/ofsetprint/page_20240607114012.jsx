import OfsetPrint from "./OfsetPrint";


export function generateMetadata({ params }) {
    console.log(params);
    const metadata = {
      ru: {
        title: "Офсетная печать - NurArt: Профессиональный дизайн и Печать",
        description: "Ознакомьтесь с нашими услугами офсетной печати, включая печать буклетов, брошюр, каталогов и многое другое. Мы гарантируем высокое качество и быстрое выполнение заказов. Свяжитесь с нами для получения дополнительной информации!",
        openGraph: {
          title: 'Офсетная печать - NurArt: Профессиональный дизайн и Печать',
          description: 'Ознакомьтесь с нашими услугами офсетной печати, включая печать буклетов, брошюр, каталогов и многое другое. Мы гарантируем высокое качество и быстрое выполнение заказов. Свяжитесь с нами для получения дополнительной информации!',
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
        title: 'Ofset Çap - NurArt: Professional Dizayn və Çap ',
        description: "Bukletlər, broşur və kataloqlar da daxil olmaqla ofset çap xidmətimizlə tanış olun. Biz keyfiyyətli və sürətli sifarişləri təmin edirik. Ətraflı məlumat üçün bizimlə əlaqə saxlayın!",
        openGraph: {
          title: 'Ofset Çap - NurArt: Professional Dizayn və Çap',
          description: 'Bukletlər, broşur və kataloqlar da daxil olmaqla ofset çap xidmətimizlə tanış olun. Biz keyfiyyətli və sürətli sifarişləri təmin edirik. Ətraflı məlumat üçün bizimlə əlaqə saxlayın!',
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

export default function Page(){
   return <OfsetPrint />
}
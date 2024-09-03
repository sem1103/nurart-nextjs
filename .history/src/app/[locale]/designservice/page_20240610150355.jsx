import DesignService from "./DesignService";


export function generateMetadata({ params }) {
    console.log(params);
    const metadata = {
      ru: {
        title: "Услуги дизайна - NurArt: Профессиональный дизайн и Печать",
        description: "Познакомьтесь с нашими услугами дизайна: разработка логотипов, брендбуков, визиток, буклетов и многое другое. Наши дизайнеры воплотят ваши идеи в жизнь. Свяжитесь с нами для получения дополнительной информации!",
        openGraph: {
          title: 'Услуги дизайна - NurArt: Профессиональный дизайн и Печать',
          description: 'Познакомьтесь с нашими услугами дизайна: разработка логотипов, брендбуков, визиток, буклетов и многое другое. Наши дизайнеры воплотят ваши идеи в жизнь. Свяжитесь с нами для получения дополнительной информации!',
          url: 'https://nurart.az/ru/usluqi-dizayna',
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
          canonical: '/ru/usluqi-dizayna',
          languages: {
            'az-AZ': '/az/dizayn-xidmetleri',
            'ru-RU': '/ru/usluqi-dizayna',
          },
        }
      },
      az: {
        title: 'Dizayn Xidmətləri - NurArt: Professional Dizayn və Çap ',
        description: "Xidmətlərimizə logo, brendkitab, vizit kartları, bukletlər və daha çoxunun dizaynı daxildir. Dizaynerlərimiz sizin fikirlərinizi həyata keçirməyə kömək edəcəklər. Ətraflı məlumat üçün bizimlə əlaqə saxlayın!",
        openGraph: {
          title: 'Dizayn Xidmətləri - NurArt: Professional Dizayn və Çap',
          description: 'Xidmətlərimizə logo, brendkitab, vizit kartları, bukletlər və daha çoxunun dizaynı daxildir. Dizaynerlərimiz sizin fikirlərinizi həyata keçirməyə kömək edəcəklər. Ətraflı məlumat üçün bizimlə əlaqə saxlayın!',
          url: 'https://nurart.az/az/dizayn-xidmetleri',
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
          canonical: '/az/dizayn-xidmetleri',
          languages: {
            'az-AZ': '/az/dizayn-xidmetleri',
            'ru-RU': '/ru/usluqi-dizayna',
          },
        }
      }
    };
  
    return metadata[params.locale ]; 
  }

export default function Page(){
   return <DesignService />
}
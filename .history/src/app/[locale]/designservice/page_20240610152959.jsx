import DesignService from "./DesignService";


export function generateMetadata({ params }) {
    console.log(params);
    const metadata = {
      ru: {
        title: 'Услуги дизайна. NurArt - Профессиональный дизайн и Печать',
        description: "Познакомьтесь с нашим широким спектром дизайн-услуг: разработка логотипов, создание брендбуков, дизайн визиток, изготовление буклетов, брошюр, афиш, каталогов и многое другое. Наши талантливые дизайнеры помогут воплотить ваши идеи в жизнь. Свяжитесь с нами для получения дополнительной информации!",
        openGraph: {
          title: 'Услуги дизайна. NurArt - Профессиональный дизайн и Печать',
          description: 'Познакомьтесь с нашим широким спектром дизайн-услуг: разработка логотипов, создание брендбуков, дизайн визиток, изготовление буклетов, брошюр, афиш, каталогов и многое другое. Наши талантливые дизайнеры помогут воплотить ваши идеи в жизнь. Свяжитесь с нами для получения дополнительной информации!',
          url: 'https://nurart.az/ru/usluqi-dizayna',
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
          canonical: '/ru/usluqi-dizayna',
          languages: {
            'az-AZ': '/az/dizayn-xidmetleri',
            'ru-RU': '/ru/usluqi-dizayna',
          },
        }
      },
      az: {
        title: 'Dizayn Xidmətləri. NurArt - Professional Dizayn və Çap ',
        description: "Bizim dizayn xidmətlərimizlə tanış olun: loqotip, brend kitabı, vizit kartı, buklet, broşür, afişa, kataloq, və digər reklam materialları. Bizim dizaynerlərimiz sizin fikirlərinizi həyata keçirəcəklər. Əlavə məlumat üçün bizimlə əlaqə saxlayın!",
        openGraph: {
          title: 'Dizayn Xidmətləri. NurArt - Professional Dizayn və Çap',
          description: 'Bizim dizayn xidmətlərimizlə tanış olun: loqotip, brend kitabı, vizit kartı, buklet, broşür, afişa, kataloq, və digər reklam materialları. Bizim dizaynerlərimiz sizin fikirlərinizi həyata keçirəcəklər. Əlavə məlumat üçün bizimlə əlaqə saxlayın!',
          url: 'https://nurart.az/az/dizayn-xidmetleri',
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
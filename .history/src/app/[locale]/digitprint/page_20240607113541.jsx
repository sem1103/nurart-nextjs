import DigitPrint from "./DigitPrint";


export function generateMetadata({ params }) {
    console.log(params);
    const metadata = {
      ru: {
        title: "Цифровая печать - NurArt: Профессиональный дизайн и Печать",
        description: "Ознакомьтесь с нашими услугами цифровой печати, включая печать визиток, буклетов, брошюр и многого другого. Мы гарантируем качественную и быструю печать по доступным ценам. Свяжитесь с нами для получения дополнительной информации!",
        openGraph: {
          title: 'Цифровая печать - NurArt: Профессиональный дизайн и Печать',
          description: 'Ознакомьтесь с нашими услугами цифровой печати, включая печать визиток, буклетов, брошюр и многого другого. Мы гарантируем качественную и быструю печать по доступным ценам. Свяжитесь с нами для получения дополнительной информации!',
          url: 'https://nurart.az/ru/cifrovaya-pechat',
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
          canonical: '/ru/cifrovaya-pechat',
          languages: {
            'az-AZ': '/az/reqemsal-cap',
            'ru-RU': '/ru/cifrovaya-pechat',
          },
        }
      },
      az: {
        title: 'Rəqəmsal Çap - NurArt: Professional Dizayn və Çap ',
        description: "Bizim rəqəmsal çap xidmətimizlə tanış olun, biz viza kartlarının, bukletlərin, broşurların və s. çapı da daxil olmaqla çeşidləri çap üçün keyfiyyətli və tez çapın təminatını veririk. Əlavə məlumat üçün bizimlə əlaqə saxlayın!",
        openGraph: {
          title: 'Rəqəmsal Çap - NurArt: Professional Dizayn və Çap',
          description: 'Bizim rəqəmsal çap xidmətimizlə tanış olun, biz viza kartlarının, bukletlərin, broşurların və s. çapı da daxil olmaqla çeşidləri çap üçün keyfiyyətli və tez çapın təminatını veririk. Əlavə məlumat üçün bizimlə əlaqə saxlayın!',
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
          canonical: '/az/reqemsal-cap',
          languages: {
            'az-AZ': '/az/reqemsal-cap',
            'ru-RU': '/ru/cifrovaya-pechat',
          },
        }
      }
    };
  
    return metadata[params.locale ]; 
  }

export default function Page(){
   return <DigitPrint />
}
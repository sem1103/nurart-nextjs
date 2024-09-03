import DigitPrint from "./DigitPrint";


export function generateMetadata({ params }) {
    console.log(params);
    const metadata = {
      ru: {
        title: "Цифровая печать - NurArt: Профессиональный дизайн и Печать",
        description: "Ознакомьтесь с нашими услугами цифровой печати, включая изготовление визиток, буклетов, брошюр и многого другого. Мы гарантируем высокое качество и быстрые сроки выполнения по доступным ценам. Свяжитесь с нами, чтобы узнать больше!",
        openGraph: {
          title: 'Цифровая печать - NurArt: Профессиональный дизайн и Печать',
          description: 'Ознакомьтесь с нашими услугами цифровой печати, включая изготовление визиток, буклетов, брошюр и многого другого. Мы гарантируем высокое качество и быстрые сроки выполнения по доступным ценам. Свяжитесь с нами, чтобы узнать больше!',
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
        description: "Tanış olun bizim rəqəmsal çap xidmətimizlə. Viza kartlarının, bukletlərin, broşurların və daha bir çoxunun keyfiyyətli və tez çapını təmin edirik. Əlavə məlumat üçün bizimlə əlaqə saxlayın!",
        openGraph: {
          title: 'Rəqəmsal Çap - NurArt: Professional Dizayn və Çap',
          description: 'Tanış olun bizim rəqəmsal çap xidmətimizlə. Viza kartlarının, bukletlərin, broşurların və daha bir çoxunun keyfiyyətli və tez çapını təmin edirik. Əlavə məlumat üçün bizimlə əlaqə saxlayın!',
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
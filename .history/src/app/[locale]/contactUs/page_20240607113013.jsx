import { ContactUs } from "./ContactUs";


export function generateMetadata({ params }) {
  console.log(params);
  const metadata = {
    ru: {
      title: "Свяжитесь с нами - NurArt: Контактная информация",
      description: "Свяжитесь с нами для получения дополнительной информации о наших услугах или для размещения заказа. Мы всегда готовы помочь вам!",
      openGraph: {
        title: 'Свяжитесь с нами - NurArt: Контактная информация',
        description: 'Свяжитесь с нами для получения дополнительной информации о наших услугах или для размещения заказа. Мы всегда готовы помочь вам!',
        url: 'https://nurart.az/ru/svyazatsya-s-nami',
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
        canonical: '/ru/svyazatsya-s-nami',
        languages: {
          'az-AZ': '/az/bizimle-elaqe',
          'ru-RU': '/ru/svyazatsya-s-nami',
        },
      }
    },
    az: {
      title: 'Bizimlə Əlaqə - NurArt: Əlaqə Məlumatları ',
      description: "Bizimlə əlaqə saxlayın və xidmətlərimiz haqqında ətraflı məlumat alın və ya sifariş verin. Biz hər zaman sizə kömək etməyə hazırıq!",
      openGraph: {
        title: 'Bizimlə Əlaqə - NurArt: Əlaqə Məlumatları ',
        description: 'Bizimlə əlaqə saxlayın və xidmətlərimiz haqqında ətraflı məlumat alın və ya sifariş verin. Biz hər zaman sizə kömək etməyə hazırıq!',
        url: 'https://nurart.az/az/bizimle-elaqe',
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
        canonical: '/az/bizimle-elaqe',
        languages: {
          'az-AZ': '/az/bizimle-elaqe',
          'ru-RU': '/ru/svyazatsya-s-nami',
        },
      }
    }
  };

  return metadata[params.locale ]; 
}



export default function Page() {
    return <ContactUs />
}
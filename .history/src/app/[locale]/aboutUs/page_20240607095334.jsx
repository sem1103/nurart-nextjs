import About from "./About";


export function generateMetadata({ params }) {
  console.log(params);
  const metadata = {
    ru: {
      title: "О нас - NurArt-полиграфия: Профессиональный дизайн и печать",
      description: "Узнайте больше о NurArt-полиграфии. Мы предлагаем высококачественные печатные услуги для вашего бизнеса, включая визитки, буклеты, брошюры, плакаты и каталоги. Наши эксперты обеспечат профессиональный дизайн и печать. Свяжитесь с нами сегодня!"
    },
    az: {
      title: 'Haqqımızda-NurArt-çap: professional dizayn və çap ',
      description: "NurArt çapı haqqında daha çox oxuyun. Vizit kartları, bukletlər, broşuralar, afişalar və kataloqlar daxil olmaqla işiniz üçün yüksək keyfiyyətli çap xidmətləri təklif edirik. Mütəxəssislərimiz peşəkar dizayn və çap təmin edəcəklər. Bu gün Bizimlə əlaqə saxlayın!"
    },
    // Добавьте другие языки по необходимости
  };

  return metadata[params.locale ]; // По умолчанию возвращает метаданные на английском, если язык не найден
}


export default function Page() {
    return <About />
}
import About from "./About";


export function generateMetadata({ params }) {
  console.log(params);
  const metadata = {
    ru: {
      title: "О нас - NurArt-полиграфия: Профессиональный дизайн и печать",
      description: "Узнайте больше о NurArt-полиграфии. Мы предлагаем высококачественные печатные услуги для вашего бизнеса, включая визитки, буклеты, брошюры, плакаты и каталоги. Наши эксперты обеспечат профессиональный дизайн и печать. Свяжитесь с нами сегодня!"
    },
    az: {
      title: params.language,
      description: "Learn more about NurArt Printing. We offer high-quality printing services for your business, including business cards, brochures, booklets, posters, and catalogs. Our experts ensure professional design and printing. Contact us today!"
    },
    // Добавьте другие языки по необходимости
  };

  return metadata['az' ]; // По умолчанию возвращает метаданные на английском, если язык не найден
}

// export const metadata = {
   
//   };



export default function Page() {
    return <About />
}
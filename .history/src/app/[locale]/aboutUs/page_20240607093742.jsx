import About from "./About";
import { Metadata } from 'next'

export function Metadata () {
   return {
    title: "О нас - NurArt-полиграфия: Профессиональный дизайн и печать ",
    description: "Узнайте больше о NurArt-полиграфии. Мы предлагаем высококачественные печатные услуги для вашего бизнеса, включая визитки, буклеты, брошюры, плакаты и каталоги. Наши эксперты обеспечат профессиональный дизайн и печать. Свяжитесь с нами сегодня!"
   }
  };



export default function Page() {
    return <About />
}
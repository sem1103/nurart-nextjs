
'use client'
import ServicesPage from "@/components/ServicesPage/ServicesPage"
import img from './../../../../public/assets/img/servicesPage/print.png'
import { useTranslations } from "next-intl"


export default function DigitPrint(){

    const t = useTranslations('digitPrintPage');

    console.log();

    let content = {
        title: 'Rəqəmsal çap',
        text1: '"NurArt" tipografiyası rəqəmsal çap etmə xidmətləri təklif edir. Müasir  avadanlıqlar, səmərəli peşəkarlıq və əməkdaşlarımızın geniş təcrübəsi, hər hansı, hətta ən çətin tapşırıqları uğurla həll etməyimizi təmin edir.',
        title2: 'Əsas xüsusiyyətlər',
        text2:'Rəqəmsal çap - iş və reklam poliqrafiya məhsullarının hazırlanmasına ideal olan müasir bir texnologiyadır. Ən vacib xüsusiyyəti - operativlikdir. Adətən kiçik və orta tirajlı məhsulların hazırlanmasında istifadə olunur. Bu zaman layiqli keyfiyyət təmin edilir.\n\n Bir başqa üstünlük - istənilən dizayn kağızında çap etmə imkanıdır. Ofset texnologiyasından istifadə zamanı materiala sıxı tələblər tətbiq olunur, kiçikliyə, teksturaya və örtüyə aid. Rəqəmsal texnologiyada belə məhdudiyyətlər daha azdır.',
        icons: false,
        img: img.src,
        otherContent: {
            title1: t('otherContent.title1'),
            text1: t('otherContent.text1')
        }
    }

    return(
        <>
            <ServicesPage content={content} />
        </>
    )
}
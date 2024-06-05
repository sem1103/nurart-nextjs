
'use client'
import ServicesPage from "@/components/ServicesPage/ServicesPage"
import img from './../../../../public/assets/img/servicesPage/print.png'
import { useTranslations } from "next-intl"


export default function DigitPrint(){

    const t = useTranslations('digitPrintPage');

    console.log();

    let content = {
        title: t('mainTitle'),
        text1: t('text1'),
        title2: t('title2'),
        text2:t('text2'),
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
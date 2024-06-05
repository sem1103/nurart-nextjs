'use client'
import ServicesPage from "@/components/ServicesPage/ServicesPage"
import img from './../../../../public/assets/img/servicesPage/offsetPrint.png'
import { useTranslations } from "next-intl"

export default function OfsetPrint(){
    const t = useTranslations('ofsetPrintPage')
    let content = {
        title: t('mainTitle'),
        text1: t('text1'),
        title2: t('title2'),
        list1:[
            t('text1'),
            t('text2'),
            t('text3'),
            t('text4')
        ],
        icons: false,
        img: img.src,
        otherContent: {
            text1 : t('otherContent.text1')
        }
    }

    return(
        <>
            <ServicesPage content={content} />
        </>
    )
}
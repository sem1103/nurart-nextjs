
'use client'
import ServicesPage from "@/components/ServicesPage/ServicesPage";
import img from './../../../../public/assets/img/servicesPage/design.png'
import { useTranslations } from "next-intl";


export default function DesignService(){
    const t = useTranslations('designPage');
    console.log(t('logo1'));
    let content = {
        title: t('mainTitle'),
        text1: t('text1'),
        icons: true,
        logo1 : t('logo1'),
        logo2 : t('logo2'),
        logo3 : t('logo3'),
        logo4 : t('logo4'),
        img: img.src,
        otherContent: {
            text1: t('otherContent.text1')
        }
    }

    return(
        <>
            <ServicesPage content={content} />
        </>
    )
}
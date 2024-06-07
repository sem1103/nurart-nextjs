'use client'
import { useEffect } from "react";
import s from './Promotions.module.css'
import Contact from "@/components/Contact/Contact";
import useDataSlice from "../../../../store/dataSlice";
import Loader from "@/components/Loader/Loader";
import { useLocale, useTranslations } from "next-intl";


export default function Promotions(){
    const lang = useLocale()
    const t = useTranslations();
    const {promotionItems, fetchPromotionItems } = useDataSlice();

    useEffect(() => {
        !promotionItems.length && fetchPromotionItems();
    }, [])

    return (
        <>
            <div className={`container ${s.container}`}>
                <h1>{t('promotions')}</h1>

                <div className={s.promotions__wrapper}>
                    {
                        promotionItems.length ?
                        promotionItems.map(item => {
                            return <div className={s.promotion__item}>
                                        <img src={lang == 'az' ? item.promotionAz.replace('localhost', 'localhost') : item.promotionRu.replace('localhost', 'localhost')} alt="" />
                                    </div>
                        })
                        :
                        <Loader />
                    }

                    
                </div>
            </div>

            <Contact />
        </>
    )
}
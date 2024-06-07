import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import s from './Promotions.module.css'
import { useTranslation } from "react-i18next";
import Contact from "../Contact/Contact";
import useDataSlice from "../../store/dataSlice";
import i18next from "i18next";
import Loader from "../Loader/Loader";


export default function Promotions(){

    const {t} = useTranslation();
    const {promotionItems, fetchPromotionItems } = useDataSlice();

    useEffect(() => {
        !promotionItems.length && fetchPromotionItems();
    }, [])

    return (
        <>
             <Helmet>
                <title>Poliqrafiya işləri,Poliqrafiya isleri,cap xidmetleri </title>
                <meta name="description" content="NurArt  Azərbaycanın ən böyük Poliqrafiya şirkətləri arasındadı və Bütün növ çap və dizayn xidmətlərini təklif etməkdədir. " />
                <meta name="keywords" content="Təqvimlər,Teqvim,Kalendar,çap,print" />
            </Helmet>

            <div className={`container ${s.container}`}>
                <h1>{t('promotions')}</h1>

                <div className={s.promotions__wrapper}>
                    {
                        promotionItems.length ?
                        promotionItems.map(item => {
                            return <div className={s.promotion__item}>
                                        <img src={i18next.language == 'az' ? item.promotionAz.replace('localhost', 'localhost') : item.promotionRu.replace('localhost', 'localhost')} alt="" />
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
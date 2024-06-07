'use client'

import s from './HomeSlider.module.css'
import i18next from 'i18next';
import { useTranslation, useLocale } from 'react-i18next';
import Image from 'next/image';


function HomeSlide(props){

    const t = useTranslation()
   const lang = useLocale();

    return(
      
        <div className={s.slider__item}>
                <div>
                    <Image src={lang == 'az' ?  props.url.slideAz : props.url.slideRu}  width={1140} height={700} alt="" />
                </div>
        </div>
   
    )
}

export default HomeSlide;
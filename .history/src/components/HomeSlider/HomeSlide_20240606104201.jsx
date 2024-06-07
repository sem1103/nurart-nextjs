'use client'

import { useLocale, useTranslations } from 'next-intl';
import s from './HomeSlider.module.css'

import Image from 'next/image';


function HomeSlide(props){

    const t = useTranslations()
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
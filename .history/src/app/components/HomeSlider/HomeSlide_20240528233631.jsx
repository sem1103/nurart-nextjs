

import s from './HomeSlider.module.css'
import React from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';


function HomeSlide(props){
   const {t} = useTranslation();

    return(
      
        <div className={s.slider__item}>
                <div>
                    <img src={i18next.language == 'az' ? props.url.slideAz : props.url.sliderRu}  alt="" />
                </div>
        </div>
   
    )
}

export default HomeSlide;
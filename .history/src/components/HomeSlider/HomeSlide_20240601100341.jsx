

import s from './HomeSlider.module.css'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';


function HomeSlide(props){
   const {t} = useTranslation();

    return(
      
        <div className={s.slider__item}>
                <div>
                    <Image src={i18next.language == 'az' ?  props.url.slideAz : props.url.slideRu}  width={1140} height={700} alt="" />
                </div>
        </div>
   
    )
}

export default HomeSlide;
'use client'
import useDataSlice from "/store/dataSlice";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CartSlider from "@/components/CartSlider/CartSlider";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import Counter from "@/components/Counter/Counter";
import HomeFeatures from "@/components/HomeFeatures/HomeFeatures";
import s from './page.module.css'
import FeedbackSlider from "@/components/Feedback/FeedbackSlider";
import {useTranslations} from 'next-intl';
import m from '../../../public/assets/img/qualityIcon-svg.png'


export default function Home() {
  const {setOnloadImg, imagesLoaded, campaignSlides , fetchCampaignSlides } = useDataSlice();
  const t = useTranslations();

  useEffect(() =>{
                
    if(!campaignSlides.length){
        fetchCampaignSlides();
        setOnloadImg(true);
    } else setOnloadImg(true)

    return () =>   {
        setOnloadImg(false);
    };
},[])

let [counters, inView] = useInView({
  threshold: 0.4,
  triggerOnce: true
});

  
  let features = [
    {
        text: t('homeIcon1'),
        url: m
    },
    {
        text: t('homeIcon2'),
        url: 'http://localhost/wp-content/uploads/2024/05/designIcon-svg.png'
    },
    {
        text: t('homeIcon3'),
        url: 'http://localhost/wp-content/uploads/2024/05/technologiesIcon-svg.png'
    }
];

const servicesSlider = [
    {
        url: 'http://localhost/wp-content/uploads/2024/05/service1.png',
        title: t('navPolygrafy'),
        btnLink: 'prod/polygraphy'
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/service2.png',
        title: t('navCart'),
        btnLink: 'prod/plastic-cards'
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/service3.png',
        title: t('navPromo'),
        btnLink: 'prod/promo-products'
    }
    ,
    {
        url: 'http://localhost/wp-content/uploads/2024/05/service4.png',
        title: t('navStamb'),
        btnLink: 'prod/stamp'
    }
    ,
    {
        url: 'http://localhost/wp-content/uploads/2024/05/service5.png',
        title: t('navVinil'),
        btnLink: 'prod/vinil-products'
    }
    ,
    {
        url: 'http://localhost/wp-content/uploads/2024/05/service6.png',
        title: t('navLazer'),
        btnLink: '/'
    }

];

const clientSlider = [
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide1-1.png' 
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide2-1.png' 
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide3-1.png' 
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide4.png' 
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide5.png' 
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide6.png' 
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide7.png' 
    },
];

const portfolioSlider = [
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide1-3.png'
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide2-3.png'
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide3-2.png'
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide4-1.png'
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide5-1.png'
    }
];




const feedbacks = [
    {
        url: 'http://localhost/wp-content/uploads/2024/05/person2.png',
        name: 'Mira Peterson',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, exercitation ullamco laboris nisi ut ',
        raiting: 4
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/person1.png',
        name: 'Diego Curumim',
        text: 'Lorem ipsum dolor asdad sit amet, consectetur adipisicing psum dolor asdad psum dolor asdad psum dolor asdad  ',
        raiting: 5
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/person2.png',
        name: 'John Dou',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ',
        raiting: 2
    }
    ,
    {
        url: 'http://localhost/wp-content/uploads/2024/05/person1.png',
        name: 'Polik',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ',
        raiting: 4
    }
];


  return (
    <>
       <HomeSlider urls={campaignSlides}  />
            <section className={`${s.features} mini__container`}>
                {
                    features.map(item => <HomeFeatures text={item.text} url={item.url} />)
                }
            </section>

            <section className={`${s.title} mini__container`}>
                <h2>{t('homeTitle1')}</h2>
                <p dangerouslySetInnerHTML={{__html: t('homeDesc1')}} />
            </section>

              <CartSlider sliders={servicesSlider} rows='2' arrows={false} classList='services-slider' slideShow='3' centerPadding='70' centerMode={true} inf={false}  />

            {
                imagesLoaded && 
                <section className={s.about} ref={counters}>
                <h2 className={inView && s.show}>{t('about')}</h2>
                <div className={s.about__container}>
                    <p className={inView && s.show}  dangerouslySetInnerHTML={{__html: t('aboutText')}}/>

                    <div className={s.counts} >
                        <div className={inView && s.show}>
                            <p className={s.count} >
                                {inView ? <Counter numb='56' symbol='+' /> : 0}
                            </p>
                            <p>{t('counter1')}</p>
                        </div>
                        <div className={inView && s.show}>
                            <p className={s.count} >
                                {inView ? <Counter numb='358' /> : 0}
                            </p>
                            <p>{t('counter2')}</p>
                        </div>
                        <div className={inView && s.show}>
                            <p className={s.count} >
                                {inView ? <Counter numb='10 750' /> : 0}
                            </p>
                            <p>{t('counter3')}</p>
                        </div>
                        <div className={inView && s.show}>
                            <p className={s.count} >
                                {inView ? <Counter numb='1015' /> : 0}
                            </p>
                            <p>{t('counter4')}</p>
                        </div>

                    </div>
                </div>
            </section>
            }

            <section className='container'>
                <h2>{t('homeTitle2')}</h2>
                
                <CartSlider sliders={clientSlider} rows='1' arrows={true} classList='client__slider' slideShow='6' centerPadding='20' centerMode={false} inf={true}  />
            </section>


            <section className={s.portfolio}>
                <h2>{t('homeTitle3')}</h2>
                <CartSlider sliders={portfolioSlider} rows='1' arrows={false} slideShow='3' centerPadding='70' classList='portfolio-slider' inf={true}  centerPort={true}  />
            </section>


            <section className={s.feedback}>
                <h2>{t('homeTitle4')} </h2>

                <FeedbackSlider feedbacks={feedbacks}/>
            </section>

            <h5 className={s.lastText}>{t('slogan')}</h5>
    
    </>
  );
}

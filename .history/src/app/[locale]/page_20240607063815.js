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
import {useLocale, useTranslations} from 'next-intl';
import Loader from "@/components/Loader/Loader";

export default function Home() {
  const {setOnloadImg, imagesLoaded, campaignSlides , fetchCampaignSlides } = useDataSlice();
  const t = useTranslations();
  const lang = useLocale();
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
        url: '/assets/img/qualityIcon.svg'
    },
    {
        text: t('homeIcon2'),
        url: '/assets/img/designIcon.svg'
    },
    {
        text: t('homeIcon3'),
        url: '/assets/img/technologiesIcon.svg'
    }
];

const servicesSlider = [
    {
        url: '/assets/img/servicesSlider/service1.png',
        title: t('navPolygrafy'),
        btnLink: `/${lang}/prod/polygraphy`
    },
    {
        url: '/assets/img/servicesSlider/service2.png',
        title: t('navCart'),
        btnLink: `/${lang}/prod/plasticCards`
    },
    {
        url: '/assets/img/servicesSlider/service3.png',
        title: t('navPromo'),
        btnLink: `/${lang}/prod/promoProd`
    }
    ,
    {
        url: '/assets/img/servicesSlider/service4.png',
        title: t('navStamb'),
        btnLink: `/${lang}/prod/shtamp`
    }
    ,
    {
        url: '/assets/img/servicesSlider/service5.png',
        title: t('navVinil'),
        btnLink: `/${lang}/prod/vinilProducts`
    }
    ,
    {
        url: '/assets/img/servicesSlider/service6.png',
        title: t('navLazer'),
        btnLink: '/'
    }

];

const clientSlider = [
    {
        url: '/assets/img/clientSlider/slide1.png' 
    },
    {
        url: '/assets/img/clientSlider/slide2.png' 
    },
    {
        url: '/assets/img/clientSlider/slide3.png' 
    },
    {
        url: '/assets/img/clientSlider/slide4.png' 
    },
    {
        url: '/assets/img/clientSlider/slide5.png' 
    },
    {
        url: '/assets/img/clientSlider/slide6.png' 
    },
    {
        url: '/assets/img/clientSlider/slide7.png' 
    },
];

const portfolioSlider = [
    {
        url: '/assets/img/portfolioSlider/slide1.png'
    },
    {
        url: '/assets/img/portfolioSlider/slide2.png'
    },
    {
        url: '/assets/img/portfolioSlider/slide3.png'
    },
    {
        url: '/assets/img/portfolioSlider/slide4.png'
    },
    {
        url: '/assets/img/portfolioSlider/slide5.png'
    }
];




const feedbacks = [
    {
        url: '/assets/img/person2.png',
        name: 'Mira Peterson',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, exercitation ullamco laboris nisi ut ',
        raiting: 4
    },
    {
        url: '/assets/img/person1.png',
        name: 'Diego Curumim',
        text: 'Lorem ipsum dolor asdad sit amet, consectetur adipisicing psum dolor asdad psum dolor asdad psum dolor asdad  ',
        raiting: 5
    },
    {
        url: '/assets/img/person2.png',
        name: 'John Dou',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ',
        raiting: 2
    }
    ,
    {
        url: '/assets/img/person1.png',
        name: 'Polik',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ',
        raiting: 4
    }
];


  return (
    <>
    {!campaignSlides.length ? <Loader /> : <HomeSlider urls={campaignSlides}  />}
       
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


            <section className={s.feedback} style={{display: 'none'}}>
                <h2>{t('homeTitle4')} </h2>

                <FeedbackSlider feedbacks={feedbacks}/>
            </section>

            <h5 className={s.lastText}>{t('slogan')}</h5>
    
    </>
  );
}

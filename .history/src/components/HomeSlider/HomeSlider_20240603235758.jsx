
import s from './HomeSlider.module.css'
import '@/public/assets/slickSlider/slick.css'
import Slider from "react-slick";
import HomeSlide from './HomeSlide';
import { useRef } from 'react';

function HomeSlider({urls}) {
    let sliderRef = useRef(null);

    let settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        arrows: false,
        variableWidth: true,
        centerMode: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3500,
        beforeChange: () => handleBeforeChange(),
        onSwipe: () => handleSliderEvent(),
        onEdge: () => handleSliderEvent(),
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    centerMode: false,
                    variableWidth: false,

                }
            }
        ]

    }

    const handleBeforeChange = () => {
        if (sliderRef.current) {
          sliderRef.current.slickPause();
          sliderRef.current.slickPlay();
        }
      };

     


    return (
        <div className={s.slider}>

            <Slider ref={sliderRef} {...settings}  >
                {
                   urls.map(item => <HomeSlide url={item} />)
                }
            </Slider>
        </div>

    )
}

export default HomeSlider;
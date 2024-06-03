
import Slider from "react-slick";
import CartSlide from "./CartSlide";
import s from './CartSlider.module.css'
import React from "react";



export default function CartSlider(props) {
    const setting = {
        arrows: props.arrows,
        rows: props.rows,
        infinite: props.inf,
        slidesToShow: +props.slideShow,
        lazyLoad: true,
        className: props.classList,
        centerMode: props.centerPort ? true : false,
        centerPadding: props.centerPadding + 'px',
        nextArrow: props.rows && <Arrow  />,
        prevArrow: props.rows && <Arrow  />,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    rows: 1,
                    centerMode: true,
                    centerPadding: props.centerPadding + 'px',

                }
            },
            {
                breakpoint: 470,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    rows: 1,
                    centerMode: true,
                    centerPadding: props.centerPadding + 'px',
                    className: `${props.classList} ${props.centerMode ? 'center__mode' : ''}`
                }
            }
        ]

    }

    return (
        <div className={s.cart__slider}>
            <Slider {...setting} >
                {
                    props.sliders.map(item => {
                        return <CartSlide url={item.url} title={item.title} btnLink={item.btnLink} />
                    })
                }
            </Slider>
        </div>
    )
}


function Arrow(props){
    return(
        <button onClick={props.onClick} className={s.slider__arrow}>
            <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.5596 8.41992L13.6196 11.29C13.778 11.4326 13.9047 11.6068 13.9914 11.8015C14.0781 11.9962 14.123 12.2068 14.123 12.4199C14.123 12.633 14.0781 12.8439 13.9914 13.0386C13.9047 13.2332 13.778 13.4075 13.6196 13.55L10.5596 16.4199" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </button>
    )
}
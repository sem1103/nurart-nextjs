
import Slider from 'react-slick'
import s from './Feedback.module.css'
import Feedback from './Feedback'
import React from 'react'

export default function FeedbackSlider(props){
    const setings = {
        arrows: false,
        slidesToShow: 2,
        lazyLoad: true,
        className: 'feedback__slider',
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '40px'

                }
            }
        ]
    }



    return (
        <Slider {...setings} >
            {
                props.feedbacks.map(item => {
                   return <Feedback url={item.url} name={item.name} text={item.text} raiting={item.raiting} />
                })
            }
        </Slider>
    )
}
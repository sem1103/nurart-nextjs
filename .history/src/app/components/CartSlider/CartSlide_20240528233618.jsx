
import Link from 'next/link';
import s from './CartSlider.module.css'
import React from "react";


export default function CartSlide(props) {
    console.log(props);
    return (
        <div className={s.slider__item}>
            <img src={props.url} alt="" />
            {props.title && <h4>{props.title}</h4>}
            {
              props.btnLink &&  
              <Link to={props.btnLink} >
                <svg  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 2C28 0.895431 27.1046 9.74236e-07 26 4.68474e-07L8 2.07005e-06C6.89543 1.3957e-06 6 0.895432 6 2C6 3.10457 6.89543 4 8 4L24 4L24 20C24 21.1046 24.8954 22 26 22C27.1046 22 28 21.1046 28 20L28 2ZM3.41421 27.4142L27.4142 3.41422L24.5858 0.585788L0.585786 24.5858L3.41421 27.4142Z" fill="white" />
                </svg>
            </Link> 

            }
        </div>
    )
}
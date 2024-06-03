
import React from 'react'
import s from './Feedback.module.css'

export default function Feedback(props) {


    return (
        <div className={s.feedback}>
            <div className={s.feedback__top}>
                <div>
                    <img src={props.url} alt="" />
                </div>
                <h5>{props.name}</h5>
            </div>

            <div className={s.feedback__content}>
                <p>
                    {props.text}
                </p>
                <div className={s.raiting}>
                    {Array.from({length:5}).map((item, index) => index < +props.raiting ? <Raiting fill={true} /> : <Raiting fill={false} /> )}
                </div>
            </div>
        </div>
    )
}


function Raiting(props) {
    return (
        <div className={props.fill ? s.fill : ''}>
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9479 7.67197C18.8169 7.26699 18.4577 6.97935 18.0328 6.94105L12.2602 6.4169L9.9776 1.0742C9.80929 0.682654 9.42598 0.429199 9.0001 0.429199C8.57422 0.429199 8.19091 0.682654 8.0226 1.07512L5.73998 6.4169L-0.0334861 6.94105C-0.457691 6.98027 -0.815977 7.26699 -0.947664 7.67197C-1.07935 8.07695 -0.957735 8.52114 -0.636834 8.80115L3.72653 12.6278L2.43987 18.2956C2.34572 18.7123 2.50747 19.1431 2.85325 19.393C3.0391 19.5273 3.25655 19.5956 3.47582 19.5956C3.66488 19.5956 3.85242 19.5447 4.02073 19.444L9.0001 16.468L13.9776 19.444C14.3419 19.6631 14.801 19.6431 15.146 19.393C15.492 19.1423 15.6536 18.7114 15.5594 18.2956L14.2728 12.6278L18.6361 8.80191C18.957 8.52114 19.0796 8.07771 18.9479 7.67197Z" fill="#C5C5C5" />
            </svg>
        </div>
    )
}
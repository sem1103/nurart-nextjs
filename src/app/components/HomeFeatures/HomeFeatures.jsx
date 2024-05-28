
import React from 'react';
import s from './HomeFeatures.module.css'


function HomeFeatures(props) {

    return (
        <div className={s.feature__item}>
         <div className="icon">
            <img src={props.url} alt="" />
         </div>
        <h3>
            {props.text}
        </h3>
        </div>
    )
}

export default HomeFeatures;
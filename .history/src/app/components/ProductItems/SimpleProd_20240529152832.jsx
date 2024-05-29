'use client'
import i18next from "i18next";
import React, { useRef,  } from "react";
import s from './../../prod/ProductsPage.module.css'
import { useTranslation } from "react-i18next";
import useDataSlice from "../../store/dataSlice";
import { NavLink } from "react-router-dom";


export default function SimpleProd({item, openOrderModal}) {
    const {t} = useTranslation();
    const {addFavoriteItem, removeFavoriteItem, addCartItem} = useDataSlice();
    const itemName = useRef(null)


    return (
        <div className={`${s.cart} ${s.simpleProd}`}>


            
            <button className={s.favorite__add} >
               

                <label className="ui-bookmark">
                <input type="checkbox" checked={item.favorite} onClick={() => !item.favorite ? addFavoriteItem({...item, prodType: true}) : removeFavoriteItem({...item, prodType: true})}/>
                <div className="bookmark">
                    <svg
                    viewBox="0 0 16 16"
                    style={{marginTop:'4px'}}
                    className="bi bi-heart-fill"
                    height="30"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                        fill-rule="evenodd"
                    ></path>
                    </svg>
                </div>
                </label>

            </button>
            <img src={item.img} alt="" className={s.cart__img} />
            <div className={s.cart__desc}>
                <h3 ref={itemName}>{i18next.language == 'az' ? item.productAz.productName : item.productRu.productName}</h3>
                <div dangerouslySetInnerHTML={{ __html: i18next.language == 'az' ? item.productAz.desc : item.productRu.desc }} />

                <div className={s.cart__btns}>
                    {
                        item.cartItem ? <NavLink to='/cart'>Səbətdə</NavLink> 
                        : 
                        <button onClick={() => {
                            addCartItem(item);
                         }}>{t('toCard')}</button>
                    }
                    
                    <button onClick={() => openOrderModal(itemName.current.textContent) }>{t('orderNow')}</button>
                </div>
            </div>
        </div>
    )
}
'use client'
import i18next from "i18next";
import React, { useRef,  } from "react";
import s from './../../prod/ProductsPage.module.css'
import { useTranslation } from "react-i18next";
import useDataSlice from "../../../../store/dataSlice";
import Link from "next/link";
import Image from "next/image";



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
            
            <Image src={item.img} alt={i18next.language == 'az' ? item.productAz.productName : item.productRu.productName} className={s.cart__img} placeholder="blur" width={360} height={200} layout="responsive"
 blurDataURL="data:image/webp;base64,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" />
            <div className={s.cart__desc}>
                <h3 ref={itemName}>{i18next.language == 'az' ? item.productAz.productName : item.productRu.productName}</h3>
                <div dangerouslySetInnerHTML={{ __html: i18next.language == 'az' ? item.productAz.desc : item.productRu.desc }} />

                <div className={s.cart__btns}>
                    {
                        item.cartItem ? <Link href='/cart'>Səbətdə</Link> 
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
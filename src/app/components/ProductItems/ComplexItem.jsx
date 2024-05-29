import React, { useRef, useState } from "react";
import s from '../ProductsPage/ProductsPage.module.css';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import useDataSlice from "../../store/dataSlice";
import { NavLink } from "react-router-dom";



export default function ComplexItem({ item, orderModalHandler  }) {

    const { t } = useTranslation();
    const { addFavoriteItem, removeFavoriteItem, addCartItem } = useDataSlice();
    const [show, setShow] = useState(false);
    const itemName = useRef(null)


    return (
        <div key={item.productName} className={`${s.cart} ${s.stamp__carts}`}>
            <button className={s.favorite__add} >


                <label className="ui-bookmark">
                    <input type="checkbox" checked={item.favorite} onClick={() => !item.favorite ? addFavoriteItem({ ...item, prodType: false }) : removeFavoriteItem({ ...item, prodType: true })} />
                    <div className="bookmark">
                        <svg
                            viewBox="0 0 16 16"
                            style={{ marginTop: '4px' }}
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
            <div className={s.cart__name}>
                <img src={item.boxImg} className={s.have__box} alt="hav box" style={{ visibility: item.haveBox ? 'initial' : 'hidden' }} />

                <div>
                    <h3 ref={itemName}>{item.paintItem ? t('stampPaintName') : t('stambId')} : <span className={s.prod__name}>{item.productName}</span></h3>
                    {!item.paintItem && <p>{t('stambSize')}: <span className={s.prod__size}>{item.stambSize}</span></p>}
                </div>
            </div>

            <div className={s.product}>
                <img src={item.img} alt="" className={s.prod__img} />
                <div className={`${s.prod__desc} ${item.paintItem ? s.paint__desc : ''}`}>
                    {
                        item.paintItem ?
                            <div onClick={() => setShow(!show)} className={show ? s.show__more : ''} dangerouslySetInnerHTML={{ __html: i18next.language == 'az' ? item.descAZ : item.descRu }} />
                            :
                            <div>
                                <h5>{t('changePillows')}</h5>
                                <ul className={s.pillows}>
                                    {
                                        i18next.language == 'az' ? item.changePillowsAz.map(elem => <li><span>{elem.pillow}</span></li>)
                                            :
                                            item.changePillowsRu.map(elem => <li><span>{elem.pillow}</span></li>)
                                    }
                                </ul>
                            </div>
                    }
                    <img src={item.exampleStamb} alt="" className={s.example} />
                </div>
            </div>

            <div className={s.cart__btns}>
                {
                    item.cartItem ? <NavLink to='/cart'>Səbətdə</NavLink>
                        :
                        <button onClick={() => {
                            addCartItem(item);
                        }}>{t('toCard')}</button>
                }
                <button onClick={() => orderModalHandler(itemName.current.textContent) }>{t('orderNow')}</button>

            </div>
        </div>
    )
}
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import s from '../ProductsPage/ProductsPage.module.css';
import e from './Favorites.module.css'
import useDataSlice from "../../store/dataSlice";
import SimpleProd from "../ProductItems/SimpleProd";
import ComplexItem from "../ProductItems/ComplexItem";
import Contact from "../Contact/Contact";
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';
import OrderForm from "../OrderForm/OrderForm";
import ThanksModal from '../ThanksModal/ThanksModal';

export default function Favorites(){
    const {t} = useTranslation();
    const {favoriteItems, checkItemsState, getFavoriteItems} = useDataSlice();
    const [isOpen, setIsOpen] = useState(false);
    const [orderName, setOrderName] = useState('')
    useEffect(() => {
        getFavoriteItems()
        checkItemsState();
    }, [])


    const openOrderModal = (itemName) =>{
        setOrderName(itemName);
        document.body.classList.add('show__order');
        setIsOpen(true);
    }
    return(
        <>
             <Helmet>
                <title>Poliqrafiya işləri,Poliqrafiya isleri,cap xidmetleri </title>
                <meta name="description" content="NurArt  Azərbaycanın ən böyük Poliqrafiya şirkətləri arasındadı və Bütün növ çap və dizayn xidmətlərini təklif etməkdədir. " />
                <meta name="keywords" content="Təqvimlər,Teqvim,Kalendar,çap,print" />
            </Helmet>



        <div className={`container ${s.products__page}`}>
            <h1>{t('favoritPageTitle')}</h1>

            <div className={`${s.carts__wrapper} ${s.carts}`}>
                {
                    favoriteItems.length ? 
                    favoriteItems.map((item) => {
                        return item.prodType ? 
                        <SimpleProd item={item}  openOrderModal={openOrderModal}/>
                        :
                        <ComplexItem item={item} openOrderModal={openOrderModal}/>
                    })
                    :
                    <div className={e.empty}>
                        <div className={e.hearh}>
                        <div className={e.cssload_main}>
                            <div className={e.cssload_heart}>
                                <span className={e.cssload_heartL}></span>
                                <span className={e.cssload_heartR}></span>
                                <span className={e.cssload_square}></span>
                            </div>
                            <div className={e.cssload_shadow}></div>
                        </div>
                        </div>

                        <h3>{t('emptyFavoriteTitle')}</h3>
                        <p>{t('emptyFavoriteText')}</p>
                        <NavLink to='/prod/polygraphy' className={e.menu__link}>
                        - {t('products')}
                        </NavLink>
                    </div>
                }
            </div>
        </div>

        <Contact />
        {isOpen && <OrderForm orderName={orderName} setIsOpen={setIsOpen} />}

        </>
    )
}
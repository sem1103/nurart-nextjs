'use client'
import { useEffect, useState } from "react";
import s from '../../../app/[locale]/prod/ProductsPage.module.css'
import e from './Favorites.module.css'
import useDataSlice from "../../../../store/dataSlice";
import SimpleProd from "@/components/ProductItems/SimpleProd";
import ComplexItem from "@/components/ProductItems/ComplexItem";
import Contact from "@/components/Contact/Contact";
import OrderForm from "../OrderForm/OrderForm";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Favorites(){
    const t = useTranslations();
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
                        <Link href='/prod/polygraphy' className={e.menu__link}>
                        - {t('products')}
                        </Link>
                    </div>
                }
            </div>
        </div>

        <Contact />
        {isOpen && <OrderForm orderName={orderName} setIsOpen={setIsOpen} />}

        </>
    )
}
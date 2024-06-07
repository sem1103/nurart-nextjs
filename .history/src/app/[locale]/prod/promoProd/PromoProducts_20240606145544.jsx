
'use client'
import Contact from '../Contact/Contact'
import s from './../ProductsPage.module.css'
import FilterCategory from '../FilterCategory'
import  { useState, useEffect } from 'react';
import useLoaderSlice from '../../../../../store/loaderSlice';
import useDebounce from '../../../../../hooks/useDebounce';
import useDataSlice from '../../../../../store/dataSlice';
import Loader from '@/components/Loader/Loader';
import SimpleProd from '@/components/ProductItems/SimpleProd';
import OrderForm from '@/components/OrderForm/OrderForm';
import ThanksModal from '@/components/ThanksModal/ThanksModal';
import {  useTranslations } from 'next-intl';




export default function PromoProducts() {
    const t  = useTranslations();
    

    const {items, allItems, filters, fetchData, filterByCategory, filterByName, resetItems,setActiveCategoryLabel} = useDataSlice()
    const {loader} = useLoaderSlice();
    const [isOpen, setIsOpen] = useState(false);
    const [orderName, setOrderName] = useState('');
    useEffect(() => {
        resetItems();
        setActiveCategoryLabel('');
        !allItems.promo.length && fetchData('https://api.nurart.az/wp-json/wp/v2/promo_products/');        
    }, []);

   

    const searchByName =  useDebounce(value => {
            filterByName(value, 'promo');
        }, 700);

    const filterCategory = (category, label) => {
        filterByCategory(category, 'promo', label);
    }

    const openOrderModal = (itemName) =>{
        setOrderName(itemName);
        document.body.classList.add('show__order');
        setIsOpen(true);
    }

    return (

        <>
            

            <ThanksModal modalTitle={t('orderModalTitle')} modalText={t('orderModalText')} />


            <div className={`container ${s.products__page}`}>
                <h1>{t('productPageTitle')}</h1>
                <FilterCategory filterCategories={filters.promo} filterByCategory={filterCategory} filterByName={searchByName} placeholder='Məhsulun adı ilə axtarış...' />

                <div className={`${s.carts} ${s.carts__wrapper}`}>
                     { loader ? <Loader /> : 
                        items.promo.map(item => {
                          return  <SimpleProd item={item} openOrderModal={openOrderModal} />
                        })
                    } 
                </div>


            </div>

            <Contact />
            {isOpen && <OrderForm orderName={orderName} setIsOpen={setIsOpen} />}
        </>
    )
}
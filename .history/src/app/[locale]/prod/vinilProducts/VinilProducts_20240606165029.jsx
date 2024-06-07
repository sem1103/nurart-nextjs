
import Contact from '../Contact/Contact'
import s from './ProductsPage.module.css'
import FilterCategory from './FilterCategory'
import { useTranslation } from 'react-i18next'
import React, { useState } from 'react';
import { useEffect } from 'react'
import i18next from 'i18next'
import useLoaderSlice from '../../store/loaderSlice'
import useDebounce from '../../hooks/useDebounce'
import useDataSlice from '../../store/dataSlice'
import Loader from '../Loader/Loader'
import SimpleProd from '../ProductItems/SimpleProd';
import OrderForm from '../OrderForm/OrderForm'
import ThanksModal from '../ThanksModal/ThanksModal';




export default function VinilProducts() {
    const { t } = useTranslation();
    

    const {items, allItems, filters, fetchData, filterByCategory, filterByName, resetItems,setActiveCategoryLabel} = useDataSlice()
    const {loader} = useLoaderSlice();
    const [isOpen, setIsOpen] = useState(false);
    const [orderName, setOrderName] = useState('')
    useEffect(() => {
        resetItems();
        setActiveCategoryLabel('');
        !allItems.vinil.length && fetchData('http://localhost/wp-json/wp/v2/vinil_items/');        
    }, []);

   

    const searchByName =  useDebounce(value => {
            filterByName(value, 'vinil');
        }, 700);

    const filterCategory = (category, label) => {
        filterByCategory(category, 'vinil', label);
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
                <FilterCategory filterCategories={filters.vinil} filterByCategory={filterCategory} filterByName={searchByName} placeholder='Məhsulun adı ilə axtarış...' />

                <div className={`${s.carts} ${s.carts__wrapper}`}>
                     { loader ? <Loader /> : 
                        items.vinil.map(item => {
                          return <SimpleProd item={item} openOrderModal={openOrderModal}/>
                        })
                    } 
                </div>


            </div>

            <Contact />
            {isOpen && <OrderForm orderName={orderName} setIsOpen={setIsOpen} />}
        </>
    )
}
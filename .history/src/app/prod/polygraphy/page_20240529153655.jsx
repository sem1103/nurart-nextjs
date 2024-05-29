
'use client'
import s from './../ProductsPage.module.css';
import FilterCategory from '../FilterCategory';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { useEffect } from 'react';
import SimpleProd from '../../components/ProductItems/SimpleProd';
import Contact from '@/app/components/Contact/Contact';
import Loader from '@/app/components/Loader/Loader';
import useLoaderSlice from '../../../../store/loaderSlice';
import useDebounce from '../../../../hooks/useDebounce';
import useDataSlice from '../../../../store/dataSlice';
import OrderForm from '@/app/components/OrderForm/OrderForm';
import ThanksModal from '@/app/components/ThanksModal/ThanksModal';



export default function Polygraphy() {
    const { t } = useTranslation();
    const { items, allItems, filters, fetchData, filterByCategory, filterByName, resetItems, setActiveCategoryLabel } = useDataSlice();
    const { loader } = useLoaderSlice();
    const [isOpen, setIsOpen] = useState(false);
    const [orderName, setOrderName] = useState('')

    useEffect(() => {
        resetItems();
        setActiveCategoryLabel('');
        !allItems.polygraphy.length && fetchData('https://api.nurart.az/poliqrafiya');
    }, []);



    const searchByName = useDebounce(value => {
        filterByName(value, 'polygraphy');
    }, 700);
    const filterCategory = (category, label) => {
        filterByCategory(category, 'polygraphy', label);
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
                <h1>{t('productPageTitle')} </h1>
                <FilterCategory filterCategories={filters.polygraphy} filterByCategory={filterCategory} filterByName={searchByName} placeholder='Məhsulun adı ilə axtarış...' />

                <div className={`${s.carts} ${s.carts__wrapper}`}>
                    {loader ? <Loader /> :
                        items.polygraphy.map(item => {
                            return <SimpleProd item={item} openOrderModal={openOrderModal} />
                        })
                    }

                    {
                        (!items.polygraphy.length && !loader) && <h3>Təəssüf ki, heç bir şey tapılmadı...</h3>
                    }
                </div>
            </div>

            <Contact />

            {isOpen && <OrderForm orderName={orderName} setIsOpen={setIsOpen} />}

        </>
    )
}

'use client'
import Contact from '@/components/Contact/Contact';
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

    const [visibleProducts, setVisibleProducts] = useState([]);
    const [loadedCount, setLoadedCount] = useState(3); // Начальное количество загружаемых товаров
    const containerRef = useRef(null);

    useEffect(() => {
        resetItems();
        setActiveCategoryLabel('');
        !allItems.promo.length && fetchData('https://api.nurart.az/wp-json/wp/v2/promo_products/');        
        const handleScroll = () => {
            const { clientHeight } = containerRef.current;
            if (window.scrollY > clientHeight  / 2) {
              // Когда пользователь прокрутил до конца списка, загружаем еще товары
              setLoadedCount(prevCount => prevCount + 1); // Увеличиваем количество загружаемых товаров
            }
          };
      
          // Добавляем слушатель события прокрутки при монтировании компонента
          document.querySelector('body').onscroll = () => {
            handleScroll()
          }
    }, []);


    useEffect(() => {
        setVisibleProducts(items.promo.slice(0, loadedCount));
      }, [loadedCount, items.promo]);


   

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
                <FilterCategory filterCategories={filters.promo} filterByCategory={filterCategory} filterByName={searchByName} placeholder={t('searchByName')} />

                <div className={`${s.carts} ${s.carts__wrapper}`} ref={containerRef}>
                     { loader ? <Loader /> : 
                        visibleProducts.map(item => {
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
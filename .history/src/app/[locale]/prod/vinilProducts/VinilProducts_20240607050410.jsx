'use client'
import Contact from '@/components/Contact/Contact'
import s from './../ProductsPage.module.css'
import FilterCategory from '../FilterCategory'
import { useTranslations } from 'next-intl';
import  { useState, useEffect, useRef } from 'react';
import useLoaderSlice from '../../../../../store/loaderSlice';
import useDebounce from '../../../../../hooks/useDebounce';
import useDataSlice from '../../../../../store/dataSlice';
import Loader from '@/components/Loader/Loader';
import SimpleProd from '@/components/ProductItems/SimpleProd';
import OrderForm from '@/components/OrderForm/OrderForm';
import ThanksModal from '@/components/ThanksModal/ThanksModal';




export default function VinilProducts() {
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
        !allItems.vinil.length && fetchData('https://api.nurart.az/wp-json/wp/v2/vinil_items/');        
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
        setVisibleProducts(items.vinil.slice(0, loadedCount));
      }, [loadedCount, items.vinil]);


   

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


            <div className={`container ${s.products__page}`} ref={containerRef}>
                <h1>{t('productPageTitle')}</h1>
                <FilterCategory filterCategories={filters.vinil} filterByCategory={filterCategory} filterByName={searchByName} placeholder={t('searchByName')} />

                <div className={`${s.carts} ${s.carts__wrapper}`}>
                     { loader &&  !allItems.vinil.length? <Loader /> : 
                        visibleProducts.map(item => {
                          return <SimpleProd item={item} openOrderModal={openOrderModal}/>
                        })
                    } 
                    {
                        (!items.vinil.length && !loader) && <h3>{t('notFound')}</h3>
                    }
                </div>


            </div>

            <Contact />
            {isOpen && <OrderForm orderName={orderName} setIsOpen={setIsOpen} />}
        </>
    )
}
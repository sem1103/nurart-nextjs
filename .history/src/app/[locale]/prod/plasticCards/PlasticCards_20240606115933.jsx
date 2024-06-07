
import Contact from '@/components/Contact/Contact';
import s from './../ProductsPage.module.css';
import FilterCategory from '../FilterCategory';
import  { useState, useEffect } from 'react';
import useLoaderSlice from '../../../../../store/loaderSlice';
import useDebounce from '../../../../../hooks/useDebounce';
import useDataSlice from '../../../../../store/dataSlice';
import Loader from '@/components/Loader/Loader';
import SimpleProd from '@/components/ProductItems/SimpleProd';
import OrderForm from '@/components/OrderForm/OrderForm';
import ThanksModal from '@/components/ThanksModal/ThanksModal';
import { useTranslations } from 'next-intl';




export default function PlasticCards() {
    const  t  = useTranslations();
    const {items, allItems, filters, fetchData, filterByCategory, filterByName, resetItems, setActiveCategoryLabel} = useDataSlice()
    const {loader} = useLoaderSlice();
    const [isOpen, setIsOpen] = useState(false);
    const [orderName, setOrderName] = useState('');
    useEffect(() => {
        resetItems();
        setActiveCategoryLabel('');
        !allItems.plastic.length && fetchData('http://localhost/wp-json/wp/v2/plastic_cards/');        
    }, []);

   

    const searchByName =  useDebounce(value => {
            filterByName(value, 'plastic');
        }, 700);

    const filterCategory = (category, label) => {
        filterByCategory(category, 'plastic', label);
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
                <FilterCategory filterCategories={filters.plastic} filterByCategory={filterCategory} filterByName={searchByName} placeholder='Məhsulun adı ilə axtarış...' />

                <div className={`${s.carts} ${s.carts__wrapper}`}>
                     { loader ? <Loader /> : 
                        items.plastic.map(item => {
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
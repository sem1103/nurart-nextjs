'use client'
import  {  useState , useEffect, useRef} from 'react'

import s from './../ProductsPage.module.css'
import FilterCategory from '../FilterCategory'
import useLoaderSlice from '../../../../../store/loaderSlice'
import useDebounce from '../../../../../hooks/useDebounce'
import useDataSlice from '../../../../../store/dataSlice'
import Loader from '@/components/Loader/Loader'
import ComplexItem from '@/components/ProductItems/ComplexItem'
import OrderForm from '@/components/OrderForm/OrderForm'
import Contact from '@/components/Contact/Contact'
import ThanksModal from '@/components/ThanksModal/ThanksModal'
import { useTranslations } from 'next-intl'



export default function Stamp() {
    const  t  = useTranslations();    

    const {items, allItems, filters, fetchData, filterByCategory, filterByCode, resetItems, setActiveCategoryLabel} = useDataSlice();
    const {loader} = useLoaderSlice();
    const [isOpen, setIsOpen] = useState(false);
    const [orderName, setOrderName] = useState('')
    const containerRef = useRef(null);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [loadedCount, setLoadedCount] = useState(3); // Начальное количество загружаемых товаров


    useEffect(() => {
        resetItems();
        setActiveCategoryLabel('');
        !allItems.shtamp.length && fetchData('https://api.nurart.az/wp-json/wp/v2/shtamp/');        
           // Функция для обработки события прокрутки
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
        setVisibleProducts(items.shtamp.slice(0, loadedCount));
      }, [loadedCount, items.shtamp]);


    

    const searchByName =  useDebounce(value => {
        filterByCode(value, 'shtamp')
    }, 700);

    const filterCategory = (category, label) => {
        filterByCategory(category, 'shtamp', label);
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
                <FilterCategory filterCategories={filters.shtamp} filterByCategory={filterCategory} filterByName={searchByName} placeholder='Məhsulun kodu ilə axtarış...' />

                <div className={s.carts__wrapper} ref={containerRef}>

                    {
                        loader ? <Loader />
                            :
                            visibleProducts.map(item => {
                                return <ComplexItem item={item} orderModalHandler={openOrderModal}/>
                            })
                    }

                    {
                        (!items.shtamp.length && !loader) && <h3>Təəssüf ki, heç bir şey tapılmadı...</h3>
                    }


                </div>

            </div>

            <Contact />
            {isOpen && <OrderForm orderName={orderName} setIsOpen={setIsOpen} />}

        </>
    )
}
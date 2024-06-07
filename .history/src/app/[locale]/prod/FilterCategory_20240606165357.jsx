
'use client'
import { useEffect, useRef, useState } from 'react';
import s from './ProductsPage.module.css';
import Link from 'next/link';
import useDataSlice from '../../../../store/dataSlice';
import {useLocale, useTranslations} from 'next-intl';


export default function FilterCategory(props) {
    const {searchInput, setInputValue, activeCategoryLabel, segments} = useDataSlice();

    let lang = useLocale();
    
    let [openFilter, setOpenFilter] = useState(false);
    const t = useTranslations();
    const filterElem = useRef();

    console.log(segments);
    useEffect(() => {
        const handleClickOutside = event => {
          if (filterElem.current && !filterElem.current.contains(event.target)) {
            setOpenFilter();
          }
        };
    
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
        
      }, [openFilter]);



    return (
        <>
            <ul className={`${s.categoryes} categoryes`}>
                <li><Link className={segments == `prod/polygraphy` ?  'active' : ''} href={`/${lang}/prod/polygraphy`} >{t('navPolygrafy')}</Link></li>
                <li><Link className={segments == `prod/shtamp` ?  'active' : ''} href={`/${lang}/prod/shtamp`} >{t('navStamb')}</Link></li>
                <li><Link className={segments == `prod/plasticCards` ?  'active' : ''} href={`/${lang}/prod/plasticCards`} >{t('navCart')}</Link></li>
                <li><Link className={segments == `prod/promoProd` ?  'active' : ''}  href={`/${lang}/prod/promoProd`} >{t('navPromo')}</Link></li>
                <li><Link className={segments == `prod/vinilProducts` ?  'active' : ''} href={`/${lang}/prod/vinilProducts`} >{t('navVinil')}</Link></li>
            </ul>
            
            <div className={s.filter__search}>
                <div ref={filterElem} id={s.filter} className={`${openFilter ? s.open__filter : ''} ${s.filter}`} onClick={() => setOpenFilter(!openFilter)}>
                    <p className={s.active__filter}>{t('filter')} : {!activeCategoryLabel ? t('all') : lang == 'az' ? activeCategoryLabel.split('&')[0] : activeCategoryLabel.split('&')[1]}</p>
                    <ul>
                        <li><button onClick={() => props.filterByCategory('', '')}>{t('all')}</button></li>
                    {
                        props.filterCategories.map(item => <li><button onClick={() => props.filterByCategory(item.value, item.label)}>{
                            lang == 'az' ? item.label.split('&')[0] : item.label.split('&')[1]
                            }</button></li>)
                    }
                    </ul>
                </div>               
                    <div id={s.search} >
                    <input type="text" placeholder={props.placeholder} value={searchInput} onChange={(e)=> {
                        setInputValue(e.target.value)
                        props.filterByName(e.target.value)
                    }}/>
                    </div>
            </div>
            
        </>
    );
}
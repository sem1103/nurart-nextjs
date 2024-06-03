'use client'
import Link from "next/link";
import s from './Header.module.css'
import {  useEffect, useRef, useState, useTransition } from "react";
import PutRequestForm from "../OrderForm/PutRequestForm";
import ThanksModal from "../ThanksModal/ThanksModal";
import { usePathname, useRouter, useSelectedLayoutSegment  } from "next/navigation";
import {useLocale, useTranslations} from 'next-intl';





export default function Header(){
   let lang = useLocale();
   const router = useRouter();
    const pathname = usePathname();
    const  t  = useTranslations();
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const [isPending, startTransition] = useTransition();

    console.log(isPending);

    const changeLanguage = () => {
        let language = lang == 'az' ? 'ru' : 'az' 


        startTransition(() => {
            router.replace(
              // @ts-expect-error -- TypeScript will validate that only known `params`
              // are used in combination with a given `pathname`. Since the two will
              // always match for the current route, we can skip runtime checks.
              {pathname, params},
              {locale: language}
            );
          });



        // if (!pathname) return '/';
        // const segments = pathname.split('/');
        // segments[1] = language;
        // const newUrl = segments.join('/');
        // startTransition(() => {
        //     router.push(newUrl);
        // });
    };

    const productNav = useRef(null);
    const inputLang = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const activePath = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

    const burgerMenuHandler = () =>{
        document.body.classList.toggle(s.active__burger)
        if(!document.body.classList.contains(s.active__burger)){
            document.body.classList.add(s.deactive__burger)
        } else  document.body.classList.remove(s.deactive__burger)
    }

   
    useEffect(() => {
        inputLang.current.checked = lang == 'ru' ? true : false;
    } , [])

    const openRequestModal = () =>{
        document.body.classList.add('show__order');
        setIsOpen(true);
    }

    return (
        <>
            <header >
          
                <div className="container">
                    <div className={`logo ${s.logo}`}>
                        <Link href={`/`}>NurArt</Link>
                    </div>
                    <div className={s.right}>
                        <div className={s.burger}>
                            <div className={s.burger__btn} onClick={() => burgerMenuHandler()}>
                                <hr className={s.stick} />
                                <hr className={s.stick} />
                                <hr className={s.stick} />
                            </div>
                        </div>

                        <div className={s.menu}>

                            <nav>
                                <ul>
                                    <li>
                                        <Link className={pathname == `/prod/polygraphy` ?  'active' : ''} href={`/prod/polygraphy`} onClick={() => {
                                            burgerMenuHandler();
                                        }} ref={productNav}>{t('products')}</Link>
                                    </li>
                                    <li>
                                        <Link locale='az' href='/' onClick={() => {
                                            burgerMenuHandler();
                                        }} >{t('promotions')}</Link>
                                    </li>
                                    <li className={s.submenu}>
                                        {t('services')}
                                        <ul>
                                            <li><Link onClick={() => burgerMenuHandler()} href=''>{t('design')}</Link></li>
                                            <li><Link onClick={() => burgerMenuHandler()} href=''>{t('digitPrint')}</Link></li>
                                            <li><Link onClick={() => burgerMenuHandler()} href=''>{t('ofsetPrint')}</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href='' onClick={() => burgerMenuHandler()}>{t('about')}</Link>
                                    </li>
                                    <li>
                                        <Link href='' onClick={() => burgerMenuHandler()}>{t('contact')}</Link>
                                    </li>
                                </ul>
                            </nav>

                            <ul className={`${s.header__tools} header__tools`}>
                                
                                <li className={s.favorites}>
                                
                                    <Link href='' onClick={() => burgerMenuHandler()}>
                                    <svg viewBox="0 0 24 24" width="15px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#fff" stroke-width="2" fill="transparent" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        {t('favoritPageTitle')}
                                    </Link>
                                </li>
                                <li className={s.card}>
                                    <Link href='' onClick={() => burgerMenuHandler()}>
                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.49608 0.97207L2.63386 1.25H2.94406H13.0191C13.3641 1.25 13.5542 1.54887 13.4843 1.7946L13.484 1.79574L12.4792 5.36457C12.4791 5.36466 12.4791 5.36474 12.4791 5.36483C12.3348 5.87388 11.8417 6.25 11.2566 6.25H4.18444H3.57563L3.69398 6.8472L3.82635 7.51516L3.82635 7.51517L3.82687 7.51774C3.93094 8.02884 4.38964 8.375 4.89533 8.375H11.9626C11.9957 8.375 12.0194 8.38728 12.0334 8.40075C12.0471 8.41378 12.0509 8.42618 12.0509 8.4375C12.0509 8.44882 12.0471 8.46122 12.0334 8.47425C12.0194 8.48772 11.9957 8.5 11.9626 8.5H4.89533C4.26985 8.5 3.76033 8.07684 3.65276 7.53205L3.6526 7.53125L2.38792 1.18076C2.32069 0.837062 2.01688 0.625 1.70368 0.625H0.588322C0.555142 0.625 0.531523 0.61272 0.517434 0.599249C0.503802 0.586216 0.5 0.573821 0.5 0.5625C0.5 0.551179 0.503802 0.538784 0.517434 0.525751C0.531523 0.51228 0.555142 0.5 0.588322 0.5H1.70368C2.05834 0.5 2.35976 0.697057 2.49608 0.97207ZM3.63772 10.875C3.63772 10.7961 3.65394 10.7174 3.68608 10.6432C3.71825 10.569 3.76605 10.5 3.82788 10.4409L3.48235 10.0795L3.82788 10.4409C3.88977 10.3817 3.96444 10.3337 4.04819 10.3005C4.13196 10.2673 4.22247 10.25 4.31436 10.25C4.40626 10.25 4.49677 10.2673 4.58054 10.3005C4.66429 10.3337 4.73896 10.3817 4.80084 10.4409C4.86268 10.5 4.91048 10.569 4.94265 10.6432C4.97479 10.7174 4.99101 10.7961 4.99101 10.875C4.99101 10.9539 4.97479 11.0326 4.94265 11.1068C4.91048 11.181 4.86268 11.25 4.80084 11.3091C4.73896 11.3683 4.66429 11.4163 4.58054 11.4495C4.49677 11.4827 4.40626 11.5 4.31436 11.5C4.22247 11.5 4.13196 11.4827 4.04819 11.4495C3.96444 11.4163 3.88977 11.3683 3.82788 11.3091L3.48235 11.6705L3.82788 11.3091C3.76605 11.25 3.71825 11.181 3.68608 11.1068C3.65394 11.0326 3.63772 10.9539 3.63772 10.875ZM11.3742 10.25C11.5607 10.25 11.7354 10.3211 11.8607 10.4409C11.9853 10.56 12.0509 10.7167 12.0509 10.875C12.0509 11.0333 11.9853 11.19 11.8607 11.3091C11.7354 11.4289 11.5607 11.5 11.3742 11.5C11.1877 11.5 11.0131 11.4289 10.8878 11.3091C10.7632 11.19 10.6976 11.0333 10.6976 10.875C10.6976 10.7167 10.7632 10.56 10.8878 10.4409C11.0131 10.3211 11.1877 10.25 11.3742 10.25Z" stroke="white" fill="transparent"></path></svg>
                                        {t('card')}
                                    </Link>

                                </li>
                                <li>
                                    <button onClick={() => {
                                        burgerMenuHandler();
                                        openRequestModal()
                                    }}>
                                       {t('sendReg')}
                                    </button>
                                </li>
                            </ul>

                            <div className={s.toggle__container}>
                                <span className={lang == 'az' ? s.active__lang : ''} >AZ</span>

                                <label onClick={() => changeLanguage()} className={s.toggle} for="check">
                                    <input ref={inputLang} id={s.check} name="check" type="checkbox" />
                                    <div className={s.toggle__circle}></div>
                                </label>
                                <span className={lang == 'ru' ? s.active__lang : ''}>RU</span>

                            </div>


                        </div>
                    </div>
                </div>

            </header>



            {isOpen && <PutRequestForm  setIsOpen={setIsOpen} />}

            <ThanksModal modalTitle={t('requestModalTitle')} modalText={t('orderModalText')} />


        </>
    )
}
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import s from '../ProductsPage/ProductsPage.module.css';
import e from './CartPage.module.css';
import useDataSlice from "../../store/dataSlice";
import Contact from "../Contact/Contact";
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';
import i18next from "i18next";
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import ThanksModal from "../ThanksModal/ThanksModal";



export default function CartPage() {
    const { register, formState: { errors, isValid }, handleSubmit, reset, watch } = useForm({ mode: 'all' });
    let [nameValue, emailValue, phoneValue, formCompanyNameValue, formMessageValue] = watch(['name', 'email', 'phone', 'formCompanyName', 'formMessage']);
    const { t } = useTranslation();
    const { cartItems, removeCartItem, getCartItems, removeCartAllItems } = useDataSlice();
    const [sending, setSend] = useState(0);

    useEffect(() => {
        getCartItems();
    }, []);


    const onSubmit = async (data) => {
        data.cartItemsTitles = Array.from(document.querySelectorAll(`.${e.cart__item} h3`)).map(item => item.innerText);
        try {
            setSend(1)
            await fetch("https://nurart.az/sendmail/cartOrder.php", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            });

            showModal();
            reset();
            setSend(2);
            removeCartAllItems();
        } catch (error) {
            console.error(error);
            alert(error.message)
        }
    };

    const showModal = () => {
        document.body.classList.add('show__modal');
    }
  

    return (
        <>

            <Helmet>
                <title>Poliqrafiya işləri,Poliqrafiya isleri,cap xidmetleri</title>
                <meta name="description" content="NurArt Azərbaycanın ən böyük Poliqrafiya şirkətləri arasındadı və Bütün növ çap və dizayn xidmətlərini təklif etməkdədir." />
                <meta name="keywords" content="Təqvimlər,Teqvim,Kalendar,çap,print" />
            </Helmet>            
            

            <div className={`container ${s.products__page}`}>
                <h1>{t('card')}</h1>

                <div className={`${s.carts__wrapper} ${s.carts}`}>
                    {cartItems.length ? (
                        <div className={e.container}>
                            <div className={e.cart}>
                                <h2>{t('addedCartTitle')}</h2>
                                <div className={e.cart__items}>
                                    {cartItems.map(item => {
                                        let text;
                                        if (item.productName) {
                                            text = item.paintItem ? t('stampPaintName') : t('stambId');
                                            text += ': ' + item.productName;
                                        }
                                        return (
                                            <div className={e.cart__item} key={item.id}>
                                                <img src={item.img} alt="" />
                                                <h3>{text || (i18next.language === 'az' ? item.productAz.productName : item.productRu.productName)}</h3>
                                                <button onClick={() => removeCartItem(item)} className={e.remove__button}>Удалить</button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className={e.form__container}>
                                <h2>{t('cartFormTitle')}</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className={e.form__group}>
                                        <input type="text"  id="name" {...register("name", { required: true })} className={`${nameValue ? e.focused : ''} ${errors.name ? e.error__inp : ''}`} />
                                        <label htmlFor="name">{t('formFullname')}</label>
                                    </div>
                                    <div className={e.form__group}>
                                        <input type="email" id="email" {...register("email", {
                                            required: true,
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                message: "Invalid email address"
                                            }
                                        })} className={`${emailValue ? e.focused : ''} ${errors.email ? e.error__inp : ''} ${errors.email ? e.invalid__pattern : ''}`} />
                                        <label htmlFor="email">{t('formEmail')}</label>
                                    </div>
                                    <div className={e.form__group}>
                                        <InputMask mask="+994(99) 999-99-99" defaultValue="+994" type="tel" id="phone" {...register("phone", {
                                            required: true,
                                            pattern: {
                                                value: /^\+994\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/,
                                                message: "Invalid email address"
                                            }
                                        })} className={`${phoneValue ? e.focused : ''} ${errors.phone ? e.error__inp : ''}`} />


                                        <label htmlFor="phone">{t('formPhoneNumber')}</label>
                                    </div>
                                    <div className={e.form__group}>
                                        <input type="text" id="formCompanyName" {...register("formCompanyName", { required: true })} className={`${formCompanyNameValue ? e.focused : ''} ${errors.formCompanyName ? e.error__inp : ''}`} />
                                        <label htmlFor="formCompanyName">{t('formCompanyName', { required: true })}</label>
                                    </div>
                                    <div className={`${e.form__group} ${e.message}`}>
                                        <textarea id="formMessage" {...register("formMessage")} rows={5} className={formMessageValue ? e.focused : ''}></textarea>
                                        <label htmlFor="formMessage">{t('formMessage')}</label>
                                    </div>

                                    <div className={`${e.form__group} ${e.checkbox}`}>
                                        <label className={e.checkbox__container}>
                                            <input type="checkbox"  {...register("agree", { required: true })} />
                                            <svg viewBox="0 0 64 64" width="30">
                                                <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className={e.path}></path>
                                            </svg>
                                            <a href="">{t('formIgree')}</a>
                                        </label>
                                    </div>

                                    <div className={e.form__group}>
                                        <button type="submit" disabled={!isValid} className={sending == 1 ? e.sending : ''}>{t('orderButton')}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div className={e.empty}>
                            <h3>Səbətinizdə hələ heç bir məhsul yoxdur.</h3>
                            <NavLink to='/prod/polygraphy' className={e.menu__link}>
                                - {t('products')}
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>

            <Contact />
        </>
    );
}

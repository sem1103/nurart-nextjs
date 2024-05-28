import React, { useState } from "react";
import './OrderForm.css'
import { useTranslation } from "react-i18next";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";



export default function OrderForm({ orderName, setIsOpen }) {

    const { register, formState: { errors, isValid }, handleSubmit, reset, watch } = useForm({ mode: 'all' });
    const { t } = useTranslation();
    let [nameValue, emailValue, phoneValue, formCompanyNameValue, formMessageValue] = watch(['name', 'email', 'phone', 'formCompanyName', 'formMessage']);
    const [sending, setSend] = useState(0);

    console.log(nameValue);

    const closeOrderModal = (e) => {

        if (e.target === document.querySelector('.close__btn') || e.target.closest('.close__btn') || e.target === document.querySelector('.order__modal__wrapper')) {
            document.body.classList.remove('show__order');
            setIsOpen(false);
        }

    }
    const showModal = () => {
        document.body.classList.add('show__modal');
    }

    const onSubmit = async (data) => {
        try {
            data.prodName = document.querySelector(`.product__name p`).textContent
            setSend(1)
            await fetch("https://nurart.az/sendmail/order.php", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            });

            reset();
            setSend(2);
            document.body.classList.remove('show__order');
            setIsOpen(false);
            showModal();

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>

            <div className="order__modal__wrapper" onClick={(e) => closeOrderModal(e)}>
                <div className="modal__form">
                    <button className="close__btn" onClick={(e) => closeOrderModal(e)}>
                        <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#af2c2c" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#af2c2c" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                    </button>

                    <h3>{t('orderNowTitle')}</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form__group">   
                            <input type="text" autoFocus id="name" {...register("name", { required: true })} className={`${nameValue ? "focused" : ''} ${errors.name ? "error__inp" : ''}`} />
                            <label htmlFor="name">{t('formFullname')}</label>
                        </div>
                        <div className="form__group">
                            <input type="email" id="email" {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email address"
                                }
                            })} className={`${emailValue ? "focused" : ''} ${errors.email ? "error__inp" : ''} ${errors.email ? 'invalid__pattern' : ''}`} />
                            <label htmlFor="email">{t('formEmail')}</label>
                        </div>
                        <div className="form__group">
                            <InputMask mask="+994(99) 999-99-99" defaultValue="+994" type="tel" id="phone"  {...register("phone", {
                                required: true,
                                pattern: {
                                    value: /^\+994\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/,
                                    message: "Invalid email address"
                                }
                            })} className={`focused ${errors.phone ? "error__inp" : ''}`} />


                            <label htmlFor="phone">{t('formPhoneNumber')}</label>
                        </div>
                        <div className="form__group">
                            <input type="text" id="formCompanyName" {...register("formCompanyName", { required: true })} className={`${formCompanyNameValue ? "focused" : ''} ${errors.formCompanyName ? "error__inp" : ''}`} />
                            <label htmlFor="formCompanyName">{t('formCompanyName', { required: true })}</label>
                        </div>
                        <div className="product__name">
                            <span>{t('selecterProduct')}</span>
                            <p>{orderName}</p>
                        </div>

                        <div className="form__group message">
                            <textarea id="formMessage" {...register("formMessage")} rows={5} className={formMessageValue ? "focused" : ''}></textarea>
                            <label htmlFor="formMessage">{t('formMessage')}</label>
                        </div>

                        <div className="form__group checkbox">
                            <label className="checkbox__container">
                                <input type="checkbox"  {...register("agree", { required: true })} />
                                <svg viewBox="0 0 64 64" width="30">
                                    <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                                </svg>
                                <a href="">{t('formIgree')}</a>
                            </label>
                        </div>

                        <div className="form__group">
                            <button type="submit" disabled={!isValid} className={sending == 1 ? sending : ''}>{t('orderButton')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
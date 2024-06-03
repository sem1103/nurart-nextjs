
import React from 'react'
import s from './Contact.module.css'
import { useTranslations } from 'next-intl';

export default function Contact() {
    const t  = useTranslations();
    return (
        <div className={s.contact}>
            <div className={s.message}>
                <svg width="71" height="57" viewBox="0 0 71 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 50.25L24.625 28.5M64.5 50.25L46.375 28.5M2.875 14L29.0656 31.4602C31.3911 33.0106 32.5536 33.786 33.8104 34.0868C34.9211 34.3533 36.0789 34.3533 37.1896 34.0868C38.4464 33.786 39.6089 33.0106 41.9344 31.4602L68.125 14M14.475 53.875H56.525C60.5854 53.875 62.6157 53.875 64.1665 53.0847C65.5306 52.3898 66.6398 51.2806 67.3347 49.9165C68.125 48.3657 68.125 46.3354 68.125 42.275V14.725C68.125 10.6646 68.125 8.63442 67.3347 7.08357C66.6398 5.71938 65.5306 4.61027 64.1665 3.91521C62.6157 3.125 60.5854 3.125 56.525 3.125H14.475C10.4146 3.125 8.38442 3.125 6.83357 3.91521C5.46938 4.61027 4.36027 5.71938 3.66521 7.08357C2.875 8.63442 2.875 10.6646 2.875 14.725V42.275C2.875 46.3354 2.875 48.3657 3.66521 49.9165C4.36027 51.2806 5.46938 52.3898 6.83357 53.0847C8.38442 53.875 10.4146 53.875 14.475 53.875Z" stroke="#303030" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3>{t('contactMessage')}</h3>
                <p>nur.art@az</p>
                <a href="mailto:nur.art@az" className={s.link}></a>
            </div>

            <div className={s.phone}>
                <svg width="71" height="66" viewBox="0 0 71 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3993 13.25C17.5246 7.00166 26.0604 3.125 35.5017 3.125C44.9429 3.125 53.4786 7.00166 59.6039 13.25M50.5954 23.375C46.8872 19.2322 41.4987 16.625 35.5013 16.625C29.504 16.625 24.1157 19.2322 20.4078 23.375M6.44796 48.9271C22.5792 32.9435 48.6136 33.0626 64.5976 49.1941C65.0849 49.6858 65.5574 50.1867 66.0147 50.6963C66.9695 51.7604 67.4471 52.2923 67.6597 53.047C67.8332 53.6616 67.8099 54.4648 67.6006 55.0683C67.3438 55.8091 66.7704 56.3771 65.6236 57.5135L61.5881 61.5122C60.6201 62.4713 60.1361 62.9509 59.5634 63.2027C59.0575 63.4251 58.5047 63.52 57.9535 63.4788C57.3295 63.4322 56.7136 63.1413 55.4813 62.5594L48.8896 59.4463C47.4559 58.7693 46.7391 58.4308 46.2743 57.8962C45.8643 57.425 45.5933 56.8493 45.4913 56.233C45.3756 55.534 45.5713 54.7659 45.9628 53.2296L46.7732 50.05C39.5625 47.3027 31.4979 47.2605 24.2637 49.947L25.0449 53.1337C25.4224 54.6737 25.6111 55.4436 25.489 56.1412C25.3812 56.7564 25.1049 57.3299 24.6907 57.7973C24.221 58.3275 23.5011 58.6593 22.0613 59.3231L15.4413 62.3758C14.2038 62.9462 13.5851 63.2317 12.9608 63.2726C12.4093 63.3087 11.8573 63.2088 11.3535 62.9816C10.783 62.7248 10.3035 62.2408 9.34435 61.2725L5.34562 57.237C4.20922 56.0902 3.64104 55.5168 3.39119 54.774C3.18761 54.1685 3.17144 53.3652 3.35049 52.752C3.57027 51.9994 4.05255 51.4719 5.01713 50.4168C5.4792 49.9113 5.95616 49.4145 6.44796 48.9271Z" stroke="#303030" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <h3>{t('contactPhone')}</h3>
                <p><a href="tel:+994 12 598 54 57">+994 12 598 54 57</a></p>
                <p><a href="tel:+994 12 498 68 89">+994 12 498 68 89</a></p>
            </div>

            <div className="location">
                <svg width="54" height="66" viewBox="0 0 54 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.2494 -0.0224609C12.9016 -0.0224609 0.75 11.5007 0.75 25.1483C0.75 39.4414 14.8353 54.0584 24.3094 64.3317C24.3466 64.3729 25.8778 65.9755 27.7634 65.9755H27.9297C29.8175 65.9755 31.3378 64.3729 31.375 64.3317C40.265 54.6957 53.25 38.8041 53.25 25.1483C53.25 11.4987 43.7716 -0.0224609 27.2494 -0.0224609ZM28.1266 61.5638C28.05 61.636 27.9384 61.7164 27.84 61.7845C27.7394 61.7185 27.63 61.636 27.5491 61.5638L26.405 60.3222C17.4231 50.6078 5.12281 37.3026 5.12281 25.1462C5.12281 13.7365 15.2553 4.09841 27.2472 4.09841C42.1856 4.09841 48.8728 14.6687 48.8728 25.1462C48.8728 34.3739 41.8925 46.6292 28.1266 61.5638ZM27.0766 12.466C19.8294 12.466 13.9516 18.0059 13.9516 24.841C13.9516 31.6761 19.8294 37.216 27.0766 37.216C34.3237 37.216 40.2016 31.674 40.2016 24.841C40.2016 18.0079 34.3259 12.466 27.0766 12.466ZM27.0766 33.091C22.2509 33.091 18.2259 29.3001 18.2259 24.7502C18.2259 20.2004 22.1503 16.5002 26.9759 16.5002C31.8038 16.5002 35.7259 20.2004 35.7259 24.7502C35.7281 29.3001 31.9044 33.091 27.0766 33.091Z" fill="#303030" />
                </svg>
                <h3>{t('contactAddress')}</h3>

                <p dangerouslySetInnerHTML={{__html: t('address')}} />
                <a href="https://maps.app.goo.gl/q3ctX2jToeDc89RT6" className={s.link}></a>

            </div>
        </div>
    )
}
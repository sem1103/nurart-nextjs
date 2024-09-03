import Link from "next/link"
import './404.css'
import { useTranslations } from "next-intl"

export default function notFound(){
    const t = useTranslations()
    return(
        <div className="notFound__wrapper">
            <div className="video">
            <video src="/assets/img/404.mp4" autoPlay muted loop></video>

            </div>
            <div className="notFound">
            <h1>{t('notFound')}</h1>
            <Link href='/' className='menu__link'>
                                - Главная
            </Link>
            </div>
        </div>
    )
}
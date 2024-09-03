import Link from "next/link"
import './404.css'

export default function notFound(){
    return(
        <div className="notFound__wrapper">
            <video src="/assets/img/40d4.mp4" autoPlay muted loop></video>
            <div className="notFound">
            <h1>Увы, страница не найдена... </h1>
            <Link href='/' className='menu__link'>
                                - Главная
            </Link>
            </div>
        </div>
    )
}
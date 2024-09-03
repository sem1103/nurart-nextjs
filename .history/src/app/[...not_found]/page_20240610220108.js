import Link from "next/link"
import './404.css'

export default function notFound(){
    return(
        <div className="notFound">
            <h1>Страница не найдена!</h1>
            <Link href='/' className='menu__link'>
                                - Главная
            </Link>
        </div>
    )
}
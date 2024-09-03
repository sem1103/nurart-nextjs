import Link from "next/link"
import './404.css'

export default function notFound(){
    return(
        <div className="notFound">
            <h1>Увы, страница не найдена... </h1>
            <Link href='/' className='menu__link'>
                                - Главная
            </Link>
        </div>
    )
}
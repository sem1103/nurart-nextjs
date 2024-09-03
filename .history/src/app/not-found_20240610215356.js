import Link from "next/link"


export default function page(){
    return(
        <div className="notFound">
            <h1>Страница не найдена!</h1>
            <Link href='/' className='menu__link'>
                                - Главная
            </Link>
        </div>
    )
}
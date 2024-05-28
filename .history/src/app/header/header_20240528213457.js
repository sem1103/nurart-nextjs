import Link from "next/link";

export default function Header(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link href='/' >Home</Link>
                        <Link href='/blog' >Blog</Link>
                        
                    </li>
                </ul>
            </nav>
        </>
    )
}
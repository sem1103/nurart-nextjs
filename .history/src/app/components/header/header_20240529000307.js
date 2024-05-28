'use client'
import useDataSlice from "@/store/dataSlice";
import Link from "next/link";

export default function Header(){
    const {setOnloadImg, imagesLoaded, campaignSlides , fetchCampaignSlides } = useDataSlice();



    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link href='/' >Home</Link> <br/>
                        <Link href='/blog' >Blog</Link>
                        
                    </li>
                </ul>
            </nav>
        </>
    )
}
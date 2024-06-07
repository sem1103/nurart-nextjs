import Contact from "@/components/Contact/Contact";

export function ContactUs() {
    return(
        <>
        <h1>Bizimlə əlaqə</h1>
        <Contact />

        <div className="map">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315.622357059992!2d49.844877489188974!3d40.37620870706728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d2dcbdeca0d%3A0xf0df876ed15471b0!2sNurArt!5e1!3m2!1saz!2saz!4v1717726323202!5m2!1saz!2saz" width="100%" height="350" style={{border : 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        </>
    )
}
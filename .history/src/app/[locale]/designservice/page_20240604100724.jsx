
import ServicesPage from "@/components/ServicesPage/ServicesPage";
import React from "react";


export default function DesignService(){
    let content = {
        title: 'Dizayn xidmətləri',
        text1: 'Bizim poliqrafiya dizayn xidmətlərimizə marağınız üçün təşəkkür edirik. Bizim yaratıcı professional komandamız sizə brendinizin xüsusiyyətlərini vurğulayacaq və hədəf auditoriyanın diqqətini cəlb edəcək unikal və üslublu dizayn çözümləri təklif etməyə hazırdır.',
        icons: true,
        img: 'public/assets/img/servicesPage/design.png',
        otherContent: {
            text1:'Biz hər bir layihənin unikal olmasını və sizin fərdi tələbatlarınıza cavab verərək işləməyə çalışırıq. Bizim məqsədimiz sadəcə dizayn yaratmaq deyil, həm də sizi rəqibləriniz arasında seçilməz və auditoriyanızın üzərində unudulmaz bir təsir qoymağa kömək etməkdir.'
        }
    }

    return(
        <>
            <ServicesPage content={content} />
        </>
    )
}
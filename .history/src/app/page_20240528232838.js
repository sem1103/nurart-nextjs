import useDataSlice from "@/store/dataSlice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


export default function Home() {
  
  const {setOnloadImg, imagesLoaded, campaignSlides , fetchCampaignSlides } = useDataSlice();
  const {t} = useTranslation();

  useEffect(() =>{
                
    if(!campaignSlides.length){
        fetchCampaignSlides();
        setOnloadImg(true);
    } else setOnloadImg(true)

    return () =>   {
        setOnloadImg(false);
    };
},[])

  
  let features = [
    {
        text: t('homeIcon1'),
        url: 'http://localhost/wp-content/uploads/2024/05/qualityIcon-svg.png'
    },
    {
        text: t('homeIcon2'),
        url: 'http://localhost/wp-content/uploads/2024/05/designIcon-svg.png'
    },
    {
        text: t('homeIcon3'),
        url: 'http://localhost/wp-content/uploads/2024/05/technologiesIcon-svg.png'
    }
];

const servicesSlider = [
    {
        url: 'http://localhost/wp-content/uploads/2024/05/service1.png',
        title: t('navPolygrafy'),
        btnLink: 'prod/polygraphy'
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/service2.png',
        title: t('navCart'),
        btnLink: 'prod/plastic-cards'
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/service3.png',
        title: t('navPromo'),
        btnLink: 'prod/promo-products'
    }
    ,
    {
        url: 'http://localhost/wp-content/uploads/2024/05/service4.png',
        title: t('navStamb'),
        btnLink: 'prod/stamp'
    }
    ,
    {
        url: 'http://localhost/wp-content/uploads/2024/05/service5.png',
        title: t('navVinil'),
        btnLink: 'prod/vinil-products'
    }
    ,
    {
        url: 'http://localhost/wp-content/uploads/2024/05/service6.png',
        title: t('navLazer'),
        btnLink: '/'
    }

];

const clientSlider = [
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide1-1.png' 
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide2-1.png' 
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide3-1.png' 
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide4.png' 
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide5.png' 
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide6.png' 
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide7.png' 
    },
];

const portfolioSlider = [
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide1-3.png'
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide2-3.png'
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide3-2.png'
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide4-1.png'
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/slide5-1.png'
    }
];




const feedbacks = [
    {
        url: 'http://localhost/wp-content/uploads/2024/05/person2.png',
        name: 'Mira Peterson',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, exercitation ullamco laboris nisi ut ',
        raiting: 4
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/person1.png',
        name: 'Diego Curumim',
        text: 'Lorem ipsum dolor asdad sit amet, consectetur adipisicing psum dolor asdad psum dolor asdad psum dolor asdad  ',
        raiting: 5
    },
    {
        url: 'http://localhost/wp-content/uploads/2024/05/person2.png',
        name: 'John Dou',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ',
        raiting: 2
    }
    ,
    {
        url: 'http://localhost/wp-content/uploads/2024/05/person1.png',
        name: 'Polik',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ',
        raiting: 4
    }
];


  return (
    <></>
  );
}


import React, { useState } from "react";
import Carousel from '@/app/component/carousal';
export const Written = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);

    const handleCarouselChange = (index:any) => {
      setCarouselIndex(index);
    };
  
    
    const carousels = [
        {
          paragraph: 'Pay your rent at Ease',
          text:'With your rent balance available at your fingertips, monitoring and making payments can be done in app with ease at the simple tap of a button.',
          image: "/carousel-1.jpg",
        },
        {
          paragraph: "Manage your repair",
          text: 'Easily report repairs and schedule appointments for a time that suits you, all in only a few minutes.',
          image: "/carousel-2.jpg",
        },
        {
          paragraph: 'Easy Messaging',  
          text: 'Get in touch with our easy to use direct messaging feature.',
          image: "/carousel-3.jpg",
        },
        {
            paragraph: 'Give Feedbacks',
            text:'With your rent balance available at your fingertips, monitoring and making payments can be done in app with ease at the simple tap of a button.',
            image: "/carousel-1.jpg",
          },
          {
            paragraph: "Go Paperless",
            text: 'Have your voice heard! Fill in surveys in the app so we can improve our quality of service and get your thoughts.',
            image: "/carousel-2.jpg",
          },
      ];
      console.log(carousels[carouselIndex].paragraph,"39");
    return (
        <>
         <Carousel
        paragraph={carousels[carouselIndex].paragraph}
        text={carousels[carouselIndex].text}
      />
        </>
      
  )
}

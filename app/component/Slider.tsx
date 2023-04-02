"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import styles from './page.module.css'
import { Img } from "./img";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css";
import { Autoplay,Pagination,  Navigation } from "swiper";
import { Written } from "@/lib/written";
import Carousel from "./carousal";
import { Exp } from "./exp";
import main from ".././main.module.css"
const Data = [
  {
    paragraph: 'Pay your rent at Ease',
    text:'With your rent balance available at your fingertips, monitoring and making payments can be done in app with ease at the simple tap of a button.',
    image: "/credit.png"
    // srcs: { Credit },
  },
  {
    paragraph: "Manage your repair",
    text: 'Easily report repairs and schedule appointments for a time that suits you, all in only a few minutes.',
    // srcs: { Credit },
    image: "/painter.png"
  },
  {
    paragraph: 'Easy Messaging',  
    text: 'Get in touch with our easy to use direct messaging feature.',
    // srcs: { Credit }
    image: "/customer.png"
  },
  {
      paragraph: 'Give Feedbacks',
      text:'With your rent balance available at your fingertips, monitoring and making payments can be done in app with ease at the simple tap of a button.',
      // srcs: { Credit }
      image: "/rating.png"
    },
    {
      paragraph: "Go Paperless",
      text: 'Have your voice heard! Fill in surveys in the app so we can improve our quality of service and get your thoughts.',
      // srcs: { Credit }
      image: "/document.png"
    },
];
export default function App() {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const handleCarouselChange = (index:any) => {
        setCarouselIndex(index);
    };
  return (
    <>
         <style>
        {`
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
        `}
      </style>
   
      <Swiper
       className={main.slider}
        spaceBetween={30}
        centeredSlides={true}
        onSlideChange={(swiper) => handleCarouselChange(swiper.activeIndex)}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={false
            
        }
        modules={[Autoplay,Pagination, Navigation]}
      
      >
        {Data.map((slide, index) => (
        <SwiperSlide className={main.slider} key={index}>
          <Exp slide={slide} />
        </SwiperSlide>
      ))}
       
        {/* <SwiperSlide className={main.slider}><Exp /></SwiperSlide>
        <SwiperSlide className={main.slider}><Exp /></SwiperSlide>
        <SwiperSlide className={main.slider}><Exp /></SwiperSlide>
        <SwiperSlide className={main.slider}><Exp /></SwiperSlide>
        <SwiperSlide className={main.slider}><Exp /></SwiperSlide>
        <SwiperSlide className={main.slider}><Exp /></SwiperSlide> */}
       
      </Swiper> 
      
    </>
  );
}
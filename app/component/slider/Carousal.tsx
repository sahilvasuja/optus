"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Exp } from "../sliderdata/data";
import main from "./main.module.css";
const Data = [
  {
    paragraph: "Pay your rent at Ease",
    text: "With your rent balance available at your fingertips, monitoring and making payments can be done in app with ease at the simple tap of a button.",
    image: "/credit.png",
  },
  {
    paragraph: "Manage your repair",
    text: "Easily report repairs and schedule appointments for a time that suits you, all in only a few minutes.",
    image: "/painter.png",
  },
  {
    paragraph: "Easy Messaging",
    text: "Get in touch with our easy to use direct messaging feature.",
    image: "/customer.png",
  },
  {
    paragraph: "Give Feedbacks",
    text: "With your rent balance available at your fingertips, monitoring and making payments can be done in app with ease at the simple tap of a button.",
    image: "/rating.png",
  },
  {
    paragraph: "Go Paperless",
    text: "Have your voice heard! Fill in surveys in the app so we can improve our quality of service and get your thoughts.",
    image: "/document.png",
  },
];
export const Carousal = () => {
  return (
    <>
      <style>
        {`
       
            .swiper-pagination-bullet{
              width: 13px;
              height: 13px;
              background: gray;
              flex: none;
              order: 3;
             
            }
          .swiper-pagination-bullet-active {
            width: 34px;
            height: 13px;
            background: #6206B7;
            border-radius: 14px;
            flex: none;
            order: 2;
            flex-grow: 0;
           
          }
        `}
      </style>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}

        autoplay={{
          delay: 1500000,
          disableOnInteraction: false,
        }}
       
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {Data.map((slide, index) => (
          <SwiperSlide className={main.slider} key={index}>
            <Exp slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import React, { useState } from "react";
import Carousel from '@/app/component/carousal';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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

  return (
    <div>
      <Carousel
        text={carousels[carouselIndex].text}
        paragraph={carousels[carouselIndex].paragraph}
      />
      <button onClick={() => handleCarouselChange(0)}>Carousel 1</button>
      <button onClick={() => handleCarouselChange(1)}>Carousel 2</button>
      <button onClick={() => handleCarouselChange(2)}>Carousel 3</button>
    </div>
  )
}

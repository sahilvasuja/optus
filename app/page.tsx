"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
// import Slider from './component/slider'
import main from './main.module.css'
import React, { useState } from "react";
import Carousel from '@/app/component/carousal';
const inter = Inter({ subsets: ['latin'] })
import { Written } from '@/lib/written'
import Slider from './component/Slider';
import { Exp } from './component/exp';
import { Optushomes } from './component/optushomes';
export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleCarouselChange = (index:any) => {
    setCarouselIndex(index);
  };

  

  return (
   <>
   {/* <div className='w-full h-screen bg-white relative'>
    <p className='text-black'>hlo</p>
      <div className="w-706 h-966 left-33 top-29 bg-black absolute border-red-500  border-2 ">
        <Slider />
        <Optushomes />
      </div>
    </div> */}
    {/* <div className="w-full h-screen bg-white relative">
  <div className=" absolute  transform  w-706 h-966 bg-black border-2 border-red-500">
  <div className='flex flex-col items-center absolute p-0 w-554 h-812 top-88 left-76 bg-blue-300 border-4 boder-green-300'>

    <Optushomes />
    <div>
      <p>
        hlo
      </p>
      <p>hey</p>
    </div>
  </div>
    <Slider />
  </div>
</div> */}


{/* <div className={main.outer}> */}
  <div className={main.inner}>
    <div className={main.content}>
      <div>
      <Optushomes />
      </div>
      <Slider />
    </div>
  </div>
{/* </div> */}
{/* <Slider /> */}
          </>
   
  )
}
